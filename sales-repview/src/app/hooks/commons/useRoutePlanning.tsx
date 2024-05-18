import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const useRoutePlanning = () => {
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

  const dispatch = useDispatch<AppDispatch>();

  return {
    routes,
    dispatch,
    searchedPointOfSales,
    searchedSalesAgent,
    travelTime,
    selectedRouteId,
    toggleMapsValue,
    showAllRoutes,
  };
};
