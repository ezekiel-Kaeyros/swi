"use client";
import React, { useEffect } from 'react'
import Sidebar from '../../components/activity-flow-builder/sidebar-elements/Sidebar';
import { useSettings } from '@/app/hooks/useSettings';
import { MarkerType } from 'reactflow';
import { createLocalCategoryFromDB, createLocalChannelClusterFromDB, createLocalTradeChannelFromDB, loadLocalChannelClusterFromDBData } from '@/redux/features/channel-cluster-slice';
import { createGapBetweenElementOnCanvas, createLocalActivities } from '@/redux/features/activities-slice';
import { useActivities } from '@/app/hooks/useActivities';
import { useConnectNodes } from '@/app/hooks/useConnectNodes';
import { IChannelCluster, TradeChannel } from '@/redux/features/types';
import { isOddOrEven } from '@/utils/oddOrEven';

const ActivityModule = () => {
  
  const { channelClusters, dispatch, lastestHightCC } = useSettings(); 

  const { connectTwoNodes } = useConnectNodes(); 

  const { activities, lastestHight } = useActivities ()

  useEffect (() => {
    let heightValue = 100
    if (channelClusters?.length > 0) {
      
      // BETTER ALTERNATIVE
      channelClusters?.forEach ((elementCC: IChannelCluster) => {

        const finalCCValue = {
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

        dispatch(createLocalChannelClusterFromDB({
          finalCCValue, 
        }))

        elementCC?.trade_channels_id?.forEach((elementTC: TradeChannel) => {
          heightValue = heightValue + 100
          // state.locaTradeChannels?.push();

          const finalTCValue = {
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

          dispatch(createLocalTradeChannelFromDB({
            finalTCValue, 
          }))
          connectTwoNodes (elementCC?._id as string, elementTC?._id as string, MarkerType.Arrow)

          elementTC?.categories_id?.forEach((elementsCats: any) => {
            heightValue = heightValue + 100
            // state.localCategories?.push();
            const finalCatValue = {
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

            dispatch(createLocalCategoryFromDB({
              finalCatValue, 
            }))

            connectTwoNodes (elementTC?._id as string, elementsCats?._id as string, MarkerType.Arrow); 
          });
          
        });

      })

      if (activities?.length > 0) {
        // dispatch(loadActivitiesFromDB({
        //   allActivities: activities, 
        // }))

        heightValue = 100; 
        let widthValue = 1200
  
        activities?.forEach((allAct: any) => {
          allAct?.activitieItems?.forEach((element: any, index: number) => {
            widthValue = 1200
            heightValue = heightValue + 200
            const evenOrOdd = isOddOrEven (index) ? 100 : 400
            widthValue = widthValue + evenOrOdd
  
            console.log("finalValuefinalValue---", element, index, evenOrOdd, widthValue)
            const finalValueA = {
              // id: state.locaChannelClusters?.length + 1,
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
  
            
            element?.categories?.forEach((cats: any) => {
              connectTwoNodes (cats?._id, element?._id, MarkerType.Arrow)
            });
  
            dispatch(createLocalActivities({
              finalValueA, 
            }))
  
            dispatch(createGapBetweenElementOnCanvas({
              newMeasure: lastestHight! + 100
            }))
  
          });
        });
      } else {
        console.log("Not ready yet")
      }

    } else {
      console.log("Not ready yet")
    }

  }, [channelClusters, activities])

  return (
    <Sidebar channelClusters={ channelClusters } />
  )

}

export default ActivityModule




