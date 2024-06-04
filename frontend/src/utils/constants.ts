// export const BASE_URL = 'http://localhost:4000';
   export const BASE_URL = process.env.NEXT_PUBLIC_MAP_BASE_URL;
// export const BASE_URL = "https://back-end.kaeyros.shop"

export const AGENT_USEQUERY_KEY = "allAgentsKey";
export const CHANNEL_CLUSTER_USEQUERY_KEY = "allChannelClustersKey";
export const TRADE_CHANNEL_USEQUERY_KEY = "allTradeChannelKey"; 
export const CATEGORY_USEQUERY_KEY = "allCategoryKey"; 
export const POS_USEQUERY_KEY = "allPosKey"; 
export const USERS_USEQUERY_KEY = "allUserKey"; 
export const ACTIVITIES_USEQUERY_KEY = "allActivitiesKey"; 
export const ACTIVITIES_ITEMS_USEQUERY_KEY = "allActivitiesItemsKey"; 
export const ROUTE_USEQUERY_KEY = "roadKey"; 

export const CHANNELCLUSTER_API_URL = "channelCluster"; 
export const TRADECHANNEL_API_URL = "tradeChannel"; 
export const CATEGORY_API_URL = "category"; 
export const ACTIVITIES_API_URL = "activities"; 
export const ACTIVITIES_ITEMS_API_URL = "activitiesItem"; 
export const POINTOFSALE_API_URL = "pos"; 
export const ROUTE_API_URL = "roads"; 
export const SAVE_ROUTE_API_URL = "road"; 
export const ROUTE_ITEMS_API_URL = "roadItem"; 


export const FE_LINK_ROUTE_PREPARATION = "/route-preparation"
export const FE_LINK_POINT_OF_SALES = "/point-of-sales"
