"use client"

import React, { useEffect, useState } from 'react';
import { Map, AdvancedMarker, MapControl, ControlPosition } from '@vis.gl/react-google-maps';
import Directions from './Directions';
import AdvancedMarkerWrapper from './AdvancedMarkerWrapper';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import io from 'socket.io-client'
import InfoView from '../infoView/InfoView';
import Pin from '../markers/Pin';

const RealTimeMap = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  const SendRealtimeLocation = ({latitude, longitude}: {latitude: string | number, longitude: string | number}) => {
    const socket = io('http://location:4000');

    socket.on('connect', () => {
      console.log("====================")
      const coords = {
        "latitude": latitude,
        "longitude": longitude
      }

      socket.emit('receive realtime coordinate', coords)
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });

    return () => {
      socket.disconnect();
    };
  }

  useEffect(() => {
    const watchId = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          setPosition({ lat: latitude, lng: longitude });

          SendRealtimeLocation({latitude, longitude});
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }, 5); // Update every 5 milliseconds

    return () => clearInterval(watchId);
  }, []);

  const { routes } = useRoutePlanning();
  const currentRoute = routes.find((route) => route?.id.toString() === '1');

  return (
    <Map center={position} zoom={18} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
      <Directions color={'blue'} />
      {currentRoute?.pointOfSales.map((pos: any) => (
        <AdvancedMarkerWrapper position={pos.position} active={true} key={pos.id} markerColor="red">
          <InfoView shopDetails={pos} />
        </AdvancedMarkerWrapper>
      ))}
      <AdvancedMarker position={position} key={1}>
        <Pin />
      </AdvancedMarker>
      <MapControl position={ControlPosition.TOP_LEFT}>
        <p className="bg-black">Latitude: {position.lat}</p>
        <p className="bg-black">Longitude: {position.lng}</p>
      </MapControl>
    </Map>
  );
};

export default RealTimeMap;





































































// 'use client';
// import React, { useEffect, useState, useRef } from 'react';
// import {
//   Map,
//   AdvancedMarker,
//   MapControl,
//   ControlPosition,
// } from '@vis.gl/react-google-maps';
// import Directions from './Directions';
// import AdvancedMarkerWrapper from './AdvancedMarkerWrapper';
// import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
// import InfoView from '../infoView/InfoView';

// import Pin from '../markers/Pin';

// const RealTimeMap = () => {
//   const [position, setPosition] = useState({ lat: 0, lng: 0 });

//   const BACKEND_URL = 'https:............';

//   useEffect(() => {
//     const watchId = navigator.geolocation.watchPosition((position) => {
//       const { latitude, longitude } = position.coords;
//       // Show a map centered at latitude / longitude.
//       console.log('Latitude: ' + latitude + ' Longitude: ' + longitude);

//       setPosition({ lat: latitude, lng: longitude });
//     });

//     return () => {
//       navigator.geolocation.clearWatch(watchId);
//     };
//   }, []); //
//   // }, [position]);

//   const { dispatch, routes, selectedRouteId } = useRoutePlanning();
//   const currentRoute = routes.find((route) => route?.id.toString() === '1');
//   console.log('CURRENT ROUTE', currentRoute);

//   return (
//     <Map center={position} zoom={18} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
//       <Directions color={'blue'} />

//       {currentRoute?.pointOfSales.map((pos: any) => (
//         <AdvancedMarkerWrapper
//           position={pos.position}
//           active={true}
//           key={pos.id}
//           markerColor="red"
//         >
//           <InfoView shopDetails={pos} />
//         </AdvancedMarkerWrapper>
//       ))}

//       {
//         <AdvancedMarker position={position} key={1}>
//           <Pin />
//         </AdvancedMarker>
//       }

//       <MapControl position={ControlPosition.TOP_LEFT}>
//         <p className="bg-black">Latitude: {position.lat}</p>
//         <p className="bg-black">Longitude: {position.lng}</p>
//       </MapControl>
//     </Map>
//   );
// };

// export default RealTimeMap;
