'use client';
import Image from 'next/image';
import React from 'react';
import VictoryGardenImage from '../../../../../public/images/victoryGardenImage.jpg';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { addPOSToRoute } from '@/redux/features/route-planning-slice';
import { IPointOfSalesType } from '@/utils/types';
import { AddWhiteBGSvgIcon, CellPhoneSvgIcon, UserLosangeSvgIcon } from '../svgs/SvgsIcons';
import { useSettings } from '@/app/hooks/useSettings';
import { IChannelCluster, TradeChannel } from '@/redux/features/types';
import { usePathname } from 'next/navigation';
import { getAllActivitiesForPOS } from '@/utils/getAllActivitiesForPOS'; 
import { useActivities } from '@/app/hooks/useActivities';

// import contactIconGreen from '../../../../../public/icons/contactIconGreen.svg';
// import userIconGreen from '../../../../../public/icons/userIconGreen.svg';
// import { Button } from '../button/Button';
// import { useActivities } from '@/app/hooks/useActivities';

type InfoViewProps = {
  shopDetails: IPointOfSalesType;
};

const InfoViewRoutes: React.FC<InfoViewProps> = ({ shopDetails }) => {
  console.log(shopDetails, "shopDetails1111")

  const { selectedRouteId, dispatch } = useRoutePlanning(); 
  const pathName = usePathname ()
  const { localActivities } = useActivities ()
  const currentPage = pathName.split("/")[pathName.split("/").length - 1]
  const { categories, channelClusters, tradeChannels, activities } = useSettings(); 
  console.log("activities|||", activities)

  // GET CORRESPONDING CHANNEL CLUSTER
  const correspondingLocalChannelCluster = channelClusters?.find((channeLC: IChannelCluster) => {
    return channeLC?._id === shopDetails?.channelCluster
  })

  // GET CORRESPONDING TRADE CHANNEL
  const correspondingLocalTradeChannel = tradeChannels?.find((tradeC: TradeChannel) => {
    return tradeC?._id === shopDetails?.tradeChannel
  })

  // GET CORRESPONDING CATGORIES
  const correspondingLocalCategories = categories?.find((cat: any) => {
    return cat?._id === shopDetails?.category
  })

  // GET ALL ACTIVITIES RELATED TO A SPECIFIC POS
  const isChannelClusterInActivities = getAllActivitiesForPOS (activities as [], shopDetails?.channelCluster as string)

  console.log(isChannelClusterInActivities, "isChannelClusterInActivities") 

  const handleAddToRoute = () => {
    dispatch(
      // addPointOfSalesToRoute({
      //   routeId: selectedRouteId,
      //   posId: shopDetails?._id,
      // })
      addPOSToRoute ({
        routeId: selectedRouteId,
        pos: {
          ...shopDetails, 
          tasks: isChannelClusterInActivities, 
          taskTotalTime: 0, 
        },
      })
    );
  };

  return (
    <div className=' rounded-2xl w-[300px]'>      
      <div className='bg-black'>
        <Image
            className=" w-full h-16 object-cover"
            src={VictoryGardenImage}
            alt="Image of the shop"
          />
      </div>
      <div className='bg-black px-3 py-2 flex flex-col gap-4'>
        <h1 className="font-bold text-white text-[20px]">{shopDetails?.name}</h1>
        <h3 className="text-slate-100 text-[13px]">
          {shopDetails?.location}
        </h3>
        <div className='flex flex-row justify-start gap-3 pb-4 rounded-2xl'>
          <div className='flex flex-row'>
            <CellPhoneSvgIcon />
            <h3 className='text-slate-300 text-[14px]'>6758738094</h3>
          </div>
          <div className='flex flex-row'>
            <UserLosangeSvgIcon />
            <h3 className='text-slate-300 text-[14px]'>{shopDetails?.owner}</h3>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-2" >
          {/* className='grid grid-cols-[repeat(auto-fit,minmax(50px,100px))]' */}
          {/* DISPLAY CC */}
          <div className='rounded-xl border-white border-1 px-3 py-1 ' style={{
            backgroundColor: correspondingLocalChannelCluster?.color as string
          }}>
            <h1>{ correspondingLocalChannelCluster?.name }</h1>
          </div>
          {/* DISPLAY TC */}
          <div className='rounded-xl border-white border-1 px-3 py-1' style={{
            backgroundColor: correspondingLocalChannelCluster?.color as string
          }}>
            <h1>{ correspondingLocalTradeChannel?.name }</h1>
          </div>
          {/* DISPLAY CATEGORY */}
          <div className='rounded-xl border-white border-1 px-3 py-1' style={{
              backgroundColor: correspondingLocalChannelCluster?.color as string
            }}>
            <h1>{ correspondingLocalCategories?.name }</h1>
          </div>

        </div>

        <div>
          {
            currentPage !== "point-of-sales" ? 
              <button  onClick={() => handleAddToRoute()} className='bg-bgColorDark rounded-2xl p-3 flex flex-row items-center justify-center gap-2 cursor-pointer'>
                <AddWhiteBGSvgIcon />
                <span className='text-[16px]'>Add To Route</span>
              </button>
              : 
              ""

          }
        </div>
      </div>

    </div>
  );
};

export default InfoViewRoutes;
