import { POSIdType, RoadItemType, RoutePlanningType, RouteRawTypeFromDB } from "@/redux/features/types";
import { getAllActivitiesForPOSOnLoad } from "./getAllActivitiesForPOS";

export const structureRoutes = (dbRoutes: RoutePlanningType[], activities: any) => {
    const newRouteFormat: RoutePlanningType [] = dbRoutes?.map((route: any) => {
        const roadItems: RoadItemType [] = route?.pos?.map((rItem: POSIdType) => {
          // GOT THROUGH THE ARRAY OF ACTIVITIES activities_items TO FIND ID OF A SPECIFIC POS
          const isChannelClusterInActivities = getAllActivitiesForPOSOnLoad (activities as [], route?.activities_items as [], rItem?.channelCluster as string); 
          return {
            _id: rItem?._id,
            taskIds: isChannelClusterInActivities,
            roadId: route?._id,
            posId: rItem,
            createdAt: rItem?.createdAt,
            updatedAt: rItem?.updatedAt,
            __v: rItem?.__v
          }
        })
    
        return {
          _id: route?._id,
          name: route?.name, 
          roadItems: roadItems, 
          saleRep: route?.saleRep, 
          createdAt: route?.createdAt,
          updatedAt: route?.updatedAt,
          __v: route?.__v, 
        }
    })

    return newRouteFormat
}
