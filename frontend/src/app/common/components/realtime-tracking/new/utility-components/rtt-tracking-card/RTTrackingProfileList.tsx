import React, { useState } from 'react'
import RTTrackingProfileCard from './RTTrackingProfileCard'
import { TrackingListType } from '@/services/simulationData'
import { useSettings } from '@/app/hooks/useSettings';

const RTTrackingProfileList = () => {
  const { trackingList } = useSettings (); 
  console.log("...data", trackingList)
  return (
    <div className='flex flex-col gap-4'>
      {
        trackingList && trackingList?.length > 0 ? 
          trackingList.map((dt: TrackingListType) => {
            return (
              <div key={dt?.id}>
                <RTTrackingProfileCard data={ dt } id={dt?.id} />
              </div>
            )
          })
          : 
          "Loading data"
      }
    </div>
  )
}

export default RTTrackingProfileList