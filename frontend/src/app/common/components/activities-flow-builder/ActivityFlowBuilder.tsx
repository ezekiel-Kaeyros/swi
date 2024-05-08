'use client';
import React, { useEffect, useRef, useState } from 'react';

import Draggable, { DraggableCore } from 'react-draggable';
import CustomModal from '../modal/Modal';
import AddChannelClusterForm from '../forms/add-channel-cluster/AddChannelClusterForm';
import { useSettings } from '@/app/hooks/useSettings';
import { loadCompanies } from '@/redux/features/channel-cluster-slice';
import useMakeGetRequest from '@/app/hooks/useMakeGetRequest';
import { BASE_URL } from '@/utils/constants';
// import Resizable from "react-draggable"
// import { Resizable } from 'react-resizable';

const ActivityFlowBuilder = ({ channelClustersData }: any) => {
  console.log('channelClustersData', channelClustersData);

  // DRAGGABLE ELEMENT
  const linkRef = React.useRef();
  const firstElementRef: any = useRef();

  const handleDrag = (e: any, data: any) => {
    // console.log(data, "ooooooo")
    const link: any = linkRef.current;
    const firstElement: any = firstElementRef.current;
    const { x, y } = data;

    const firstElementRect = firstElementRef.current.getBoundingClientRect();
    const firstElementWidth = firstElementRect.width;
    const firstElementHeight = firstElementRect.height;
    const firstElementX = firstElementRect.left + firstElementWidth;
    const firstElementY = firstElementRect.top + firstElementHeight / 2;

    link.setAttribute('x1', firstElementX);
    link.setAttribute('y1', firstElementY);

    link.setAttribute('x2', x + 50);
    link.setAttribute('y2', y + 50);
  };

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [scaleUI, setScaleUI] = useState(75);

  const handleScaleUp = () => {
    if (scaleUI <= 150) {
      setScaleUI((scaleUI) => scaleUI + 25);
    }
  };

  const handleScaleDown = () => {
    if (scaleUI >= 25) {
      setScaleUI((scaleUI) => scaleUI - 25);
    }
  };

  // const [ channelClusters, setChannelCluter ] = useState ([])

  const { data } = useMakeGetRequest(`${BASE_URL}/company`);

  const { channelClusters, companies, dispatch } = useSettings();

  // useEffect (() => {
  //     dispatch(loadCompanies({
  //         comp: data
  //     }))
  // }, [data])

  return (
    <div className="relative bg-optionContainerBg h-screen flex justify-center">
      {/* START SIDE BAR WHERE WE HAVE LIST OF CATEGORIZATION */}
      <div className="bg-newPrimaryDark h-screen w-[30%] left-0 p-6 flex flex-col gap-6 overflow-y-auto">
        {channelClustersData.length > 0 ? (
          channelClustersData.map((channel: any) => {
            return (
              <div
                key={channel.id}
                className=" bg-normalInputBg rounded-xl p-5 flex flex-col gap-5"
              >
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center justify-center gap-3">
                    <div className="bg-channelTradeMarkerBgColor p-4 rounded-xl">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M12.4466 1.33331H11.18C9.72663 1.33331 8.95996 2.09998 8.95996 3.55331V4.81998C8.95996 6.27331 9.72663 7.03998 11.18 7.03998H12.4466C13.9 7.03998 14.6666 6.27331 14.6666 4.81998V3.55331C14.6666 2.09998 13.9 1.33331 12.4466 1.33331Z"
                          fill="#5F05D1"
                        />
                        <path
                          opacity="0.4"
                          d="M4.82683 8.95331H3.56016C2.10016 8.95331 1.3335 9.71997 1.3335 11.1733V12.44C1.3335 13.9 2.10016 14.6666 3.5535 14.6666H4.82016C6.2735 14.6666 7.04016 13.9 7.04016 12.4466V11.18C7.04683 9.71997 6.28016 8.95331 4.82683 8.95331Z"
                          fill="#5F05D1"
                        />
                        <path
                          d="M4.1935 7.05331C5.77303 7.05331 7.0535 5.77285 7.0535 4.19331C7.0535 2.61378 5.77303 1.33331 4.1935 1.33331C2.61396 1.33331 1.3335 2.61378 1.3335 4.19331C1.3335 5.77285 2.61396 7.05331 4.1935 7.05331Z"
                          fill="#5F05D1"
                        />
                        <path
                          d="M11.8068 14.6667C13.3863 14.6667 14.6668 13.3862 14.6668 11.8067C14.6668 10.2271 13.3863 8.94666 11.8068 8.94666C10.2272 8.94666 8.94678 10.2271 8.94678 11.8067C8.94678 13.3862 10.2272 14.6667 11.8068 14.6667Z"
                          fill="#5F05D1"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[20px] font-bold">
                        {channel?.name}
                      </span>
                      <span className="text-slate-300">Set A</span>
                    </div>
                  </div>
                  <div className="cursor-pointer mt-[.5rem]">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.375 9.5C7.375 10.26 6.76 10.875 6 10.875C5.24 10.875 4.625 10.26 4.625 9.5C4.625 8.74 5.24 8.125 6 8.125C6.76 8.125 7.375 8.74 7.375 9.5ZM5.375 9.5C5.375 9.845 5.655 10.125 6 10.125C6.345 10.125 6.625 9.845 6.625 9.5C6.625 9.155 6.345 8.875 6 8.875C5.655 8.875 5.375 9.155 5.375 9.5Z"
                        fill="#BABABA"
                      />
                      <path
                        d="M7.375 2.5C7.375 3.26 6.76 3.875 6 3.875C5.24 3.875 4.625 3.26 4.625 2.5C4.625 1.74 5.24 1.125 6 1.125C6.76 1.125 7.375 1.74 7.375 2.5ZM5.375 2.5C5.375 2.845 5.655 3.125 6 3.125C6.345 3.125 6.625 2.845 6.625 2.5C6.625 2.155 6.345 1.875 6 1.875C5.655 1.875 5.375 2.155 5.375 2.5Z"
                        fill="#BABABA"
                      />
                      <path
                        d="M7.375 6C7.375 6.76 6.76 7.375 6 7.375C5.24 7.375 4.625 6.76 4.625 6C4.625 5.24 5.24 4.625 6 4.625C6.76 4.625 7.375 5.24 7.375 6ZM5.375 6C5.375 6.345 5.655 6.625 6 6.625C6.345 6.625 6.625 6.345 6.625 6C6.625 5.655 6.345 5.375 6 5.375C5.655 5.375 5.375 5.655 5.375 6Z"
                        fill="#BABABA"
                      />
                    </svg>
                  </div>
                </div>
                <div className="">
                  <span className="p-[.5rem] rounded-xl justify-center bg-white text-slate-500">
                    12 Activities
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <>Loading Channel Clusters...</>
        )}
        {/* <div className=' bg-normalInputBg rounded-xl p-5 flex flex-col gap-5'>
                
                <div className='flex flex-row justify-between' >
                    <div className='flex flex-row items-center justify-center gap-3'>
                        <div className='bg-channelTradeMarkerBgColor p-4 rounded-xl'>
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M12.4466 1.33331H11.18C9.72663 1.33331 8.95996 2.09998 8.95996 3.55331V4.81998C8.95996 6.27331 9.72663 7.03998 11.18 7.03998H12.4466C13.9 7.03998 14.6666 6.27331 14.6666 4.81998V3.55331C14.6666 2.09998 13.9 1.33331 12.4466 1.33331Z" fill="#5F05D1"/>
                                <path opacity="0.4" d="M4.82683 8.95331H3.56016C2.10016 8.95331 1.3335 9.71997 1.3335 11.1733V12.44C1.3335 13.9 2.10016 14.6666 3.5535 14.6666H4.82016C6.2735 14.6666 7.04016 13.9 7.04016 12.4466V11.18C7.04683 9.71997 6.28016 8.95331 4.82683 8.95331Z" fill="#5F05D1"/>
                                <path d="M4.1935 7.05331C5.77303 7.05331 7.0535 5.77285 7.0535 4.19331C7.0535 2.61378 5.77303 1.33331 4.1935 1.33331C2.61396 1.33331 1.3335 2.61378 1.3335 4.19331C1.3335 5.77285 2.61396 7.05331 4.1935 7.05331Z" fill="#5F05D1"/>
                                <path d="M11.8068 14.6667C13.3863 14.6667 14.6668 13.3862 14.6668 11.8067C14.6668 10.2271 13.3863 8.94666 11.8068 8.94666C10.2272 8.94666 8.94678 10.2271 8.94678 11.8067C8.94678 13.3862 10.2272 14.6667 11.8068 14.6667Z" fill="#5F05D1"/>
                            </svg>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[20px] font-bold'>Categorization</span>
                            <span className='text-slate-300'>Set A</span>
                        </div>
                    </div>
                    <div className='cursor-pointer mt-[.5rem]'>
                        <svg width="25" height="25" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.375 9.5C7.375 10.26 6.76 10.875 6 10.875C5.24 10.875 4.625 10.26 4.625 9.5C4.625 8.74 5.24 8.125 6 8.125C6.76 8.125 7.375 8.74 7.375 9.5ZM5.375 9.5C5.375 9.845 5.655 10.125 6 10.125C6.345 10.125 6.625 9.845 6.625 9.5C6.625 9.155 6.345 8.875 6 8.875C5.655 8.875 5.375 9.155 5.375 9.5Z" fill="#BABABA"/>
                            <path d="M7.375 2.5C7.375 3.26 6.76 3.875 6 3.875C5.24 3.875 4.625 3.26 4.625 2.5C4.625 1.74 5.24 1.125 6 1.125C6.76 1.125 7.375 1.74 7.375 2.5ZM5.375 2.5C5.375 2.845 5.655 3.125 6 3.125C6.345 3.125 6.625 2.845 6.625 2.5C6.625 2.155 6.345 1.875 6 1.875C5.655 1.875 5.375 2.155 5.375 2.5Z" fill="#BABABA"/>
                            <path d="M7.375 6C7.375 6.76 6.76 7.375 6 7.375C5.24 7.375 4.625 6.76 4.625 6C4.625 5.24 5.24 4.625 6 4.625C6.76 4.625 7.375 5.24 7.375 6ZM5.375 6C5.375 6.345 5.655 6.625 6 6.625C6.345 6.625 6.625 6.345 6.625 6C6.625 5.655 6.345 5.375 6 5.375C5.655 5.375 5.375 5.655 5.375 6Z" fill="#BABABA"/>
                        </svg>
                    </div>
                </div>
                <div className=''>
                    <span className='p-[.5rem] rounded-xl justify-center bg-white text-slate-500'>
                        12 Activities
                    </span>
                </div>
            </div>

            <div className='bg-normalInputBg rounded-xl p-5 flex flex-col gap-5'>
                <div className='flex flex-row justify-between' >
                    <div className='flex flex-row items-center justify-center gap-3'>
                        <div className='bg-channelTradeMarkerBgColor p-4 rounded-xl'>
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M12.4466 1.33331H11.18C9.72663 1.33331 8.95996 2.09998 8.95996 3.55331V4.81998C8.95996 6.27331 9.72663 7.03998 11.18 7.03998H12.4466C13.9 7.03998 14.6666 6.27331 14.6666 4.81998V3.55331C14.6666 2.09998 13.9 1.33331 12.4466 1.33331Z" fill="#5F05D1"/>
                                <path opacity="0.4" d="M4.82683 8.95331H3.56016C2.10016 8.95331 1.3335 9.71997 1.3335 11.1733V12.44C1.3335 13.9 2.10016 14.6666 3.5535 14.6666H4.82016C6.2735 14.6666 7.04016 13.9 7.04016 12.4466V11.18C7.04683 9.71997 6.28016 8.95331 4.82683 8.95331Z" fill="#5F05D1"/>
                                <path d="M4.1935 7.05331C5.77303 7.05331 7.0535 5.77285 7.0535 4.19331C7.0535 2.61378 5.77303 1.33331 4.1935 1.33331C2.61396 1.33331 1.3335 2.61378 1.3335 4.19331C1.3335 5.77285 2.61396 7.05331 4.1935 7.05331Z" fill="#5F05D1"/>
                                <path d="M11.8068 14.6667C13.3863 14.6667 14.6668 13.3862 14.6668 11.8067C14.6668 10.2271 13.3863 8.94666 11.8068 8.94666C10.2272 8.94666 8.94678 10.2271 8.94678 11.8067C8.94678 13.3862 10.2272 14.6667 11.8068 14.6667Z" fill="#5F05D1"/>
                            </svg>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[20px] font-bold'>Categorization</span>
                            <span className='text-slate-300'>Set B</span>
                        </div>
                    </div>
                    <div className='cursor-pointer mt-[.5rem]'>
                        <svg width="25" height="25" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.375 9.5C7.375 10.26 6.76 10.875 6 10.875C5.24 10.875 4.625 10.26 4.625 9.5C4.625 8.74 5.24 8.125 6 8.125C6.76 8.125 7.375 8.74 7.375 9.5ZM5.375 9.5C5.375 9.845 5.655 10.125 6 10.125C6.345 10.125 6.625 9.845 6.625 9.5C6.625 9.155 6.345 8.875 6 8.875C5.655 8.875 5.375 9.155 5.375 9.5Z" fill="#BABABA"/>
                            <path d="M7.375 2.5C7.375 3.26 6.76 3.875 6 3.875C5.24 3.875 4.625 3.26 4.625 2.5C4.625 1.74 5.24 1.125 6 1.125C6.76 1.125 7.375 1.74 7.375 2.5ZM5.375 2.5C5.375 2.845 5.655 3.125 6 3.125C6.345 3.125 6.625 2.845 6.625 2.5C6.625 2.155 6.345 1.875 6 1.875C5.655 1.875 5.375 2.155 5.375 2.5Z" fill="#BABABA"/>
                            <path d="M7.375 6C7.375 6.76 6.76 7.375 6 7.375C5.24 7.375 4.625 6.76 4.625 6C4.625 5.24 5.24 4.625 6 4.625C6.76 4.625 7.375 5.24 7.375 6ZM5.375 6C5.375 6.345 5.655 6.625 6 6.625C6.345 6.625 6.625 6.345 6.625 6C6.625 5.655 6.345 5.375 6 5.375C5.655 5.375 5.375 5.655 5.375 6Z" fill="#BABABA"/>
                        </svg>
                    </div>
                </div>
                <div className=''>
                    <span className='p-[.5rem] rounded-xl justify-center bg-white text-slate-500'>
                        12 Activities
                    </span>
                </div>
            </div>

            <div className='bg-normalInputBg rounded-xl p-5 flex flex-col gap-5'>
                <div className='flex flex-row justify-between' >
                    <div className='flex flex-row items-center justify-center gap-3'>
                        <div className='bg-channelTradeMarkerBgColor p-4 rounded-xl'>
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M12.4466 1.33331H11.18C9.72663 1.33331 8.95996 2.09998 8.95996 3.55331V4.81998C8.95996 6.27331 9.72663 7.03998 11.18 7.03998H12.4466C13.9 7.03998 14.6666 6.27331 14.6666 4.81998V3.55331C14.6666 2.09998 13.9 1.33331 12.4466 1.33331Z" fill="#5F05D1"/>
                                <path opacity="0.4" d="M4.82683 8.95331H3.56016C2.10016 8.95331 1.3335 9.71997 1.3335 11.1733V12.44C1.3335 13.9 2.10016 14.6666 3.5535 14.6666H4.82016C6.2735 14.6666 7.04016 13.9 7.04016 12.4466V11.18C7.04683 9.71997 6.28016 8.95331 4.82683 8.95331Z" fill="#5F05D1"/>
                                <path d="M4.1935 7.05331C5.77303 7.05331 7.0535 5.77285 7.0535 4.19331C7.0535 2.61378 5.77303 1.33331 4.1935 1.33331C2.61396 1.33331 1.3335 2.61378 1.3335 4.19331C1.3335 5.77285 2.61396 7.05331 4.1935 7.05331Z" fill="#5F05D1"/>
                                <path d="M11.8068 14.6667C13.3863 14.6667 14.6668 13.3862 14.6668 11.8067C14.6668 10.2271 13.3863 8.94666 11.8068 8.94666C10.2272 8.94666 8.94678 10.2271 8.94678 11.8067C8.94678 13.3862 10.2272 14.6667 11.8068 14.6667Z" fill="#5F05D1"/>
                            </svg>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[20px] font-bold'>Categorization</span>
                            <span className='text-slate-300'>Set C</span>
                        </div>
                    </div>
                    <div className='cursor-pointer mt-[.5rem]'>
                        <svg width="25" height="25" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.375 9.5C7.375 10.26 6.76 10.875 6 10.875C5.24 10.875 4.625 10.26 4.625 9.5C4.625 8.74 5.24 8.125 6 8.125C6.76 8.125 7.375 8.74 7.375 9.5ZM5.375 9.5C5.375 9.845 5.655 10.125 6 10.125C6.345 10.125 6.625 9.845 6.625 9.5C6.625 9.155 6.345 8.875 6 8.875C5.655 8.875 5.375 9.155 5.375 9.5Z" fill="#BABABA"/>
                            <path d="M7.375 2.5C7.375 3.26 6.76 3.875 6 3.875C5.24 3.875 4.625 3.26 4.625 2.5C4.625 1.74 5.24 1.125 6 1.125C6.76 1.125 7.375 1.74 7.375 2.5ZM5.375 2.5C5.375 2.845 5.655 3.125 6 3.125C6.345 3.125 6.625 2.845 6.625 2.5C6.625 2.155 6.345 1.875 6 1.875C5.655 1.875 5.375 2.155 5.375 2.5Z" fill="#BABABA"/>
                            <path d="M7.375 6C7.375 6.76 6.76 7.375 6 7.375C5.24 7.375 4.625 6.76 4.625 6C4.625 5.24 5.24 4.625 6 4.625C6.76 4.625 7.375 5.24 7.375 6ZM5.375 6C5.375 6.345 5.655 6.625 6 6.625C6.345 6.625 6.625 6.345 6.625 6C6.625 5.655 6.345 5.375 6 5.375C5.655 5.375 5.375 5.655 5.375 6Z" fill="#BABABA"/>
                        </svg>
                    </div>
                </div>
                <div className=''>
                    <span className='p-[.5rem] rounded-xl justify-center bg-white text-slate-500'>
                        12 Activities
                    </span>
                </div>
            </div> */}
      </div>
      {/* END SIDE BAR WHERE WE HAVE LIST OF CATEGORIZATION */}

      {/* *************************************************************** */}
      {/* *************************************************************** */}

      {/* START MAIN CANVAS WHERE WE BUILD ACTIVITIES */}
      <div className="playground-bg w-[70%] h-screen overflow-x-auto">
        {/* START ITEMS WE ADD EX: CHANNEL CLUSTER, TRANDE CHANNELS, CATEGORY */}
        <div className={`scale-${scaleUI}`}>
          {
            // channelClustersData.length > 0 ?
            //     channelClustersData.map ((channel: any) => {
            //         return (
            //             <Draggable key={channel.id}>
            //                 <div ref={ firstElementRef } className='relative bg-newPrimaryDark rounded-xl p-5 flex flex-col w-[300px]'>
            //                     <div className='flex flex-row justify-between' >
            //                         <div className='flex flex-row items-center justify-center gap-3'>
            //                             <div className='bg-channelClusterMarkerBgColor p-4 rounded-xl'>
            //                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            //                                     <path d="M4.1665 6.66663C5.54722 6.66663 6.6665 5.54734 6.6665 4.16663C6.6665 2.78591 5.54722 1.66663 4.1665 1.66663C2.78579 1.66663 1.6665 2.78591 1.6665 4.16663C1.6665 5.54734 2.78579 6.66663 4.1665 6.66663Z" fill="#BABABA"/>
            //                                     <path d="M15.8335 12.5C17.2142 12.5 18.3335 11.3807 18.3335 10C18.3335 8.61929 17.2142 7.5 15.8335 7.5C14.4528 7.5 13.3335 8.61929 13.3335 10C13.3335 11.3807 14.4528 12.5 15.8335 12.5Z" fill="#BABABA"/>
            //                                     <path d="M4.1665 18.3334C5.54722 18.3334 6.6665 17.2141 6.6665 15.8334C6.6665 14.4527 5.54722 13.3334 4.1665 13.3334C2.78579 13.3334 1.6665 14.4527 1.6665 15.8334C1.6665 17.2141 2.78579 18.3334 4.1665 18.3334Z" fill="#BABABA"/>
            //                                     <path d="M4.1665 13.9583C3.82484 13.9583 3.5415 13.675 3.5415 13.3333V6.66663C3.5415 6.32496 3.82484 6.04163 4.1665 6.04163C4.50817 6.04163 4.7915 6.32496 4.7915 6.66663C4.7915 8.49163 5.67484 9.37496 7.49984 9.37496H13.3332C13.6748 9.37496 13.9582 9.65829 13.9582 9.99996C13.9582 10.3416 13.6748 10.625 13.3332 10.625H7.49984C6.3665 10.625 5.45817 10.3333 4.7915 9.78329V13.3333C4.7915 13.675 4.50817 13.9583 4.1665 13.9583Z" fill="#BABABA"/>
            //                                 </svg>
            //                             </div>
            //                             <div className='flex flex-col'>
            //                                 <span className='text-[20px] font-bold'>{ channel.name }</span>
            //                                 <span className='text-slate-300'>Wholesaling</span>
            //                             </div>
            //                         </div>
            //                         <div className='cursor-pointer mt-[.5rem]'>
            //                             <svg width="25" height="25" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            //                                 <path d="M7.375 9.5C7.375 10.26 6.76 10.875 6 10.875C5.24 10.875 4.625 10.26 4.625 9.5C4.625 8.74 5.24 8.125 6 8.125C6.76 8.125 7.375 8.74 7.375 9.5ZM5.375 9.5C5.375 9.845 5.655 10.125 6 10.125C6.345 10.125 6.625 9.845 6.625 9.5C6.625 9.155 6.345 8.875 6 8.875C5.655 8.875 5.375 9.155 5.375 9.5Z" fill="#BABABA"/>
            //                                 <path d="M7.375 2.5C7.375 3.26 6.76 3.875 6 3.875C5.24 3.875 4.625 3.26 4.625 2.5C4.625 1.74 5.24 1.125 6 1.125C6.76 1.125 7.375 1.74 7.375 2.5ZM5.375 2.5C5.375 2.845 5.655 3.125 6 3.125C6.345 3.125 6.625 2.845 6.625 2.5C6.625 2.155 6.345 1.875 6 1.875C5.655 1.875 5.375 2.155 5.375 2.5Z" fill="#BABABA"/>
            //                                 <path d="M7.375 6C7.375 6.76 6.76 7.375 6 7.375C5.24 7.375 4.625 6.76 4.625 6C4.625 5.24 5.24 4.625 6 4.625C6.76 4.625 7.375 5.24 7.375 6ZM5.375 6C5.375 6.345 5.655 6.625 6 6.625C6.345 6.625 6.625 6.345 6.625 6C6.625 5.655 6.345 5.375 6 5.375C5.655 5.375 5.375 5.655 5.375 6Z" fill="#BABABA"/>
            //                             </svg>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </Draggable>
            //         )
            //     })
            //     :
            //     <></>
          }
          <Draggable>
            <div
              ref={firstElementRef}
              className="relative bg-newPrimaryDark rounded-xl p-5 flex flex-col w-[300px]"
            >
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center justify-center gap-3">
                  <div className="bg-channelClusterMarkerBgColor p-4 rounded-xl">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.1665 6.66663C5.54722 6.66663 6.6665 5.54734 6.6665 4.16663C6.6665 2.78591 5.54722 1.66663 4.1665 1.66663C2.78579 1.66663 1.6665 2.78591 1.6665 4.16663C1.6665 5.54734 2.78579 6.66663 4.1665 6.66663Z"
                        fill="#BABABA"
                      />
                      <path
                        d="M15.8335 12.5C17.2142 12.5 18.3335 11.3807 18.3335 10C18.3335 8.61929 17.2142 7.5 15.8335 7.5C14.4528 7.5 13.3335 8.61929 13.3335 10C13.3335 11.3807 14.4528 12.5 15.8335 12.5Z"
                        fill="#BABABA"
                      />
                      <path
                        d="M4.1665 18.3334C5.54722 18.3334 6.6665 17.2141 6.6665 15.8334C6.6665 14.4527 5.54722 13.3334 4.1665 13.3334C2.78579 13.3334 1.6665 14.4527 1.6665 15.8334C1.6665 17.2141 2.78579 18.3334 4.1665 18.3334Z"
                        fill="#BABABA"
                      />
                      <path
                        d="M4.1665 13.9583C3.82484 13.9583 3.5415 13.675 3.5415 13.3333V6.66663C3.5415 6.32496 3.82484 6.04163 4.1665 6.04163C4.50817 6.04163 4.7915 6.32496 4.7915 6.66663C4.7915 8.49163 5.67484 9.37496 7.49984 9.37496H13.3332C13.6748 9.37496 13.9582 9.65829 13.9582 9.99996C13.9582 10.3416 13.6748 10.625 13.3332 10.625H7.49984C6.3665 10.625 5.45817 10.3333 4.7915 9.78329V13.3333C4.7915 13.675 4.50817 13.9583 4.1665 13.9583Z"
                        fill="#BABABA"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[20px] font-bold">
                      Channel Cluster
                    </span>
                    <span className="text-slate-300">Wholesaling</span>
                  </div>
                </div>
                <div className="cursor-pointer mt-[.5rem]">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.375 9.5C7.375 10.26 6.76 10.875 6 10.875C5.24 10.875 4.625 10.26 4.625 9.5C4.625 8.74 5.24 8.125 6 8.125C6.76 8.125 7.375 8.74 7.375 9.5ZM5.375 9.5C5.375 9.845 5.655 10.125 6 10.125C6.345 10.125 6.625 9.845 6.625 9.5C6.625 9.155 6.345 8.875 6 8.875C5.655 8.875 5.375 9.155 5.375 9.5Z"
                      fill="#BABABA"
                    />
                    <path
                      d="M7.375 2.5C7.375 3.26 6.76 3.875 6 3.875C5.24 3.875 4.625 3.26 4.625 2.5C4.625 1.74 5.24 1.125 6 1.125C6.76 1.125 7.375 1.74 7.375 2.5ZM5.375 2.5C5.375 2.845 5.655 3.125 6 3.125C6.345 3.125 6.625 2.845 6.625 2.5C6.625 2.155 6.345 1.875 6 1.875C5.655 1.875 5.375 2.155 5.375 2.5Z"
                      fill="#BABABA"
                    />
                    <path
                      d="M7.375 6C7.375 6.76 6.76 7.375 6 7.375C5.24 7.375 4.625 6.76 4.625 6C4.625 5.24 5.24 4.625 6 4.625C6.76 4.625 7.375 5.24 7.375 6ZM5.375 6C5.375 6.345 5.655 6.625 6 6.625C6.345 6.625 6.625 6.345 6.625 6C6.625 5.655 6.345 5.375 6 5.375C5.655 5.375 5.375 5.655 5.375 6Z"
                      fill="#BABABA"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Draggable>

          <Draggable onDrag={handleDrag}>
            {/* <Resizable
                        minWidth={100}
                        minHeight={100}
                        defaultSize={{ width: 200, height: 200 }}
                    >
                    </Resizable> */}
            <div className="bg-newPrimaryDark rounded-xl p-5 flex flex-col w-[300px] shadow-blue-500/50">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center justify-center gap-3">
                  <div className="bg-channelTradeMarkerBgColor p-4 rounded-xl">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M12.4466 1.33331H11.18C9.72663 1.33331 8.95996 2.09998 8.95996 3.55331V4.81998C8.95996 6.27331 9.72663 7.03998 11.18 7.03998H12.4466C13.9 7.03998 14.6666 6.27331 14.6666 4.81998V3.55331C14.6666 2.09998 13.9 1.33331 12.4466 1.33331Z"
                        fill="#5F05D1"
                      />
                      <path
                        opacity="0.4"
                        d="M4.82683 8.95331H3.56016C2.10016 8.95331 1.3335 9.71997 1.3335 11.1733V12.44C1.3335 13.9 2.10016 14.6666 3.5535 14.6666H4.82016C6.2735 14.6666 7.04016 13.9 7.04016 12.4466V11.18C7.04683 9.71997 6.28016 8.95331 4.82683 8.95331Z"
                        fill="#5F05D1"
                      />
                      <path
                        d="M4.1935 7.05331C5.77303 7.05331 7.0535 5.77285 7.0535 4.19331C7.0535 2.61378 5.77303 1.33331 4.1935 1.33331C2.61396 1.33331 1.3335 2.61378 1.3335 4.19331C1.3335 5.77285 2.61396 7.05331 4.1935 7.05331Z"
                        fill="#5F05D1"
                      />
                      <path
                        d="M11.8068 14.6667C13.3863 14.6667 14.6668 13.3862 14.6668 11.8067C14.6668 10.2271 13.3863 8.94666 11.8068 8.94666C10.2272 8.94666 8.94678 10.2271 8.94678 11.8067C8.94678 13.3862 10.2272 14.6667 11.8068 14.6667Z"
                        fill="#5F05D1"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[20px] font-bold">Trade Channel</span>
                    <span className="text-slate-300">Cash & Carry</span>
                  </div>
                </div>
                <div className="cursor-pointer mt-[.5rem]">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.375 9.5C7.375 10.26 6.76 10.875 6 10.875C5.24 10.875 4.625 10.26 4.625 9.5C4.625 8.74 5.24 8.125 6 8.125C6.76 8.125 7.375 8.74 7.375 9.5ZM5.375 9.5C5.375 9.845 5.655 10.125 6 10.125C6.345 10.125 6.625 9.845 6.625 9.5C6.625 9.155 6.345 8.875 6 8.875C5.655 8.875 5.375 9.155 5.375 9.5Z"
                      fill="#BABABA"
                    />
                    <path
                      d="M7.375 2.5C7.375 3.26 6.76 3.875 6 3.875C5.24 3.875 4.625 3.26 4.625 2.5C4.625 1.74 5.24 1.125 6 1.125C6.76 1.125 7.375 1.74 7.375 2.5ZM5.375 2.5C5.375 2.845 5.655 3.125 6 3.125C6.345 3.125 6.625 2.845 6.625 2.5C6.625 2.155 6.345 1.875 6 1.875C5.655 1.875 5.375 2.155 5.375 2.5Z"
                      fill="#BABABA"
                    />
                    <path
                      d="M7.375 6C7.375 6.76 6.76 7.375 6 7.375C5.24 7.375 4.625 6.76 4.625 6C4.625 5.24 5.24 4.625 6 4.625C6.76 4.625 7.375 5.24 7.375 6ZM5.375 6C5.375 6.345 5.655 6.625 6 6.625C6.345 6.625 6.625 6.345 6.625 6C6.625 5.655 6.345 5.375 6 5.375C5.655 5.375 5.375 5.655 5.375 6Z"
                      fill="#BABABA"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Draggable>

          <Draggable onDrag={handleDrag}>
            {/* <Resizable
                        minWidth={100}
                        minHeight={100}
                        defaultSize={{ width: 200, height: 200 }}
                        >
                    </Resizable> */}
            <div className="bg-newPrimaryDark rounded-xl p-5 flex flex-col w-[300px]">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center justify-center gap-3">
                  <div className="bg-channelTradeMarkerBgColor p-4 rounded-xl">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M12.4466 1.33331H11.18C9.72663 1.33331 8.95996 2.09998 8.95996 3.55331V4.81998C8.95996 6.27331 9.72663 7.03998 11.18 7.03998H12.4466C13.9 7.03998 14.6666 6.27331 14.6666 4.81998V3.55331C14.6666 2.09998 13.9 1.33331 12.4466 1.33331Z"
                        fill="#5F05D1"
                      />
                      <path
                        opacity="0.4"
                        d="M4.82683 8.95331H3.56016C2.10016 8.95331 1.3335 9.71997 1.3335 11.1733V12.44C1.3335 13.9 2.10016 14.6666 3.5535 14.6666H4.82016C6.2735 14.6666 7.04016 13.9 7.04016 12.4466V11.18C7.04683 9.71997 6.28016 8.95331 4.82683 8.95331Z"
                        fill="#5F05D1"
                      />
                      <path
                        d="M4.1935 7.05331C5.77303 7.05331 7.0535 5.77285 7.0535 4.19331C7.0535 2.61378 5.77303 1.33331 4.1935 1.33331C2.61396 1.33331 1.3335 2.61378 1.3335 4.19331C1.3335 5.77285 2.61396 7.05331 4.1935 7.05331Z"
                        fill="#5F05D1"
                      />
                      <path
                        d="M11.8068 14.6667C13.3863 14.6667 14.6668 13.3862 14.6668 11.8067C14.6668 10.2271 13.3863 8.94666 11.8068 8.94666C10.2272 8.94666 8.94678 10.2271 8.94678 11.8067C8.94678 13.3862 10.2272 14.6667 11.8068 14.6667Z"
                        fill="#5F05D1"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[20px] font-bold">Trade Channel</span>
                    <span className="text-slate-300">GT Wholesale</span>
                  </div>
                </div>
                <div className="cursor-pointer mt-[.5rem]">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.375 9.5C7.375 10.26 6.76 10.875 6 10.875C5.24 10.875 4.625 10.26 4.625 9.5C4.625 8.74 5.24 8.125 6 8.125C6.76 8.125 7.375 8.74 7.375 9.5ZM5.375 9.5C5.375 9.845 5.655 10.125 6 10.125C6.345 10.125 6.625 9.845 6.625 9.5C6.625 9.155 6.345 8.875 6 8.875C5.655 8.875 5.375 9.155 5.375 9.5Z"
                      fill="#BABABA"
                    />
                    <path
                      d="M7.375 2.5C7.375 3.26 6.76 3.875 6 3.875C5.24 3.875 4.625 3.26 4.625 2.5C4.625 1.74 5.24 1.125 6 1.125C6.76 1.125 7.375 1.74 7.375 2.5ZM5.375 2.5C5.375 2.845 5.655 3.125 6 3.125C6.345 3.125 6.625 2.845 6.625 2.5C6.625 2.155 6.345 1.875 6 1.875C5.655 1.875 5.375 2.155 5.375 2.5Z"
                      fill="#BABABA"
                    />
                    <path
                      d="M7.375 6C7.375 6.76 6.76 7.375 6 7.375C5.24 7.375 4.625 6.76 4.625 6C4.625 5.24 5.24 4.625 6 4.625C6.76 4.625 7.375 5.24 7.375 6ZM5.375 6C5.375 6.345 5.655 6.625 6 6.625C6.345 6.625 6.625 6.345 6.625 6C6.625 5.655 6.345 5.375 6 5.375C5.655 5.375 5.375 5.655 5.375 6Z"
                      fill="#BABABA"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Draggable>

          <Draggable onDrag={handleDrag}>
            {/* <Resizable
                        minWidth={100}
                        minHeight={100}
                        defaultSize={{ width: 200, height: 200 }}
                        >
                    </Resizable> */}
            <div className="big-parent bg-newPrimaryDark rounded-xl p-5 flex flex-col gap-5 w-[300px]">
              <div className="immediate-child bg-newPrimaryDark p-[.5rem] rounded-xl absolute top-[-45%] left-0 hidden ">
                <button
                  onClick={() => console.log('hellooo')}
                  className="relative group rounded-xl p-[10px] bg-newPrimaryDark"
                >
                  {/* addRect(canvas) */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 6H9"
                      stroke="#BABABA"
                      stroke-width="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 9V3"
                      stroke="#BABABA"
                      stroke-width="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className="grand-child absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100">
                    <span
                      className={
                        ' text-slate-500 text-[12px] whitespace-nowrap '
                      }
                    >
                      Add Activity
                    </span>
                  </div>
                </button>
                <button className="relative group rounded-xl  p-[10px] bg-newPrimaryDark">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 6.45V8.55C8 10.3 7.3 11 5.55 11H3.45C1.7 11 1 10.3 1 8.55V6.45C1 4.7 1.7 4 3.45 4H5.55C7.3 4 8 4.7 8 6.45Z"
                      fill="#BABABA"
                    />
                    <path
                      d="M8.54988 1H6.44988C5.11771 1 4.39685 1.40854 4.12841 2.37301C3.97908 2.90953 4.45988 3.375 5.01679 3.375H5.54988C7.64988 3.375 8.62488 4.35 8.62488 6.45V6.98309C8.62488 7.54001 9.09035 8.0208 9.62687 7.87147C10.5913 7.60303 10.9999 6.88217 10.9999 5.55V3.45C10.9999 1.7 10.2999 1 8.54988 1Z"
                      fill="#BABABA"
                    />
                  </svg>

                  <div className="absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100">
                    <span
                      className={
                        ' text-slate-500 text-[12px] whitespace-nowrap '
                      }
                    >
                      Duplicate
                    </span>
                  </div>
                </button>
                <button className="relative group rounded-xl  p-[10px] bg-newPrimaryDark">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.095 0H2.905C1.085 0 0 1.085 0 2.905V7.09C0 8.915 1.085 10 2.905 10H7.09C8.91 10 9.995 8.915 9.995 7.095V2.905C10 1.085 8.915 0 7.095 0ZM4.475 7.755C4.33 7.9 4.055 8.04 3.855 8.07L2.625 8.245C2.58 8.25 2.535 8.255 2.49 8.255C2.285 8.255 2.095 8.185 1.96 8.05C1.795 7.885 1.725 7.645 1.765 7.38L1.94 6.15C1.97 5.945 2.105 5.675 2.255 5.53L4.485 3.3C4.525 3.405 4.565 3.51 4.62 3.63C4.67 3.735 4.725 3.845 4.785 3.945C4.835 4.03 4.89 4.11 4.935 4.17C4.99 4.255 5.055 4.335 5.095 4.38C5.12 4.415 5.14 4.44 5.15 4.45C5.275 4.6 5.42 4.74 5.545 4.845C5.58 4.88 5.6 4.9 5.61 4.905C5.685 4.965 5.76 5.025 5.825 5.07C5.905 5.13 5.985 5.185 6.07 5.23C6.17 5.29 6.28 5.345 6.39 5.4C6.505 5.45 6.61 5.495 6.715 5.53L4.475 7.755ZM7.685 4.545L7.225 5.01C7.195 5.04 7.155 5.055 7.115 5.055C7.1 5.055 7.08 5.055 7.07 5.05C6.055 4.76 5.245 3.95 4.955 2.935C4.94 2.88 4.955 2.82 4.995 2.785L5.46 2.32C6.22 1.56 6.945 1.575 7.69 2.32C8.07 2.7 8.255 3.065 8.255 3.445C8.25 3.805 8.065 4.165 7.685 4.545Z"
                      fill="#BABABA"
                    />
                  </svg>

                  <div className="absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100">
                    <span
                      className={
                        ' text-slate-500 text-[12px] whitespace-nowrap '
                      }
                    >
                      Edit
                    </span>
                  </div>
                </button>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center justify-center gap-3">
                  <div className="bg-normalInputBg p-4 rounded-xl">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M12.4466 1.33337H11.18C9.72663 1.33337 8.95996 2.10004 8.95996 3.55337V4.82004C8.95996 6.27337 9.72663 7.04004 11.18 7.04004H12.4466C13.9 7.04004 14.6666 6.27337 14.6666 4.82004V3.55337C14.6666 2.10004 13.9 1.33337 12.4466 1.33337Z"
                        fill="#5F05D1"
                      />
                      <path
                        opacity="0.4"
                        d="M4.82683 8.95337H3.56016C2.10016 8.95337 1.3335 9.72004 1.3335 11.1734V12.44C1.3335 13.9 2.10016 14.6667 3.5535 14.6667H4.82016C6.2735 14.6667 7.04016 13.9 7.04016 12.4467V11.18C7.04683 9.72004 6.28016 8.95337 4.82683 8.95337Z"
                        fill="#5F05D1"
                      />
                      <path
                        d="M4.1935 7.05337C5.77303 7.05337 7.0535 5.77291 7.0535 4.19337C7.0535 2.61384 5.77303 1.33337 4.1935 1.33337C2.61396 1.33337 1.3335 2.61384 1.3335 4.19337C1.3335 5.77291 2.61396 7.05337 4.1935 7.05337Z"
                        fill="#5F05D1"
                      />
                      <path
                        d="M11.8068 14.6667C13.3863 14.6667 14.6668 13.3862 14.6668 11.8067C14.6668 10.2271 13.3863 8.94666 11.8068 8.94666C10.2272 8.94666 8.94678 10.2271 8.94678 11.8067C8.94678 13.3862 10.2272 14.6667 11.8068 14.6667Z"
                        fill="#5F05D1"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[20px] font-bold">
                      Categorization
                    </span>
                    <span className="text-slate-300">Set B</span>
                  </div>
                </div>
                <div className="cursor-pointer mt-[.5rem]">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.375 9.5C7.375 10.26 6.76 10.875 6 10.875C5.24 10.875 4.625 10.26 4.625 9.5C4.625 8.74 5.24 8.125 6 8.125C6.76 8.125 7.375 8.74 7.375 9.5ZM5.375 9.5C5.375 9.845 5.655 10.125 6 10.125C6.345 10.125 6.625 9.845 6.625 9.5C6.625 9.155 6.345 8.875 6 8.875C5.655 8.875 5.375 9.155 5.375 9.5Z"
                      fill="#BABABA"
                    />
                    <path
                      d="M7.375 2.5C7.375 3.26 6.76 3.875 6 3.875C5.24 3.875 4.625 3.26 4.625 2.5C4.625 1.74 5.24 1.125 6 1.125C6.76 1.125 7.375 1.74 7.375 2.5ZM5.375 2.5C5.375 2.845 5.655 3.125 6 3.125C6.345 3.125 6.625 2.845 6.625 2.5C6.625 2.155 6.345 1.875 6 1.875C5.655 1.875 5.375 2.155 5.375 2.5Z"
                      fill="#BABABA"
                    />
                    <path
                      d="M7.375 6C7.375 6.76 6.76 7.375 6 7.375C5.24 7.375 4.625 6.76 4.625 6C4.625 5.24 5.24 4.625 6 4.625C6.76 4.625 7.375 5.24 7.375 6ZM5.375 6C5.375 6.345 5.655 6.625 6 6.625C6.345 6.625 6.625 6.345 6.625 6C6.625 5.655 6.345 5.375 6 5.375C5.655 5.375 5.375 5.655 5.375 6Z"
                      fill="#BABABA"
                    />
                  </svg>
                </div>
              </div>
              <div className="">
                <span className="p-[.5rem] rounded-xl justify-center bg-white text-slate-500">
                  12 Activities
                </span>
              </div>
            </div>
          </Draggable>
          <svg>
            <line
              ref={linkRef as any}
              x1={0}
              y1={0}
              x2={50}
              y2={50}
              stroke="white"
              strokeDasharray={3}
              strokeDashoffset={3}
              strokeWidth={2}
            />
          </svg>
          {/* <button onClick={() => addRect(canvas)}>Rectangle</button> */}
          {/* <canvas id="canvas" className='w-full cursor-grab' /> */}
        </div>
        {/* END ITEMS WE ADD EX: CHANNEL CLUSTER, TRANDE CHANNELS, CATEGORY */}

        {/* ---------------------- START ACTION BUTTONS ---------------------- */}

        {/* START NOT DEFINED BUTTON  */}
        <div className="fixed top-[80px] left-[45%]">
          <button className="relative group rounded-xl p-[14px] bg-normalInputBg ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33301 5.20667V10.7933C1.33301 11.7867 1.57301 12.6133 2.03301 13.2467C2.22634 13.5267 2.47301 13.7733 2.75301 13.9667C3.29967 14.3667 3.99301 14.6 4.81301 14.6533V1.35333C2.62634 1.49333 1.33301 2.91333 1.33301 5.20667Z"
                fill="#BABABA"
              />
              <path
                d="M13.9668 2.75331C13.7735 2.47331 13.5268 2.22665 13.2468 2.03331C12.6135 1.57331 11.7868 1.33331 10.7935 1.33331H5.81348V14.6666H10.7935C13.2201 14.6666 14.6668 13.22 14.6668 10.7933V5.20665C14.6668 4.21331 14.4268 3.38665 13.9668 2.75331ZM10.3335 9.35331C10.5268 9.54665 10.5268 9.86665 10.3335 10.06C10.2335 10.16 10.1068 10.2066 9.98014 10.2066C9.85348 10.2066 9.72681 10.16 9.62681 10.06L7.92014 8.35331C7.72681 8.15998 7.72681 7.83998 7.92014 7.64665L9.62681 5.93998C9.82014 5.74665 10.1401 5.74665 10.3335 5.93998C10.5268 6.13331 10.5268 6.45331 10.3335 6.64665L8.98681 7.99998L10.3335 9.35331Z"
                fill="#BABABA"
              />
            </svg>
            {/* <div className='absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                        <span>Select Tool (V)</span>
                    </div> */}
          </button>
        </div>
        {/* END NOT DEFINED BUTTON */}

        {/* START SAVE ACTIVITIES BUTTON */}
        <div className="fixed top-[80px] right-10">
          <button
            onClick={() => console.log('hii')}
            className="rounded-xl p-[14px] bg-stepsMarkerBlue flex flex-row justify-between items-center gap-3"
          >
            {/* removeRect (canvas) */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12V6.66667H2V12H0.666667C0.29848 12 0 11.7015 0 11.3333V0.666667C0 0.29848 0.29848 0 0.666667 0H9.33333L12 2.66667V11.3333C12 11.7015 11.7015 12 11.3333 12H10ZM8.66667 12H3.33333V8H8.66667V12Z"
                fill="#F7F9FF"
              />
            </svg>
            <span>Save</span>
          </button>
        </div>
        {/* END SAVE ACTIVITIES BUTTON */}

        {/* START BUTTOM ACTION BUTTONS */}
        <div className="fixed right-[20%] rounded-2xl bg-newPrimaryDark px-[1rem] py-[1rem] flex flex-row gap-10 bottom-10">
          <div className="flex flex-row gap-2">
            <button
              onClick={() => {
                // addRect(canvas);
                console.log('');
              }}
              className="relative group rounded-xl p-[14px] bg-normalInputBg"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4167 0.916648L17.0875 6.13998C17.1686 6.16687 17.2395 6.21804 17.2906 6.28657C17.3416 6.35509 17.3704 6.43766 17.3729 6.52307C17.3755 6.60848 17.3517 6.69261 17.3048 6.76406C17.2579 6.83551 17.1902 6.89081 17.1109 6.92248L9.83336 9.83331L6.14586 17.2083C6.10834 17.2834 6.04901 17.3454 5.97564 17.3862C5.90227 17.427 5.81828 17.4447 5.73469 17.437C5.65109 17.4292 5.57179 17.3964 5.50717 17.3428C5.44254 17.2892 5.39562 17.2174 5.37253 17.1366L0.884197 1.42665C0.863379 1.35379 0.862824 1.27663 0.882593 1.20347C0.902363 1.13032 0.941708 1.06394 0.996393 1.01148C1.05108 0.959026 1.11904 0.922475 1.19295 0.905765C1.26686 0.889055 1.34393 0.892817 1.41586 0.916648"
                  fill="#BABABA"
                />
              </svg>
              <div className="absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100">
                <span
                  className={' text-slate-500 text-[12px] whitespace-nowrap '}
                >
                  Select Tool (V)
                </span>
              </div>
            </button>
            <button className="relative group rounded-xl  p-[14px] bg-normalInputBg">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.37497 1.1875C7.37497 0.93886 7.47375 0.700403 7.64956 0.524587C7.82538 0.348772 8.06383 0.25 8.31247 0.25C8.56111 0.25 8.79957 0.348772 8.97539 0.524587C9.1512 0.700403 9.24997 0.93886 9.24997 1.1875V7.125C9.24997 7.29076 9.31582 7.44973 9.43303 7.56694C9.55024 7.68415 9.70921 7.75 9.87497 7.75C10.0407 7.75 10.1997 7.68415 10.3169 7.56694C10.4341 7.44973 10.5 7.29076 10.5 7.125V2.4375C10.5 2.18886 10.5987 1.9504 10.7746 1.77459C10.9504 1.59877 11.1888 1.5 11.4375 1.5C11.6861 1.5 11.9246 1.59877 12.1004 1.77459C12.2762 1.9504 12.375 2.18886 12.375 2.4375V8.375C12.375 8.54076 12.4408 8.69973 12.558 8.81694C12.6752 8.93415 12.8342 9 13 9C13.1657 9 13.3247 8.93415 13.4419 8.81694C13.5591 8.69973 13.625 8.54076 13.625 8.375V4.9375C13.6246 4.68886 13.7231 4.45027 13.8987 4.27422C14.0743 4.09817 14.3126 3.99908 14.5612 3.99875C14.8099 3.99842 15.0485 4.09687 15.2245 4.27245C15.4006 4.44803 15.4996 4.68636 15.5 4.935V10.875C15.5 11.8912 15.07 13.0125 14.5712 13.99C14.1025 14.8873 13.5664 15.7477 12.9675 16.5637C12.405 17.3412 11.5037 17.75 10.58 17.75H7.66997C6.47997 17.75 5.42372 17.075 4.85122 16.075C4.00085 14.6154 3.06895 13.2048 2.05997 11.85C1.60994 11.2419 1.14649 10.6438 0.669974 10.0563L0.649973 10.0312L0.646224 10.0262H0.644974C0.544553 9.90641 0.492698 9.75328 0.49964 9.59708C0.506582 9.44088 0.571818 9.29296 0.682474 9.1825C1.12122 8.745 1.63997 8.56625 2.16622 8.58C2.66622 8.5925 3.13872 8.77875 3.53622 9C3.78872 9.13875 4.02872 9.30375 4.24872 9.47375V2.4375C4.24872 2.18886 4.3475 1.9504 4.52331 1.77459C4.69913 1.59877 4.93758 1.5 5.18622 1.5C5.43486 1.5 5.67332 1.59877 5.84914 1.77459C6.02495 1.9504 6.12372 2.18886 6.12372 2.4375V7.125C6.12372 7.29093 6.18964 7.45006 6.30696 7.56738C6.42429 7.68471 6.58342 7.75063 6.74935 7.75063C6.91527 7.75063 7.0744 7.68471 7.19173 7.56738C7.30906 7.45006 7.37497 7.29093 7.37497 7.125V1.1875Z"
                  fill="#BABABA"
                />
              </svg>
              <div className="absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100">
                <span
                  className={' text-slate-500 text-[12px] whitespace-nowrap '}
                >
                  Hand Tool (H)
                </span>
              </div>
            </button>
          </div>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => setOpenModal(true)}
              className="relative group rounded-xl  p-[14px] bg-normalInputBg"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.1665 6.66663C5.54722 6.66663 6.6665 5.54734 6.6665 4.16663C6.6665 2.78591 5.54722 1.66663 4.1665 1.66663C2.78579 1.66663 1.6665 2.78591 1.6665 4.16663C1.6665 5.54734 2.78579 6.66663 4.1665 6.66663Z"
                  fill="#BABABA"
                />
                <path
                  d="M15.8335 12.5C17.2142 12.5 18.3335 11.3807 18.3335 10C18.3335 8.61929 17.2142 7.5 15.8335 7.5C14.4528 7.5 13.3335 8.61929 13.3335 10C13.3335 11.3807 14.4528 12.5 15.8335 12.5Z"
                  fill="#BABABA"
                />
                <path
                  d="M4.1665 18.3334C5.54722 18.3334 6.6665 17.2141 6.6665 15.8334C6.6665 14.4527 5.54722 13.3334 4.1665 13.3334C2.78579 13.3334 1.6665 14.4527 1.6665 15.8334C1.6665 17.2141 2.78579 18.3334 4.1665 18.3334Z"
                  fill="#BABABA"
                />
                <path
                  d="M4.1665 13.9583C3.82484 13.9583 3.5415 13.675 3.5415 13.3333V6.66663C3.5415 6.32496 3.82484 6.04163 4.1665 6.04163C4.50817 6.04163 4.7915 6.32496 4.7915 6.66663C4.7915 8.49163 5.67484 9.37496 7.49984 9.37496H13.3332C13.6748 9.37496 13.9582 9.65829 13.9582 9.99996C13.9582 10.3416 13.6748 10.625 13.3332 10.625H7.49984C6.3665 10.625 5.45817 10.3333 4.7915 9.78329V13.3333C4.7915 13.675 4.50817 13.9583 4.1665 13.9583Z"
                  fill="#BABABA"
                />
              </svg>
              <div className="absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100">
                <span
                  className={' text-slate-500 text-[12px] whitespace-nowrap '}
                >
                  Channel Cluster
                </span>
              </div>
            </button>
            <button className="relative group rounded-xl  p-[14px] bg-normalInputBg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4998 12.9167C12.4998 15.9083 10.0748 18.3333 7.08317 18.3333C4.0915 18.3333 1.6665 15.9083 1.6665 12.9167C1.6665 9.925 4.0915 7.5 7.08317 7.5C7.22484 7.5 7.37484 7.50833 7.5165 7.51667C10.1582 7.725 12.2748 9.84167 12.4832 12.4833C12.4915 12.625 12.4998 12.775 12.4998 12.9167Z"
                  fill="#BABABA"
                />
                <path
                  d="M18.3336 7.08329C18.3336 9.79996 16.3336 12.0416 13.7336 12.4333V12.3833C13.4752 9.14996 10.8502 6.52496 7.59189 6.26663H7.56689C7.95856 3.66663 10.2002 1.66663 12.9169 1.66663C15.9086 1.66663 18.3336 4.09163 18.3336 7.08329Z"
                  fill="#BABABA"
                />
                <path
                  d="M4.65817 1.66663H2.49984C2.0415 1.66663 1.6665 2.04163 1.6665 2.49996V4.65829C1.6665 5.39996 2.5665 5.77496 3.0915 5.24996L5.24984 3.09163C5.7665 2.56663 5.39984 1.66663 4.65817 1.66663Z"
                  fill="#BABABA"
                />
                <path
                  d="M15.3418 18.3333H17.5001C17.9584 18.3333 18.3334 17.9583 18.3334 17.5V15.3417C18.3334 14.6 17.4334 14.225 16.9084 14.75L14.7501 16.9083C14.2334 17.4333 14.6001 18.3333 15.3418 18.3333Z"
                  fill="#BABABA"
                />
              </svg>
              <div className="absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100">
                <span
                  className={' text-slate-500 text-[12px] whitespace-nowrap '}
                >
                  Trade Channel
                </span>
              </div>
            </button>
            <button className="relative group rounded-xl  p-[14px] bg-normalInputBg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5585 1.66663H13.9752C12.1585 1.66663 11.2002 2.62496 11.2002 4.44163V6.02496C11.2002 7.84163 12.1585 8.79996 13.9752 8.79996H15.5585C17.3752 8.79996 18.3335 7.84163 18.3335 6.02496V4.44163C18.3335 2.62496 17.3752 1.66663 15.5585 1.66663Z"
                  fill="#BABABA"
                />
                <path
                  d="M6.03317 11.1917H4.44984C2.62484 11.1917 1.6665 12.15 1.6665 13.9667V15.55C1.6665 17.375 2.62484 18.3333 4.4415 18.3333H6.02484C7.8415 18.3333 8.79984 17.375 8.79984 15.5583V13.975C8.80817 12.15 7.84984 11.1917 6.03317 11.1917Z"
                  fill="#BABABA"
                />
                <path
                  d="M5.2415 8.81663C7.21592 8.81663 8.8165 7.21604 8.8165 5.24163C8.8165 3.26721 7.21592 1.66663 5.2415 1.66663C3.26709 1.66663 1.6665 3.26721 1.6665 5.24163C1.6665 7.21604 3.26709 8.81663 5.2415 8.81663Z"
                  fill="#BABABA"
                />
                <path
                  d="M14.7581 18.3334C16.7325 18.3334 18.3331 16.7328 18.3331 14.7583C18.3331 12.7839 16.7325 11.1833 14.7581 11.1833C12.7837 11.1833 11.1831 12.7839 11.1831 14.7583C11.1831 16.7328 12.7837 18.3334 14.7581 18.3334Z"
                  fill="#BABABA"
                />
              </svg>
              <div className="absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100">
                <span
                  className={' text-slate-500 text-[12px] whitespace-nowrap '}
                >
                  Category
                </span>
              </div>
            </button>
          </div>
        </div>
        {/* END BUTTOM ACTION BUTTONS */}

        {/* START BUTTOM ZOOM SEARCH ACTION BUTTONS */}
        <div className="fixed right-6 bottom-10 flex flex-col gap-5">
          <div className="rounded-xl flex flex-col p-4 bg-normalInputBg">
            <svg
              width="25"
              height="25"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.66683 13.9999C11.1646 13.9999 14.0002 11.1644 14.0002 7.66659C14.0002 4.16878 11.1646 1.33325 7.66683 1.33325C4.16903 1.33325 1.3335 4.16878 1.3335 7.66659C1.3335 11.1644 4.16903 13.9999 7.66683 13.9999Z"
                fill="#BABABA"
              />
              <path
                d="M14.2002 14.6666C14.0802 14.6666 13.9602 14.62 13.8735 14.5333L12.6335 13.2933C12.4535 13.1133 12.4535 12.82 12.6335 12.6333C12.8135 12.4533 13.1069 12.4533 13.2935 12.6333L14.5335 13.8733C14.7135 14.0533 14.7135 14.3466 14.5335 14.5333C14.4402 14.62 14.3202 14.6666 14.2002 14.6666Z"
                fill="#BABABA"
              />
            </svg>
          </div>
          <div className="rounded-xl flex flex-col justify-between p-4 bg-normalInputBg">
            <button onClick={handleScaleUp}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 8H12"
                  stroke="#BABABA"
                  stroke-width="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 12V4"
                  stroke="#BABABA"
                  stroke-width="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button onClick={handleScaleDown}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 8H12"
                  stroke="#BABABA"
                  stroke-width="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* END BUTTOM ZOOM SEARCH ACTION BUTTONS */}

        {/* ---------------------- END ACTION BUTTONS ---------------------- */}
      </div>
      {/* END MAIN CANVAS WHERE WE BUILD ACTIVITIES */}
      <CustomModal
        title="Create a channel cluster"
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        classStyle="bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center"
      >
        <AddChannelClusterForm handleCloseModal={handleCloseModal} />
      </CustomModal>
    </div>
  );
};

export default ActivityFlowBuilder;

// const [canvas, setCanvas] = useState<fabric.Canvas>();
// useEffect(() => {
//     const c = new fabric.Canvas("canvas", {
//         height: 1500,
//         width: 1500,
//         backgroundColor: "white",
//     });

//     // settings for all canvas in the app
//     fabric.Object.prototype.transparentCorners = false;
//     fabric.Object.prototype.cornerColor = "#242424";
//     fabric.Object.prototype.cornerStyle = "rect";
//     fabric.Object.prototype.cornerStrokeColor = "white";
//     fabric.Object.prototype.cornerSize = 6;

//     setCanvas(c);

//     return () => {
//         c.dispose();
//     };
// }, []);

// const rect = new fabric.Rect({
//     height: 70,
//     width: 200,
//     backgroundColor: "white",
//     // rx: 50,
//     // ry: 40,
//     rx: 10,
//     ry: 10,
//     // 400, 150, -200, 100, [0, 30, 50, 60
//     // backgroundColor: "white!important",
//     // stroke: "red",
// });

// const addRect = (canvas?: fabric.Canvas) => {
//     // const rect = new fabric.Rect({
//     //     height: 70,
//     //     width: 200,
//     //     backgroundColor: "white",
//     //     // rx: 50,
//     //     // ry: 40,
//     //     rx: 10,
//     //     ry: 10,
//     //     // 400, 150, -200, 100, [0, 30, 50, 60
//     //     // backgroundColor: "white!important",
//     //     // stroke: "red",
//     // });
//     canvas?.add(rect);
//     canvas?.requestRenderAll();
// };

// const removeRect = (canvas?: fabric.Canvas) => {
//     canvas?.remove(rect);
//     canvas?.requestRenderAll();
// };
