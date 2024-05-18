import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './features/auth-slice';
import RoutePlanningReducer from './features/route-planning-slice';
import pointOfSaleViewReducer from './features/create-point-of-sale-slice';
import ChannelClusterReducer from './features/channel-cluster-slice';
import ActivityReducer from './features/activities-slice';
import ToggleSideBarReducer from './design/toggle-sidebar-slice';
import HeaderReducer from '@/app/common/components/header/slice/header-title-slice';
import AgentCreationReducer from './features/agent-creation';
import ShopActions from './features/saleRep-slice';
import RoadManagementReducer from './features/roard-management-slice';
export const store = configureStore({
  reducer: {
    AuthReducer,
    RoadManagementReducer,
    RoutePlanningReducer,
    pointOfSaleViewReducer,
    ChannelClusterReducer,
    ActivityReducer,
    AgentCreationReducer,
    ToggleSideBarReducer,
    HeaderReducer,
    ShopActions,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
