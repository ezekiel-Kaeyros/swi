'use client';
import React, { useEffect, useState } from 'react';

import EmptyStateRoute from '@/app/common/components/route-planning/empty-state-route/EmptyStateRoute';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import RouteCard from '@/app/common/components/route-planning/route-card/RouteCard';
import AddRouteIcon from '../../../../public/icons/addRouteIcon.svg';
import AddRouteIcon2 from '../../../../public/images/truck.svg';
import filter from '../../../../public/images/Button (1).svg';
import displayAll from '../../../../public/images/Button.svg';
import route from '../../../../public/images/routing.svg';
import hiddeAll from '../../../../public/images/Button (2).svg';
import search from '../../../../public/images/search-normal (1).svg';

import { Button } from '@/app/common/components/button/Button';
import { useRouter } from 'next/navigation';
import {
  createRoute,
  displayAllRoutes,
  displayPOSMap,
  selectedRoute,
  toggleMaps,
} from '@/redux/features/route-planning-slice';
import Image from 'next/image';
import InputField from '@/app/common/components/forms/text-field/InputField';
import CreateRouteModal from '@/app/common/components/route-planning/modals/CreateRouteModal';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  FilterIcon,
  GridViewIcon,
  SearchIcon,
} from '@/app/common/components/svgs/SvgsIcons';
import { useHeaderTitle } from '@/app/hooks/useHeaderTitle';
import { setTitle } from '@/app/common/components/header/slice/header-title-slice';
import { convertMinutesToHoursAndMinutes } from '@/app/common/components/route-planning/utils/utils';
import { POSIdType, RoadItemType, RoutePlanningType, RouteRawTypeFromDB } from '@/redux/features/types';
import { v4 as uuidv4 } from 'uuid';
import { getAllActivitiesForPOS, getAllActivitiesForPOSOnLoad } from '@/utils/getAllActivitiesForPOS';
import { useActivities } from '@/app/hooks/useActivities';

const RoutePreparation = () => {
  /** Set Header Title Depending on the Module you are */
  const { dispatch, headerTitleState } = useHeaderTitle();
  useEffect(() => {
    dispatch(setTitle('Route planning'));

    return () => {
      dispatch(
        setTitle('')
      ); /** Just set the name of header to empty to remote if went changing page  */
    };
  }, [dispatch]);

  /** Just set the name header you want to */

  const { routes, dbRoutes } = useRoutePlanning();
  const { toggleMapsValue, showAllRoutes } = useRoutePlanning();
  const { push } = useRouter();

  console.log(dbRoutes, ">>>>>111")

  const { activities } = useActivities ()

  const newRouteFormat: RoutePlanningType [] = dbRoutes?.map((route: RouteRawTypeFromDB) => {
    // value: RoutePlanningType, index: number, 
    // const all
    // Route-${uuidv4()}
 
    const roadItems: RoadItemType [] = route?.pos?.map((rItem: POSIdType) => {

      // GOT THROUGH THE ARRAY OF ACTIVITIES activities_items TO FIND ID OF A SPECIFIC POS
      const isChannelClusterInActivities = getAllActivitiesForPOSOnLoad (activities as [], route?.activities_items as [], rItem?.channelCluster as string); 

      console.log(isChannelClusterInActivities, "llbbaaqq")

      return {
        _id: rItem?._id,
        taskIds: isChannelClusterInActivities,
        roadId: route?._id,
        posId: rItem,
        createdAt: rItem?.createdAt,
        updatedAt: rItem?.updatedAt,
        __v: rItem?.__v
      }
    })

    return {
      _id: route?._id,
      name: route?.name, 
      roadItems: roadItems, 
      saleRep: route?.saleRep, 
      createdAt: route?.createdAt,
      updatedAt: route?.updatedAt,
      __v: route?.__v, 
    }
  })

  console.log(newRouteFormat, "newRouteFormat,,,")

  const handleCreateRoute = () => {
    dispatch(createRoute({}));
    // dispatch(displayAllRoutes({ showAllRoutes: false }));
    // dispatch(toggleMaps({ toggle: false }));
    dispatch(displayPOSMap({ posMapDisplayState: true }));
    // USE INSIDE ROUTE-PREPARATION
    push('/route-preparation/create');
    // USE INSIDE ROUTE-PLANNING/ROUTE-PREPARATION
    // push('/route-planning/route-preparation/create');
  }; 
 
  useEffect(() => {
    dispatch(displayAllRoutes({ showAllRoutes: true }));
    dispatch(toggleMaps({ toggle: false }));
  }, []); 



  // 6639b018d26be58b5f26c8ae

  return (
    <>
      <div className="px-5 flex ">
        <div className=" flex flex-col w-full  h-[calc(100vh-100px)] overflow-y-auto  ">
          <div className="h-[130px] mb-3">
            <div className="flex flex-col">
              <div className="flex w-full gap-2">
                <div className="flex w-full flex-row items-center gap-3">
                  <InputField
                    svg={<SearchIcon height="30" width="30" color="none" />}
                    name="name"
                    placeholder="Search Point of Sales"
                  />
                  <div className="bg-bgColorDark cursor-pointer p-4 flex justify-center items-center rounded-xl h-[50px]">
                    <FilterIcon height="25" width="25" color="none" />
                  </div>
                  <div className="bg-bgColorDark cursor-pointer p-4 flex justify-center items-center rounded-xl h-[50px]">
                    <GridViewIcon height="25" width="25" color="none" />
                  </div>
                </div>
              </div>

              {newRouteFormat?.length !== 0 && (
                <Button
                  icon={AddRouteIcon2}
                  onClick={() => handleCreateRoute()}
                  className="mb-8 w-fit  py-3 "
                >
                  Add new route
                </Button>
              )}
            </div>
          </div>
          <ScrollArea className="no-scrollbar overflow-y-auto h-screen  px-2  mt-2 ">
            <div
              className={`space-y-3 mt-3 h-full ${
                showAllRoutes
                  ? 'space-y-6 flex flex-col  transition-all duration-300'
                  : 'grid grid-cols-3 gap-5'
              } `}
            > 
              {newRouteFormat?.length !== 0 && showAllRoutes ? (
                newRouteFormat?.map((route: RoutePlanningType, index) => {
                // newRouteFormat?.slice(0, 3).map((route: RoutePlanningType, index) => {

                console.log(route, "././..")

                  // const sumTime = route?.roadItems?.reduce((acc, current) => {
                  //   return acc + current?.taskIds?.reduce((acc2, current2) => {
                  //     return acc2 + current2?.id?.time;
                  //   }, 0);
                  // }, 0);

                  const sumTime = route?.roadItems?.reduce((acc, current) => {
                    return acc + current?.taskIds?.reduce((acc2, current2) => {
                      return acc2 + current2.id?.time;
                    }, 0);
                  }, 0);

                  console.log(sumTime, "kkkk")

                  const finalTimeForRout = convertMinutesToHoursAndMinutes(sumTime as number)
                  return (
                  <div
                    className="last:pb-[40px]"
                    key={index}
                    onClick={() => {
                      dispatch(selectedRoute({ selectedRouteId: route?._id }));
                    }}
                  >
                    <RouteCard
                      activitiesDuration={finalTimeForRout}
                      key={route?._id}
                      id={route?._id as string}
                      numberOfPos={route?.roadItems?.length as number}
                      numberOfTasksCompleted=""
                      profilePicture=""
                      routeName={route?.name as string}
                      salesName={route?.saleRep?.name as string} 
                      roadItems={ route?.roadItems }
                    />
                  </div>
                )})
              ) : newRouteFormat?.length !== 0 && !showAllRoutes ? (
                newRouteFormat?.map((route: any, index) => (
                  <div
                    className="last:pb-[150px]"
                    key={index}
                    onClick={() => {
                      dispatch(selectedRoute({ selectedRouteId: route?.id }));
                    }}
                  >
                    <RouteCard
                      activitiesDuration={route?.finalTimeForRout}
                      key={route?._id}
                      id={route?._id}
                      numberOfPos={route?.roadItems?.length}
                      numberOfTasksCompleted=""
                      profilePicture=""
                      routeName={route?.name}
                      salesName={route?.saleRep?.name}
                    />
                  </div>
                ))
              ) : (
                <EmptyStateRoute />
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
      {/* Display details */}
      {/* Tab Navigator */}
      {/* <div className=" flex flex-col w-full overflow-y-auto  ">
        <div className="h-[250px] p-4 bg-red-300 ">
          <div className="flex flex-col ">
            <div className="w-fit ">
              sdsf
              {/* <Button href={`/point-of-sales/create`} >
    
              </Button> 
            </div>
          </div>
        </div>
        <ScrollArea className=" overflow-y-auto px-2 py-4 mt-2 ">
          <div
            className={`space-y-3 mt-3 ${
              showAllRoutes
                ? 'space-y-6 flex flex-col '
                : 'grid grid-cols-3 gap-5'
            } `}
          >
            {routes?.length !== 0 && showAllRoutes ? (
              routes?.slice(0, 3).map((route: any, index) => (
                <div
                  key={index}
                  onClick={() => {
                    dispatch(selectedRoute({ selectedRouteId: route?.id }));
                  }}
                >
                  <RouteCard
                    activitiesDuration={route?.activitiesDuration}
                    key={route?.id}
                    id={route?.id}
                    numberOfPos={route?.pointOfSales?.length}
                    numberOfTasksCompleted=""
                    profilePicture=""
                    routeName={route?.routeName}
                    salesName={route?.salesRepresentative}
                  />
                </div>
              ))
            ) : routes?.length !== 0 && !showAllRoutes ? (
              routes?.map((route: any, index) => (
                <div
                  key={index}
                  onClick={() => {
                    dispatch(selectedRoute({ selectedRouteId: route?.id }));
                  }}
                >
                  <RouteCard
                    activitiesDuration={route?.activitiesDuration}
                    key={route?.id}
                    id={route?.id}
                    numberOfPos={route?.pointOfSales?.length}
                    numberOfTasksCompleted=""
                    profilePicture=""
                    routeName={route?.routeName}
                    salesName={route?.salesRepresentative}
                  />
                </div>
              ))
            ) : (
              <EmptyStateRoute />
            )}
          </div>
        </ScrollArea>
      </div> */}
    </>
  );
};

export default RoutePreparation;


















































































// 'use client';
// import React, { useEffect, useState } from 'react';

// import EmptyStateRoute from '@/app/common/components/route-planning/empty-state-route/EmptyStateRoute';
// import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
// import RouteCard from '@/app/common/components/route-planning/route-card/RouteCard';
// import AddRouteIcon from '../../../../public/icons/addRouteIcon.svg';
// import AddRouteIcon2 from '../../../../public/images/truck.svg';
// import filter from '../../../../public/images/Button (1).svg';
// import displayAll from '../../../../public/images/Button.svg';
// import route from '../../../../public/images/routing.svg';
// import hiddeAll from '../../../../public/images/Button (2).svg';
// import search from '../../../../public/images/search-normal (1).svg';

// import { Button } from '@/app/common/components/button/Button';
// import { useRouter } from 'next/navigation';
// import {
//   createRoute,
//   displayAllRoutes,
//   displayPOSMap,
//   selectedRoute,
//   toggleMaps,
// } from '@/redux/features/route-planning-slice';
// import Image from 'next/image';
// import InputField from '@/app/common/components/forms/text-field/InputField';
// import CreateRouteModal from '@/app/common/components/route-planning/modals/CreateRouteModal';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import {
//   FilterIcon,
//   GridViewIcon,
//   SearchIcon,
// } from '@/app/common/components/svgs/SvgsIcons';
// import { useHeaderTitle } from '@/app/hooks/useHeaderTitle';
// import { setTitle } from '@/app/common/components/header/slice/header-title-slice';

// const RoutePreparation = () => {
//   /** Set Header Title Depending on the Module you are */
//   const { dispatch, headerTitleState } = useHeaderTitle();
//   useEffect(() => {
//     dispatch(setTitle('Route planning'));

//     return () => {
//       dispatch(
//         setTitle('')
//       ); /** Just set the name of header to empty to remote if went changing page  */
//     };
//   }, [dispatch]);

//   /** Just set the name header you want to */

//   const { routes } = useRoutePlanning();
//   const { toggleMapsValue, showAllRoutes } = useRoutePlanning();
//   const { push } = useRouter();

//   const handleCreateRoute = () => {
//     dispatch(createRoute({}));
//     // dispatch(displayAllRoutes({ showAllRoutes: false }));
//     // dispatch(toggleMaps({ toggle: false }));
//     // dispatch(displayPOSMap({ posMapDisplayState: true }));
//     push('/route-preparation/create');
//   };

//   useEffect(() => {
//     dispatch(displayAllRoutes({ showAllRoutes: true }));
//     dispatch(toggleMaps({ toggle: false }));
//   }, []);

//   // 6639b018d26be58b5f26c8ae

//   return (
//     <>
//       <div className="px-5 flex ">
//         <div className=" flex flex-col w-full  h-[calc(100vh-100px)] overflow-y-auto  ">
//           <div className="h-[130px] mb-3">
//             <div className="flex flex-col">
//               <div className="flex w-full gap-2">
//                 <div className="flex w-full flex-row items-center gap-3">
//                   <InputField
//                     svg={<SearchIcon height="30" width="30" color="none" />}
//                     name="name"
//                     placeholder="Search Point of Sales"
//                   />
//                   <div className="bg-bgColorDark cursor-pointer p-4 flex justify-center items-center rounded-xl h-[50px]">
//                     <FilterIcon height="25" width="25" color="none" />
//                   </div>
//                   <div className="bg-bgColorDark cursor-pointer p-4 flex justify-center items-center rounded-xl h-[50px]">
//                     <GridViewIcon height="25" width="25" color="none" />
//                   </div>
//                 </div>
//               </div>

//               {routes?.length !== 0 && (
//                 <Button
//                   icon={AddRouteIcon2}
//                   onClick={() => handleCreateRoute()}
//                   className="mb-8 w-fit  py-3 "
//                 >
//                   Add new route
//                 </Button>
//               )}
//             </div>
//           </div>
//           <ScrollArea className="no-scrollbar overflow-y-auto h-screen  px-2  mt-2 ">
//             <div
//               className={`space-y-3 mt-3 h-full ${
//                 showAllRoutes
//                   ? 'space-y-6 flex flex-col  transition-all duration-300'
//                   : 'grid grid-cols-3 gap-5'
//               } `}
//             >
//               {routes?.length !== 0 && showAllRoutes ? (
//                 routes?.slice(0, 3).map((route: any, index) => (
//                   <div
//                     className="last:pb-[40px]"
//                     key={index}
//                     onClick={() => {
//                       dispatch(selectedRoute({ selectedRouteId: route?.id }));
//                     }}
//                   >
//                     <RouteCard
//                       activitiesDuration={route?.activitiesDuration}
//                       key={route?.id}
//                       id={route?.id}
//                       numberOfPos={route?.pointOfSales?.length}
//                       numberOfTasksCompleted=""
//                       profilePicture=""
//                       routeName={route?.routeName}
//                       salesName={route?.salesRepresentative}
//                     />
//                   </div>
//                 ))
//               ) : routes?.length !== 0 && !showAllRoutes ? (
//                 routes?.map((route: any, index) => (
//                   <div
//                     className="last:pb-[150px]"
//                     key={index}
//                     onClick={() => {
//                       dispatch(selectedRoute({ selectedRouteId: route?.id }));
//                     }}
//                   >
//                     <RouteCard
//                       activitiesDuration={route?.activitiesDuration}
//                       key={route?.id}
//                       id={route?.id}
//                       numberOfPos={route?.pointOfSales?.length}
//                       numberOfTasksCompleted=""
//                       profilePicture=""
//                       routeName={route?.routeName}
//                       salesName={route?.salesRepresentative}
//                     />
//                   </div>
//                 ))
//               ) : (
//                 <EmptyStateRoute />
//               )}
//             </div>
//           </ScrollArea>
//         </div>
//       </div>
//       {/* Display details */}
//       {/* Tab Navigator */}
//       {/* <div className=" flex flex-col w-full overflow-y-auto  ">
//         <div className="h-[250px] p-4 bg-red-300 ">
//           <div className="flex flex-col ">
//             <div className="w-fit ">
//               sdsf
//               {/* <Button href={`/point-of-sales/create`} >
    
//               </Button> 
//             </div>
//           </div>
//         </div>
//         <ScrollArea className=" overflow-y-auto px-2 py-4 mt-2 ">
//           <div
//             className={`space-y-3 mt-3 ${
//               showAllRoutes
//                 ? 'space-y-6 flex flex-col '
//                 : 'grid grid-cols-3 gap-5'
//             } `}
//           >
//             {routes?.length !== 0 && showAllRoutes ? (
//               routes?.slice(0, 3).map((route: any, index) => (
//                 <div
//                   key={index}
//                   onClick={() => {
//                     dispatch(selectedRoute({ selectedRouteId: route?.id }));
//                   }}
//                 >
//                   <RouteCard
//                     activitiesDuration={route?.activitiesDuration}
//                     key={route?.id}
//                     id={route?.id}
//                     numberOfPos={route?.pointOfSales?.length}
//                     numberOfTasksCompleted=""
//                     profilePicture=""
//                     routeName={route?.routeName}
//                     salesName={route?.salesRepresentative}
//                   />
//                 </div>
//               ))
//             ) : routes?.length !== 0 && !showAllRoutes ? (
//               routes?.map((route: any, index) => (
//                 <div
//                   key={index}
//                   onClick={() => {
//                     dispatch(selectedRoute({ selectedRouteId: route?.id }));
//                   }}
//                 >
//                   <RouteCard
//                     activitiesDuration={route?.activitiesDuration}
//                     key={route?.id}
//                     id={route?.id}
//                     numberOfPos={route?.pointOfSales?.length}
//                     numberOfTasksCompleted=""
//                     profilePicture=""
//                     routeName={route?.routeName}
//                     salesName={route?.salesRepresentative}
//                   />
//                 </div>
//               ))
//             ) : (
//               <EmptyStateRoute />
//             )}
//           </div>
//         </ScrollArea>
//       </div> */}
//     </>
//   );
// };

// export default RoutePreparation;
