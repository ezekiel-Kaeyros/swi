import Home from '@/app/modules/home/Home';
import GeoCodeMap from '../../common/components/maps/GeoCodeMap';
import GoogleReactMap from '@/app/common/components/maps/GoogleReactMap';
import ReactDirectionsMap from '@/app/common/components/maps/ReactDirectionsMap';
import AllDirections from '@/app/common/components/maps/AllDirections';
import RealTimeMap from '@/app/common/components/maps/RealTimeMap';
import AgentModal from '@/app/[lang]/(pages)/components/agents-creation/AgentModal';
import AddActivityForm from '@/app/common/components/forms/add-activity-form/AddActivityForm';
import React, { useState } from 'react';


export default function HomePage({}) {
  return (
    <div className="h-full p-8 2xl:w-11/12 mx-auto relative">
      {/* <div className='flex justify-center items-center fixed w-full h-screen z-10 top-0 left-0'>
        <div className='backdrop-blur-lg h-screen w-full absolute'>
        </div>
        <AgentModal />
      </div> */}
      <Home />
      {/* <GeoCodeMap address="Bonamoussadi, Douala" /> */}
      {/* {<GoogleReactMap />} */}

      <AllDirections />

      <RealTimeMap />
    </div>
  );
}
