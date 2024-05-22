import { pointOfSales } from '@/utils/pointOfSalesData';
import { createSlice, current } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import {
  addUniquePointOfSale,
  selectPOSActivities,
  sumUpSelectedPOSActivities,
  updateSalesRepresentative,
  updateTaskStatus,
  updateTasksInPointOfSales,
} from '../utils';
import { users } from '@/utils/usersData';
import { routes } from '@/utils/routes';
import { RoutePlanningType, RouteRawTypeFromDB } from './types';

// Just a boiler plate, this file needs to be updated

type RoutePlanningState = {
  searchedSalesPointValue: string;
  searchedSalesAgent: string; 
  selectedRouteId: number | string;
  toggleMaps: boolean;
  travelTime: number;
  showAllRoutes: boolean; 
  showPOSMap: boolean; 
  dbRoutes?: RouteRawTypeFromDB [], 
  routes:
    | [
        {
          id: number | string;
          routeName: string;
          salesRepresentative: string[] | number[];

          pointOfSales:
            | [
                {
                  id: string | number;
                  tasks: string[];
                },
              ]
            | any[];
        },
      ]
    | any[];
};

const initialState: RoutePlanningState = {
  showAllRoutes: true,
  searchedSalesPointValue: '',
  searchedSalesAgent: '',
  selectedRouteId: 0,
  toggleMaps: false,
  travelTime: 360,
  routes: routes,
  showPOSMap: false, 
  dbRoutes: [], 
};

// Remove a point of sales function

export const routePlanning = createSlice({
  name: 'routePlanning',
  initialState,
  reducers: {
    createRoute: (state, action) => {
      state.selectedRouteId = state.selectedRouteId as number + 10; 
      state.routes.push({
        id: state.selectedRouteId,
        salesRepresentative: [''],
        routeName: `Route-${uuidv4()}`,
        pointOfSales: [],
      });
    },

    loadRouteFromDB: (state, action) => {
      const { newRoute } = action?.payload;
      
      state.dbRoutes = newRoute;
    },

    displayPOSMap: (state, action) => {
      const { posMapDisplayState } = action?.payload;
      state.showPOSMap = posMapDisplayState; 
    },

    // Set active route

    selectedRoute: (state, action) => {
      const { selectedRouteId } = action?.payload;

      state.selectedRouteId = selectedRouteId;
    },
    // Displays all the routes (toggle maps)
    displayAllRoutes: (state, action) => {
      const { showAllRoutes } = action.payload;

      state.showAllRoutes = showAllRoutes;
      // state.selectedRouteId = 20;
    },

    // Toggling maps

    toggleMaps: (state, action) => {
      state.toggleMaps = action?.payload?.toggle;
    },

    // Adding a point of sale to a route
    addPointOfSalesToRoute: (state, action) => {
      const { routeId, posId } = action?.payload; 
      const pointOfSalesById = pointOfSales?.find(
        (pos) => pos?.id.toString() === posId?.toString()
      );

      const updatedRoutes = addUniquePointOfSale(
        state?.routes,
        routeId,
        pointOfSalesById
      );

      state.routes = updatedRoutes;
    },

    addPOSToRoute: (state, action) => {
      const { routeId, pos } = action?.payload; 

      // console.log (routeId, pos, "routeId, posId??")

      const updatedRoutes = state?.routes?.map((rout: any) => {
        // console.log(rout, "inside rout map", rout?.id)
        if (rout?.id === routeId) {
          // console.log(rout, "inside if")
          const findIfPOSAlreadySaved = rout.pointOfSales.find((routPos: any) => {
            return routPos?._id === pos?._id
          })
          if (findIfPOSAlreadySaved) {
            return rout
          }
          const result = [...rout.pointOfSales, pos]
          return {
            ...rout, 
            pointOfSales: result
          }
        }
        return rout
      })

      // console.log("updatedRoutes: ", updatedRoutes)

      state.routes = updatedRoutes;
    },

    // Removes point of sales from route
    removePointOfSalesFromRoute: (state, action) => {
      const { routeId, posId } = action.payload;
      // console.log(routeId, posId, "insideSlice")

      state.routes = state.routes.map((route) => {
        if (route.id === routeId) {

          const updatedPointOfSales = route.pointOfSales.filter( (point: { _id: string }) => {
            return point._id?.toString() !== posId.toString()
          });
          return { ...route, pointOfSales: updatedPointOfSales };
        }
        return route;
      });
    },

    // Updates the order of elements
    updatePointOfSalesOrder: (state, action) => {
      const { routeId, newOrder } = action.payload;

      // Find the route by ID
      const routeToUpdate = state.routes.find((route) => route.id === routeId);

      if (routeToUpdate) {
        // Update the order of point of sales within the route
        routeToUpdate.pointOfSales = newOrder;
      }
    },

    // Deletes a route

    deleteRoute: (state, action) => {
      state.routes = state.routes.filter(
        (route) => route.id === action.payload.routeId
      );
    },

    // Adds tasks to each point of sales
    addTaskToPointOfSales: (state, action) => {
      let { posId, routeId, currentActivity, ActivityId } = action.payload; 

      console.log("inside handleSelect", posId, routeId, currentActivity, ActivityId)

      currentActivity = {
        ...currentActivity, 
        selected: true
      }

      let updatedRoutes = updateTasksInPointOfSales(
        state?.routes,
        routeId,
        posId,
        currentActivity
      );

      console.log(updatedRoutes, "right after handleSelect")

      state.routes = updatedRoutes;
    },

    selectTaskForPOS: (state, action) => {
      let { posId, routeId, ActivityId, selected } = action.payload; 
      let updatedRoutes = selectPOSActivities (state.routes, posId, routeId, ActivityId, selected); 
      state.routes = updatedRoutes; 
    }, 

    sumUpSelectedPOSActivitiesTime: (state, action) => {
      let { posId, routeId } = action.payload; 
      let updatedRoutes = sumUpSelectedPOSActivities (state.routes, posId, routeId); 
      state.routes = updatedRoutes; 
    }, 

    // sumUpSelectedPOSActivities

    // Assign route to a sells representative

    assignRouteToSalesRepresentative: (state, action) => {
      const { routeId, salesRepId, foundAgent } = action?.payload;

      let salesRep = users?.find((user) => user?.id === salesRepId);

      let updatedRoutes = updateSalesRepresentative(
        state.routes,
        routeId,
        // salesRep?.name
        foundAgent?.id
      );

      state.routes = updatedRoutes;
    },

    // Updating tasks

    updateActivityStatus: (state, action) => {
      const { routeId, posId, activityId } = action?.payload;

      const updatedState = updateTaskStatus(
        state.routes,
        routeId,
        posId,
        activityId
      );

      state.routes = updatedState;
    },
  },
});

export const {
  createRoute,
  addPointOfSalesToRoute,
  removePointOfSalesFromRoute,
  deleteRoute, loadRouteFromDB, 
  updatePointOfSalesOrder,
  toggleMaps, selectTaskForPOS, 
  addTaskToPointOfSales,
  assignRouteToSalesRepresentative,
  selectedRoute, addPOSToRoute, 
  sumUpSelectedPOSActivitiesTime, 
  displayAllRoutes,
  updateActivityStatus, 
  displayPOSMap, 
} = routePlanning.actions;
export default routePlanning.reducer;
