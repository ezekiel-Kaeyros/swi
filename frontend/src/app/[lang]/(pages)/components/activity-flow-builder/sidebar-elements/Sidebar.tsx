"use client";

import { ChannelClusterDotIcon, CloseIcon, DropdownPlusIcon } from '@/app/common/components/svgs/SvgsIcons'
import useChangeNavigationItem from '@/app/hooks/useChangeNavigationItem';
import { useSettings } from '@/app/hooks/useSettings'
import { addToggleStateToAllChannelCluster, toggleStateToAllChannelClusterBuilder } from '@/redux/features/channel-cluster-slice'
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
    <div className={`bg-secondaryDark h-[80vh] z-30 w-5/12 relative ${ toggleSideBar ? "left-0 transition-transform duration-500 transform translate-x-[-100%]" : "left-0 transition-transform duration-500 transform translate-x-0" }`}>
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
                          <div onClick={() => toggleStateToAllChannelCB (channel?._id)} className=' flex flex-row items-center gap-3'>
                            <ChannelClusterDotIcon color={ channel?.color } />
                            { channel.name }
                          </div>
                          <div className='cursor-pointer' onClick={(e) => {
                            // console.log(e.target, "target")
                            // dispatch(toggleStateToAllChannelClusterBuilder({
                            //   id: channel?._id, 
                            // }));
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

        {/* START NOT DEFINED BUTTON  */}
        <div className='absolute top-[50%] right-[-10%] z-30'>
            <button onClick={ () => setToggleSideBar (toggleSideBar => !toggleSideBar)} className='relative group rounded-xl p-[14px] bg-normalInputBg '>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33301 5.20667V10.7933C1.33301 11.7867 1.57301 12.6133 2.03301 13.2467C2.22634 13.5267 2.47301 13.7733 2.75301 13.9667C3.29967 14.3667 3.99301 14.6 4.81301 14.6533V1.35333C2.62634 1.49333 1.33301 2.91333 1.33301 5.20667Z" fill="#BABABA"/>
                    <path d="M13.9668 2.75331C13.7735 2.47331 13.5268 2.22665 13.2468 2.03331C12.6135 1.57331 11.7868 1.33331 10.7935 1.33331H5.81348V14.6666H10.7935C13.2201 14.6666 14.6668 13.22 14.6668 10.7933V5.20665C14.6668 4.21331 14.4268 3.38665 13.9668 2.75331ZM10.3335 9.35331C10.5268 9.54665 10.5268 9.86665 10.3335 10.06C10.2335 10.16 10.1068 10.2066 9.98014 10.2066C9.85348 10.2066 9.72681 10.16 9.62681 10.06L7.92014 8.35331C7.72681 8.15998 7.72681 7.83998 7.92014 7.64665L9.62681 5.93998C9.82014 5.74665 10.1401 5.74665 10.3335 5.93998C10.5268 6.13331 10.5268 6.45331 10.3335 6.64665L8.98681 7.99998L10.3335 9.35331Z" fill="#BABABA"/>
                </svg>
                {/* <div className='absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                    <span>Select Tool (V)</span>
                </div> */}
            </button>
        </div>
        {/* END NOT DEFINED BUTTON */}
    </div>
  )
}

export default Sidebar