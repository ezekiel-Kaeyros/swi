"use client";

import { ChannelClusterDotIcon, CloseIcon, DropdownPlusIcon, TradeChannelSvgIcon } from '@/app/common/components/svgs/SvgsIcons'
import useChangeNavigationItem from '@/app/hooks/useChangeNavigationItem';
import { useSettings } from '@/app/hooks/useSettings'
import { addToggleStateToAllChannelCluster, createLocalChannelClusterFromDBData, toggleStateToAllChannelClusterBuilder } from '@/redux/features/channel-cluster-slice'
// filterNodes
import { IChannelCluster } from '@/redux/features/types'
import React, { useEffect, useState } from 'react'
import TradeChannelFlowComp from '../flow-components/TradeChannelFlowComp';
import BaseFlowComponent from '../flow-components/base-flow-components/BaseFlowComponent';
import { useConnectNodes } from '@/app/hooks/useConnectNodes';
import { MarkerType } from 'reactflow';

const Sidebar = ({ channelClusters }: { channelClusters: IChannelCluster[] }) => {

  const [toggleDropdown, setToggleDropDown ] = useState (false)
  const [concernedID, setConcernedID ] = useState (null)

  const { toggleStateToAllChannelCB, dispatch } = useChangeNavigationItem (); 

  const [toggleSideBar, setToggleSideBar ] = useState (false)

  const { connectTwoNodes, deleteAndEdge } = useConnectNodes (); 

  return (
    <div className={``}>
        <div>
            <h1 className='text-[25px] mt-3 font-bold'>Flow Builder</h1>
        </div>

        {/* START SIDE BAR WHERE WE HAVE LIST OF CATEGORIZATION */}
        <div className=' h-screen left-0 p-6 flex flex-col gap-6 overflow-y-auto'>

        {
            channelClusters?.length > 0 ? 
                channelClusters?.map ((channel: IChannelCluster) => {
                          
                    return (
                      <div key={ channel?._id } className='flex flex-col'>

                        <div className='flex flex-row justify-between items-center'>
                          <div onClick={() => {
                            // SELECTING EXISTING CC TO DISPLAY IT ON THE CANVAS (Not used now)
                            // dispatch(createLocalChannelClusterFromDBData({
                            //   _id: channel?._id, 
                            //   name: channel?.name, 
                            //   color: channel?.color, 
                            //   tradeChannels: channel?.trade_channels_id, 
                            // }));

                            // CREATING EDGES BASED ON NODE
                            channel?.trade_channels_id?.forEach(element => {
                              connectTwoNodes (channel?._id as any, element?._id, MarkerType.Arrow)
                              element?.categories_id?.forEach((cats: any) => {
                                connectTwoNodes (element?._id as any, cats?._id, MarkerType.Arrow)
                              });
                            });

                          }} className='cursor-pointer flex flex-row items-center gap-3'>
                            <ChannelClusterDotIcon color={`${channel?.color}`} height="8" width="8" />
                            { channel.name }
                          </div>
                          <div className='cursor-pointer' onClick={(e) => {
                            setConcernedID (channel?._id as any)
                            setToggleDropDown (toggleDropdown => !toggleDropdown)
                          }}>
                            {
                              toggleDropdown && concernedID === channel?._id ?
                                <CloseIcon color="white" height="16" width="16" />
                                :
                                <DropdownPlusIcon color="white" height="16" width="16" />
                            }
                          </div>
                        </div>

                        <div className={`${ toggleDropdown && concernedID === channel?._id ? "flex flex-col gap-3" : "hidden" } `}>
                          {
                            channel?.trade_channels_id && channel?.trade_channels_id?.length > 0 ? 
                              channel?.trade_channels_id?.map((trdChn: any) => {
                                return (
                                  <div key={ trdChn.id } style={{
                                    backgroundColor: `${ channel?.color }`
                                  }} className='bg-newPrimaryDark rounded-xl p-5 flex flex-col w-[300px]'>
                                    <BaseFlowComponent 
                                      flowCompName={ trdChn?.name }
                                      headerTitle={ "Trade Channel" }
                                      id={ trdChn.id }
                                      executeSomthing={() => console.log("hi")}
                                    >
                                      <TradeChannelSvgIcon color='#BF9BED' />
                                    </BaseFlowComponent>
                                  </div>
                                )
                              })

                              :
                              "No Trade Channel"
                          }

                        </div>
                      </div>
                    )
                })
                :
                <>
                    Loading Channel Clusters...
                </>
            }

        </div>
        {/* END SIDE BAR WHERE WE HAVE LIST OF CATEGORIZATION */}
    </div>
  )
}

export default Sidebar