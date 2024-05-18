import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useMakeGetRequestRevalidate from './useMakeGetRequestRevalidate';
import { BASE_URL, ROUTE_API_URL, ROUTE_USEQUERY_KEY } from '@/utils/constants';
import { loadRouteFromDB } from '@/redux/features/route-planning-slice';
import { RoutePlanningType, RouteRawTypeFromDB } from '@/redux/features/types';

export const useRoutePlanning = () => {

  const dispatch = useDispatch<AppDispatch>();

  let { data: routeData } = useMakeGetRequestRevalidate (`${ BASE_URL }/${ ROUTE_API_URL }`, ROUTE_USEQUERY_KEY); 
  // let { data: routeData } = useMakeGetRequestRevalidate (`http://localhost:4000/roads`, ROUTE_USEQUERY_KEY); 

  // console.log(routeData, "ROUTE DATA2222")

  dispatch(loadRouteFromDB({
    newRoute: routeData, 
  }));

  const dbRoutes: RouteRawTypeFromDB [] = useSelector(
    (state: RootState) => state.RoutePlanningReducer?.dbRoutes!
  );

  const routes:
    | [
        {
          id: number | string;
          routeName: string;
          salesRepresentative: string | number[];

          pointOfSales: [
            {
              id: string | number;
              tasks: string[];
            },
          ];
        },
      ]
    | any[] = useSelector(
    (state: RootState) => state.RoutePlanningReducer.routes
  );
  const searchedSalesAgent = useSelector(
    (state: RootState) => state?.RoutePlanningReducer.searchedSalesAgent
  );
  const searchedPointOfSales = useSelector(
    (state: RootState) => state?.RoutePlanningReducer.searchedSalesPointValue
  );

  const selectedRouteId = useSelector(
    (state: RootState) => state?.RoutePlanningReducer.selectedRouteId
  );

  const travelTime = useSelector(
    (state: RootState) => state?.RoutePlanningReducer.travelTime
  );

  const toggleMapsValue = useSelector(
    (state: RootState) => state?.RoutePlanningReducer.toggleMaps
  );

  const showAllRoutes = useSelector(
    (state: RootState) => state?.RoutePlanningReducer.showAllRoutes
  );

  const showPOSMap = useSelector(
    (state: RootState) => state?.RoutePlanningReducer.showPOSMap
  );

  

  

  return {
    routes, dbRoutes, 
    dispatch,
    searchedPointOfSales,
    searchedSalesAgent,
    travelTime,
    selectedRouteId,
    toggleMapsValue,
    showAllRoutes,
    showPOSMap, 
  };
};
