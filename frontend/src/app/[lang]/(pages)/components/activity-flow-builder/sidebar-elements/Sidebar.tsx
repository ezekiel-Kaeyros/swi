"use client";

import { ChannelClusterDotIcon, CloseIcon, DropdownPlusIcon } from '@/app/common/components/svgs/SvgsIcons'
import useChangeNavigationItem from '@/app/hooks/useChangeNavigationItem';
import { useSettings } from '@/app/hooks/useSettings'
import { addToggleStateToAllChannelCluster, createLocalChannelClusterFromDBData, toggleStateToAllChannelClusterBuilder } from '@/redux/features/channel-cluster-slice'
import { IChannelCluster } from '@/redux/features/types'
import React, { useEffect, useState } from 'react'
import TradeChannelFlowComp from '../flow-components/TradeChannelFlowComp';

const Sidebar = ({ channelClusters }: { channelClusters: IChannelCluster[] }) => {
  // { channelClusters }: { channelClusters: IChannelCluster[]}
  // const { dispatch } = useSettings();

  // console.log(channelClusters, ">//>//")

  const [toggleDropdown, setToggleDropDown ] = useState (false)
  const [concernedID, setConcernedID ] = useState (null)

  const { toggleStateToAllChannelCB, dispatch } = useChangeNavigationItem (); 

  const [toggleSideBar, setToggleSideBar ] = useState (false)

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
                    // console.log(channel, ">>>///...")
                    return (
                      <div key={ channel?._id } className='flex flex-col'>

                        <div className='flex flex-row justify-between items-center'>
                          <div onClick={() => {
                            // toggleStateToAllChannelCB (channel?._id)
                            // SELECTING EXISTING CC TO DISPLAY IT ON THE CANVAS
                            dispatch(createLocalChannelClusterFromDBData({
                              _id: channel?._id, 
                              name: channel?.name, 
                              color: channel?.color,
                            }));
                          }} className='cursor-pointer flex flex-row items-center gap-3'>
                            <ChannelClusterDotIcon color={ channel?.color } />
                            { channel.name }
                          </div>
                          <div className='cursor-pointer' onClick={(e) => {
                            setConcernedID (channel?._id as any)
                            setToggleDropDown (toggleDropdown => !toggleDropdown)
                            // toggleStateToAllChannelCB (channel?._id)
                          }}>
                            {
                              toggleDropdown && concernedID === channel?._id ?
                                <CloseIcon color={ "white" } />
                                :
                                <DropdownPlusIcon color={ "white" } />
                            }
                          </div>
                        </div>

                        <div className={`${ toggleDropdown && concernedID === channel?._id ? "flex flex-col gap-3" : "hidden" } `}>
                          {
                            channel?.trade_channels_id && channel?.trade_channels_id?.length > 0 ? 
                              channel?.trade_channels_id?.map((trdChn: any) => {
                                return (
                                  <div key={ trdChn.id }>
                                    <TradeChannelFlowComp data={trdChn} />
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