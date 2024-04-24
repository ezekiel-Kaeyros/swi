import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './features/auth-slice';
import RoutePlanningReducer from './features/route-planning-slice';
import pointOfSaleViewReducer from './features/create-point-of-sale-slice';
import ChannelClusterReducer from './features/channel-cluster-slice';
import ActivityReducer from './features/activities-slice';
import AgentCreationReducer from './features/agent-creation';
import ToggleSideBarReducer from './design/toggle-sidebar-slice';
import HeaderReducer from '@/app/common/components/header/slice/header-title-slice';

export const store = configureStore({
  reducer: {
    AuthReducer,
    RoutePlanningReducer,
    pointOfSaleViewReducer,
    ChannelClusterReducer,
    ActivityReducer, 
    AgentCreationReducer, 
    // ActivityReducer,
    ToggleSideBarReducer,
    HeaderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
