import { IChannelCluster, TradeChannel } from "@/redux/features/types";

export const channelClusterObjectFormation = (elementCC: IChannelCluster, heightValue: number) => {
    return {
        id: elementCC?._id as string, 
        name: elementCC?.name,
        color: elementCC?.color, 
        position: {
          x: 10, 
          y: heightValue
        }, 
        type: "channelClusterCreation", 
        width: 250, 
        height: 94,
        data: {
          name: elementCC?.name,
          id: elementCC?._id as string, 
          color: elementCC?.color as string, 
        }, 
        trade_channels_id: elementCC?.trade_channels_id
    }
}


export const tradeChannelObjectFormation = (elementCC: IChannelCluster, elementTC: TradeChannel,  heightValue: number) => {
    return {
        id: elementTC?._id as string, 
        name: elementTC?.name,
        position: {
          x: 400, 
          y: heightValue, 
        }, 
        type: "tradeChannelCreation", 
        width: 250, 
        height: 94, 
        data: {
          id: elementTC?._id as string, 
          name: elementTC?.name, 
          color: elementCC?.color as string, 
          categories_id: elementTC?.categories_id, //[], 
          channel_cluster_id: elementTC?.channel_cluster_id, 
        }, 
        categories_id: elementTC?.categories_id, //[], 
        channel_cluster_id: elementTC?.channel_cluster_id, 
        // channel_cluster_ids
    }
}


export const categoryObjectFormation = (elementsCats: any, heightValue: number) => {
    return {
        id: elementsCats?._id, 
        name: elementsCats?.name,
        position: {
          x: 800, 
          y: heightValue, 
        }, 
        type: 'categoryCreation', 
        width: 250, 
        height: 94, 
        data: {
          name: elementsCats?.name,
          id: elementsCats?._id, 
          trade_chanel_id: elementsCats?.trade_chanel_id, 
          activities_ids: []
        }, 
        trade_chanel_id: elementsCats?.trade_chanel_id, 
        activities_ids: [], 
    }
}


export const activityObjectFormation = (element: any, allAct: any, widthValue: number, heightValue: number) => {
    return {
        id: element?._id, 
        name: allAct?.name, 
        width: 350, 
        height: 150, 
        frequency: element?.frequency, 
        duration: element?.time, 
        priority: element?.priority, 
        description: allAct?.description, 
        activityParentID: allAct?._id, 
        type: "activityCreation", 
        position: {
          x: widthValue, 
          y: heightValue
        },
        data: {
          activityParentID: allAct?._id, 
          name: allAct?.name, 
          id: element?._id, 
          frequency: element?.frequency, 
          duration: element?.time, 
          time: element?.time, 
          priority: element?.priority, 
          description: allAct?.description, 
          channelCluster: element?.channelClusters, 
          tradeChannel: element?.tradeChannels,
          category: element?.categories, // color: color.hex, 
        }, 
        channelCluster: element?.channelClusters, 
        tradeChannel: element?.tradeChannels, 
        category: element?.categories
      }
}