import { pointOfSales } from '@/core/utils/pointOfSalesData';
import { createSlice, current } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import {
  addUniquePointOfSale,
  updateSalesRepresentative,
  updateTaskStatus,
  updateTasksInPointOfSales,
} from '../utils';
import { users } from '@/core/utils/usersData';
import { routes } from '@/core/utils/routes';

// Just a boiler plate, this file needs to be updated

type RoutePlanningState = {
  searchedSalesPointValue: string;
  searchedSalesAgent: string;
  selectedRouteId: number;
  toggleMaps: boolean;
  travelTime: number;
  showAllRoutes: boolean;
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
};

// Remove a point of sales function

export const routePlanning = createSlice({
  name: 'routePlanning',
  initialState,
  reducers: {
    createRoute: (state, action) => {
      state.selectedRouteId = state.selectedRouteId + 10;
      state.routes.push({
        id: state.selectedRouteId,
        salesRepresentative: [''],
        routeName: `Route-${uuidv4()}`,
        pointOfSales: [],
      });
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
      state.selectedRouteId = 20;
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
    // Removes point of sales from route
    removePointOfSalesFromRoute: (state, action) => {
      const { routeId, posId } = action.payload;

      state.routes = state.routes.map((route) => {
        if (route.id === routeId) {
          const updatedPointOfSales = route.pointOfSales.filter(
            (point: { id: string }) => point.id?.toString() !== posId.toString()
          );
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
      const { posId, routeId, currentActivity, ActivityId } = action.payload;

      let updatedRoutes = updateTasksInPointOfSales(
        state?.routes,
        routeId,
        posId,
        currentActivity
      );

      state.routes = updatedRoutes;
    },

    // Assign route to a sells representative

    assignRouteToSalesRepresentative: (state, action) => {
      const { routeId, salesRepId } = action?.payload;

      let salesRep = users?.find((user) => user?.id === salesRepId);

      let updatedRoutes = updateSalesRepresentative(
        state.routes,
        routeId,
        salesRep?.name
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
  deleteRoute,
  updatePointOfSalesOrder,
  toggleMaps,
  addTaskToPointOfSales,
  assignRouteToSalesRepresentative,
  selectedRoute,
  displayAllRoutes,
  updateActivityStatus,
} = routePlanning.actions;
export default routePlanning.reducer;
