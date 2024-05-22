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
import { activityObjectFormation, categoryObjectFormation, channelClusterObjectFormation, tradeChannelObjectFormation } from '@/utils/objectsFormation';

const ActivityModule = () => {
  
  const { channelClusters, tradeChannels, categories, dispatch } = useSettings(); 

  const { connectTwoNodes } = useConnectNodes(); 

  const { activities, lastestHight } = useActivities ()

  useEffect (() => {
    let heightValue = 100
    if (channelClusters?.length > 0) {
      
      // BUILDING THE CHANNELCLUSTER GRAPH FROM DATA COMING FROM BACKEND
      channelClusters?.forEach ((elementCC: IChannelCluster) => {

        const finalCCValue = channelClusterObjectFormation (elementCC, heightValue)

        // CREATING LOCAL CHANNEL CLUSTER
        dispatch(createLocalChannelClusterFromDB({
          finalCCValue, 
        }))

        elementCC?.trade_channels_id?.forEach((elementTC: TradeChannel) => {
          heightValue = heightValue + 100
          // state.locaTradeChannels?.push();

          const finalTCValue = tradeChannelObjectFormation (elementCC, elementTC, heightValue)

          // CREATING LOCAL TRADE CHANNEL
          dispatch(createLocalTradeChannelFromDB({
            finalTCValue, 
          }))
          connectTwoNodes (elementCC?._id as string, elementTC?._id as string, MarkerType.Arrow)

          elementTC?.categories_id?.forEach((elementsCats: any) => {
            heightValue = heightValue + 100

            const finalCatValue = categoryObjectFormation (elementsCats, heightValue)

            // CREATING LOCAL CATEGORY
            dispatch(createLocalCategoryFromDB({
              finalCatValue, 
            }))

            connectTwoNodes (elementTC?._id as string, elementsCats?._id as string, MarkerType.Arrow); 
          });

        });

      })

      if (activities?.length > 0) {

        heightValue = 100; 
        let widthValue = 1200

        activities?.forEach((allAct: any) => {
          allAct?.activitieItems?.forEach((element: any, index: number) => {
            widthValue = 1200
            heightValue = heightValue + 200
            const evenOrOdd = isOddOrEven (index) ? 100 : 400
            widthValue = widthValue + evenOrOdd

            const finalValueA = activityObjectFormation (element, allAct, widthValue, heightValue)

            // CONNECT ACTIVITIES WITH CATEGORIES
            element?.categories?.forEach((cats: any) => {
              connectTwoNodes (cats?._id, element?._id, MarkerType.Arrow)
            });

            // CREATE ACTIVITIES FOR UI DISPLAY IN THE STATE WITH DATA FROM DB
            dispatch(createLocalActivities({
              finalValueA, 
            }))

            // CREATE GAP IN BETWEEN ELEMENTS
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

  }, [channelClusters, activities, tradeChannels, categories ])

  return (
    <Sidebar channelClusters={ channelClusters } />
  )

}

export default ActivityModule




