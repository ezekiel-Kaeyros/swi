'use client';
import React, {useEffect, useRef} from 'react';
import { Map } from '@vis.gl/react-google-maps';
import Directions from './Directions';
import AdvancedMarkerWrapper from './AdvancedMarkerWrapper';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { usePointOfSales } from '@/app/hooks/usePointOfSales';
import { generateRandomBrightColor } from './map-utils/generateRandomColors';
import InfoView from '../infoView/InfoView';


const AllDirections = () => {

    const { dispatch, routes, selectedRouteId, dbRoutes } = useRoutePlanning();
    const { pointOfSales } = usePointOfSales();
    console.log('ALL ROUTES', routes, pointOfSales);

    const position = { lat: 61.2176, lng: -149.8997 }; 
    console.log(pointOfSales, "><><><><><")
    return (
            <Map center={position} zoom={18} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
              {
                dbRoutes?.map(route => {
                  let color = generateRandomBrightColor();
                  return (
                    
                    <Directions route={route} color={color} key={route?._id} />
                  )

                })
              }
                
              { pointOfSales?.map((pos: any) =>{
                  return (<AdvancedMarkerWrapper position={pos.position} active={true} key={pos.id} markerColor='red'>
                      <InfoView shopDetails={pos}/>
                  </AdvancedMarkerWrapper>
                  )}
              )}
            </Map>
    );

}

export default AllDirections;






// 'use client';
// import React, {useEffect, useRef} from 'react';
// import { Map } from '@vis.gl/react-google-maps';
// import Directions from './Directions';
// import AdvancedMarkerWrapper from './AdvancedMarkerWrapper';
// import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
// import { usePointOfSales } from '@/app/hooks/usePointOfSales';
// import { generateRandomBrightColor } from './map-utils/generateRandomColors';
// import InfoView from '../infoView/InfoView';


// const AllDirections = () => {

//     const { dispatch, routes, selectedRouteId, dbRoutes } = useRoutePlanning();
//     const { pointOfSales } = usePointOfSales();
//     console.log('ALL ROUTES', routes, pointOfSales);

//     const position = { lat: 61.2176, lng: -149.8997 };
//     return (
//             <Map center={position} zoom={18} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
//               {
//                 routes.map(route => {
//                   let color = generateRandomBrightColor();
//                   return (
                    
//                     <Directions route={route} color={color} key={route.id} />
//                   )

//                 })
//               }
                
//               { pointOfSales?.map((pos: any) =>{
//                   return (<AdvancedMarkerWrapper position={pos.position} active={true} key={pos.id} markerColor='red'>
//                       <InfoView shopDetails={pos}/>
//                   </AdvancedMarkerWrapper>
//                   )}
//               )}
//             </Map>
//     );

// }

// export default AllDirections;