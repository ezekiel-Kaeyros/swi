"use client";

import { ChannelClusterDotIcon, CloseIcon, DropdownPlusIcon } from '@/app/common/components/svgs/SvgsIcons'
import useChangeNavigationItem from '@/app/hooks/useChangeNavigationItem';
import { useSettings } from '@/app/hooks/useSettings'
import { addToggleStateToAllChannelCluster, createLocalChannelClusterFromDBData, toggleStateToAllChannelClusterBuilder } from '@/redux/features/channel-cluster-slice'
import { IChannelCluster } from '@/redux/features/types'
import React, { useEffect, useState } from 'react'
import TradeChannelFlowComp from '../components/activity-flow-builder/flow-components/TradeChannelFlowComp';
import { color } from 'framer-motion';
import { channel } from 'diagnostics_channel';
import { ChannelClusterStarIcon } from '@/app/common/components/svgs/SvgsIcons';

const ChannelClusters = ({ channelClusters }: { channelClusters: IChannelCluster[] }) => {
  // { channelClusters }: { channelClusters: IChannelCluster[]}
  // const { dispatch } = useSettings();

  // console.log(channelClusters, ">//>//")

  const [toggleDropdown, setToggleDropDown ] = useState (false)
  const [concernedID, setConcernedID ] = useState (null)

  const { toggleStateToAllChannelCB, dispatch } = useChangeNavigationItem (); 

  return (
    <div className={``}>
        <div className='flex place-items-center'>
            <div className='text-[25px] mt-3 font-bold flex flex-row h-6'>
              <ChannelClusterStarIcon width='50px' height='20px' color='#fff' />
              Channel Clusters
            </div>
        </div>

        {/* START SIDE BAR WHERE WE HAVE LIST OF CATEGORIZATION */}
        <div className='py-4 flex flex-row flex-wrap gap-2'>

        {
            channelClusters?.length > 0 ? 
                channelClusters?.map ((channel: IChannelCluster) => {
                  const backgroundColor = channel?.color ? `${channel.color}` : 'transparent';
                    return (
                      <div key={ channel?._id } className='flex flex-col bg-black rounded'
                      style={{backgroundColor}}>

                        <div className='flex flex-row justify-between items-center'>
                          <div onClick={() => {
                            // toggleStateToAllChannelCB (channel?._id)
                            // SELECTING EXISTING CC TO DISPLAY IT ON THE CANVAS
                            dispatch(createLocalChannelClusterFromDBData({
                              _id: channel?._id, 
                              name: channel?.name, 
                              color: channel?.color,
                            }));
                          }} className='cursor-pointer flex flex-row items-center gap-3 p-1.5'>
                            <ChannelClusterStarIcon color='#fff' height="20" width="20"/>
                            { channel.name }
                          </div>
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

export default ChannelClusters