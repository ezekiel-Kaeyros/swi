'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';

import { AddPointOfSalesFormValues } from './addPointOfSalesForm';
import InputField from '../text-field/InputField';

import ShopIcon from '../../../../../../public/icons/pointOfSale.svg';
import UserIcon from '../../../../../../public/icons/userIcon.svg';
import ContactIcon from '../../../../../../public/icons/contactIcon.svg';
import ShopLocationIcon from '../../../../../../public/icons/shopLocationIcon.svg';
import PositionIcon from '../../../../../../public/icons/positionIcon.svg';
import LocationIcon from '../../../../../../public/icons/positionIcon.svg';

import { Button } from '../../button/Button';
import FileInput from '../file-input/FileInput';
import { Spinner } from '@nextui-org/react';
import {
  toggleMapView,
  updateSelectedPlace,
} from '@/redux/features/create-point-of-sale-slice';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import AnimateClick from '../../animate-click/AnimateClick';
import SelectField from '../select-field/SelectField';
import { useSettings } from '@/app/hooks/useSettings';
import { makePostReques } from '@/utils/makePostReq';
import { BASE_URL } from '@/utils/constants';
import TextArea from '../text-area/TextArea';
import { useRouter } from 'next/navigation'; 
import { useMutation } from '@tanstack/react-query';
// import { useMutation } from "react-query";

const AddPointOfSalesForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const router = useRouter ()

  // WE NEED ONLY TO GET ALL CHANNEL CLUSTER AND WE CAN FILTER ALL EXITING TRADE CHANNELS AND CATEGORIES
  const { channelClusters, tradeChannels, channeClusterForSelectField, extractedtArrayfromChannelCluster } = useSettings();
  const [ fillingTradeChannel, setFillingTradeChannel ] = useState<any> ([]); 
  const [ fillingCategory, setFillingCategory ] = useState<any> ([]); 

  const selectedPlace = useSelector(
    (state: RootState) => state.pointOfSaleViewReducer.selectedPlace
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<AddPointOfSalesFormValues>({
    mode: 'onChange' || 'onBlur' || 'onSubmit',
  });

  // THIS IS WHEN WE CLICK ON CHANNELS CLUSTER
  const deriveTradeChannelFromSelectedCC = (e: any) => {
    const selectedTradeChannel = channeClusterForSelectField.find((tradeChannel: any) => {
      if (e.target.value == tradeChannel?.id) {
        return tradeChannel.tradeChannelContent
      }
    })
    setFillingTradeChannel (selectedTradeChannel?.tradeChannelContent?.map(({ _id,...rest }: any) => ({ ...rest, id:_id })))
    setFillingCategory ([])
    return selectedTradeChannel
  }

  // THIS IS WHEN WE CLICK ON TRADE CHANNELS
  const deriveCatergoryFromTradeChannel = (e: any) => {
    const selectedCategory = fillingTradeChannel.find((categor: any) => {
      if (e.target.value == categor?.id) {
        return categor.categories_id
      }
    })
    const transformedCategory = selectedCategory?.categories_id.map(({ _id,...rest }: any) => ({ ...rest, id:_id })); 
    setFillingCategory (transformedCategory)
    return transformedCategory
  }

  useEffect(() => {
    if (selectedPlace && selectedPlace?.latitude && selectedPlace.longitude) {
      selectedPlace.latitude &&
        setValue('position.lat', selectedPlace.latitude);
      selectedPlace.longitude &&
        setValue('position.lng', selectedPlace.longitude);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlace]);

  const success = (position: any) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    dispatch(updateSelectedPlace({
      latitude: latitude, 
      longitude: longitude
    }))
    handleGetLocationClick ()
    // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  const error = () => {
      console.log("Unable to retrieve your location");
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  const handleGetLocationClick = () => {
    dispatch(toggleMapView({ toggle: true }));
  };

  // const mutation = useMutation( async (newPost) =>
  //   // axios.post("https://jsonplaceholder.typicode.com/posts", newPost), 
  //   await makePostReques (`${ BASE_URL }/pos`, newPost)
  // );

  const mutation = useMutation({
    mutationFn: (newPost) => {
      return makePostReques (`${ BASE_URL }/pos`, newPost)
    },
  })

  // Triggers when submitting
  const onSubmit: SubmitHandler<AddPointOfSalesFormValues> = async (data) => {
    let firstStat: string = '50 000 XAF';
    let secondStat: string = '5%';

    const finalPosData = {
      name: data.name,
      owner: data.shopOwner,
      phone: data.contact,
      location: data.shopLocation,
      latitude: data.position.lat.toString(),
      longitude: data.position.lng.toString(),
      channelCluster: data.channelCluster, //
      tradeChannel: data.tradeChannel, //
      category: data.category, //
      description: data.description,
      city: data.city, 

      firstStat: firstStat, // coming soon
      secondStat: secondStat, // conming soon
      totalActivitiesDuration: data.totalActivitiesDuration, //
      // image: data.image, // will be added later
    }

    
    console.log("finalPosData...:", finalPosData)
    // return
    mutation.mutate(finalPosData as any)
    // const result = await makePostReques (`${ BASE_URL }/pos`, finalPosData)
    reset();
    router.push ("/point-of-sales")
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Toaster position="top-center" reverseOrder={false} />

      <div>
        <InputField
          register={register('name', { required: true, minLength: 3 })}
          icon={ShopIcon}
          name="name"
          placeholder="Shop Name"
        />
      </div>
      <p className="mt-1 text-sm text-red-400">
        {errors?.name && <>A minimum of 3 characters is required</>}
      </p>
      <div>
        <InputField
          icon={UserIcon}
          register={register('shopOwner', { required: true, minLength: 3 })}
          name="shopOwner"
          placeholder="Shop Owner"
        />
      </div>
      <p className="mt-1 text-sm text-red-400">
        {errors?.shopOwner && <>A minimum of 3 characters is required</>}
      </p>
      <div>
        <InputField
          icon={ContactIcon}
          name="contact"
          type="number"
          register={register('contact', {
            required: true,
            pattern: /^6(9|7|6|5|2|8)[0-9]{7}$/,
          })}
          placeholder="Contact Details"
        />
      </div>
      <p className="mt-1 text-sm text-red-400">
        {errors?.contact && <>contact is not valid</>}
      </p>
      {/* Search field */}
      <div className="flex h-fit space-x-5">
        <InputField
          icon={ShopLocationIcon}
          name="ShopLocation"
          placeholder="Shop Location"
          register={register('shopLocation', { required: true })}
        />
        <InputField
          icon={PositionIcon}
          name="city"
          type="text"
          placeholder="City"
          register={register('city')}
        />
      </div>
      {/* This button handles the get location dynamically function */}
      <AnimateClick>
        <div
          className="rounded-md flex items-center bg-buttonPrimary px-3 py-2 w-fit text-sm ml-auto"
          onClick={handleLocationClick}
        >
          <Image className="mr-2" src={LocationIcon} alt="Location icon" />
          Get location
        </div>
      </AnimateClick>

      <div className="flex h-fit space-x-5">
        <InputField
          icon={PositionIcon}
          name="position.lat"
          type="text"
          placeholder="Latitude"
          register={register('position.lat')}
        />
        <InputField
          icon={PositionIcon}
          name="position.lng"
          type="text"
          placeholder="Longitude"
          register={register('position.lng')}
        />
      </div>


      {/* Selecting category */}

      <div className="flex h-fit my-4 space-x-5">
        <div className="w-full">
          <h1>Channel cluster</h1>
          <SelectField
            name="channelCluster"
            options={channeClusterForSelectField}
            register={register('channelCluster', { 
              required: true, 
              onChange(event) {
                deriveTradeChannelFromSelectedCC (event)
              },
            })}
          />
        </div>
        {/* Dynamic select fields */}
        {fillingTradeChannel?.length > 0 && (
          <div className="w-full">
            <h1>Trade channel</h1>
            <SelectField
              name="tradeChannel"
              options={fillingTradeChannel}
              register={register('tradeChannel', { 
                required: true, 
                onChange: (event) => {
                  deriveCatergoryFromTradeChannel (event)
                }
              })}
            />
          </div>
        )}
      </div>
      <div className='h-fit my-4'>
        {fillingCategory?.length > 0 && (
            <div>
              <h1>Category</h1>
              <SelectField
                name="category"
                options={ fillingCategory }
                register={register('category', { required: true })}
              />
            </div>
          )}
      </div>
      <div className='h-fit my-4'>
        <TextArea
          props={register('description')}
          name={'description'}
          placeholder={'Description'}
        />
      </div>
      <div className="my-8">
        <FileInput register={''} name="image" />
      </div>

      <div className="w-full my-8">
        <Button
          disabled={isLoading ? true : false}
          variant={!isValid || isLoading ? 'disabled' : 'default'}
          className="w-full"
        >
          {isLoading ? <Spinner size="sm" color="white" /> : <>Add Location</>}
        </Button>
      </div>
    </form>
  );
};

export default AddPointOfSalesForm;























































// 'use client';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import { Toaster } from 'react-hot-toast';

// import { AddPointOfSalesFormValues } from './addPointOfSalesForm';
// import InputField from '../text-field/InputField';

// import ShopIcon from '../../../../../../public/icons/pointOfSale.svg';
// import UserIcon from '../../../../../../public/icons/userIcon.svg';
// import ContactIcon from '../../../../../../public/icons/contactIcon.svg';
// import ShopLocationIcon from '../../../../../../public/icons/shopLocationIcon.svg';
// import PositionIcon from '../../../../../../public/icons/positionIcon.svg';
// import LocationIcon from '../../../../../../public/icons/positionIcon.svg';

// import { Button } from '../../button/Button';
// import FileInput from '../file-input/FileInput';
// import { Spinner } from '@nextui-org/react';
// import {
//   createPointOfSales,
//   toggleMapView,
//   updateSelectedPlace,
// } from '@/redux/features/create-point-of-sale-slice';
// import { RootState } from '@/redux/store';
// import Image from 'next/image';
// import AnimateClick from '../../animate-click/AnimateClick';
// import SelectField from '../select-field/SelectField';
// import { extractNames, getIdsByName } from '../utils';
// import { useSettings } from '@/app/hooks/useSettings';
// import { makePostReques } from '@/utils/makePostReq';
// import { BASE_URL } from '@/utils/constants';
// import TextArea from '../text-area/TextArea';
// import { IChannelCluster } from '@/redux/features/types';

// const AddPointOfSalesForm = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const dispatch = useDispatch();

//   // WE NEED ONLY TO GET ALL CHANNEL CLUSTER AND WE CAN FILTER ALL EXITING TRADE CHANNELS AND CATEGORIES
//   const { channelClusters, tradeChannels, channeClusterForSelectField, extractedtArrayfromChannelCluster } = useSettings();
//   const [ fillingTradeChannel, setFillingTradeChannel ] = useState<any> ([]); 
//   const [ fillingCategory, setFillingCategory ] = useState<any> ([]); 

//   // console.log('This is a channel cluster', channelClusters)
//   // console.log('This is a trade channel', tradeChannels)

//   // TRANSFOR CHANNEL CLUSTER FOR SELECT ELEMENTS
//   // const channeClusterForSelectField = channelClusters.map((channelCluster: IChannelCluster) => {
//   //   return {
//   //     id: channelCluster?._id, 
//   //     name: channelCluster?.name, 
//   //     tradeChannelContent: channelCluster?.tradeChannel, 
//   //   }
//   // })

//   // console.log("channeClusterForSelectField--------", channeClusterForSelectField, extractedtArrayfromChannelCluster)

//   const selectedPlace = useSelector(
//     (state: RootState) => state.pointOfSaleViewReducer.selectedPlace
//   );

//   // console.log("><><><", selectedPlace)

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     reset,
//     watch,
//     formState: { errors, isValid },
//   } = useForm<AddPointOfSalesFormValues>({
//     mode: 'onChange' || 'onBlur' || 'onSubmit',
//   });

//   // Listening to fields
//   // let channelCluster: string | number = watch('channelCluster');
//   // let tradeChannel: string | number = watch('tradeChannel');

//   // Finding the selected channel cluster
//   // const activeChannelCluster = channelClusters?.find(
//   //   (value) =>
//   //     value?.name?.toLowerCase() === channelCluster?.toString().toLowerCase()
//   // );

  
//   const deriveTradeChannelFromSelectedCC = (e: any) => {
//     // console.log(e.target.value, "inside inside")
//     const selectedTradeChannel = channeClusterForSelectField.find((tradeChannel: any) => {
//       // console.log(tradeChannel, "[[]]")
//       if (e.target.value == tradeChannel?.id) {
//         // console.log(tradeChannel.tradeChannelContent, "???>>>???>>>???")
//         return tradeChannel.tradeChannelContent
//       }
//       // return tradeChannel
//     })
//     // console.log("selectedTradeChannel_", selectedTradeChannel)
//     setFillingTradeChannel (selectedTradeChannel?.tradeChannelContent?.map(({ _id,...rest }: any) => ({ ...rest, id:_id })))
//     setFillingCategory ([])
//     // console.log("ddddddddddddd", selectedTradeChannel?.tradeChannelContent?.map(({ _id,...rest }: any) => ({ ...rest, id:_id })))
//     return selectedTradeChannel
//     // channeClusterForSelectField?.find
//   }

//   const deriveCatergoryFromTradeChannel = (e: any) => {
//     // console.log(e.target.value, "inside inside")
//     const selectedCategory = fillingTradeChannel.find((categor: any) => {
//       // console.log(categor, "[[]]")
//       if (e.target.value == categor?.id) {
//         console.log(categor.categories_id, "???>>>???>>>???")
//         return categor.categories_id
//       }
//       // return tradeChannel
//     })
//     // console.log("selectedTradeChannel_", selectedCategory, selectedCategory?.categories_id)

//     const transformedCategory = selectedCategory?.categories_id.map(({ _id,...rest }: any) => ({ ...rest, id:_id }))

//     // console.log("transformedCategorytransformedCategory: ", transformedCategory)

//     setFillingCategory (transformedCategory)
//     return transformedCategory
//     // channeClusterForSelectField?.find
//   }

//   // console.log("fillingTradeChannelfillingTradeChannel", fillingTradeChannel)
  
//   // console.log('active Channel Cluster', activeChannelCluster)
//   // Finding the selected trade channel
//   // const activeTradeChannel = activeChannelCluster?.tradeChannel?.find(
//   //   (value) =>
//   //     value?.title?.toLowerCase() === tradeChannel?.toString()?.toLowerCase()
//   // );

//   useEffect(() => {
//     if (selectedPlace && selectedPlace?.latitude && selectedPlace.longitude) {
//       selectedPlace.latitude &&
//         setValue('position.lat', selectedPlace.latitude);
//       selectedPlace.longitude &&
//         setValue('position.lng', selectedPlace.longitude);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedPlace]);

//   function success(position: any) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     dispatch(updateSelectedPlace({
//       latitude: latitude, 
//       longitude: longitude
//     }))
//     handleGetLocationClick ()
//     // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//   }

//   function error() {
//       console.log("Unable to retrieve your location");
//   }

//   function handleLocationClick() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(success, error);
//     } else {
//       console.log("Geolocation not supported");
//     }
//   }

//   const handleGetLocationClick = () => {
//     dispatch(toggleMapView({ toggle: true }));
//   };

//   // Triggers when submitting
//   const onSubmit: SubmitHandler<AddPointOfSalesFormValues> = async (data) => {
//     let firstStat: string = '50 000 XAF';
//     let secondStat: string = '5%';

//     console.log('data', data);

//     // let channelClusterFromForm = data?.channelCluster.toString();
//     // let tradeChannelFromForm = data?.tradeChannel.toString();
//     // let categoryFromForm = data?.category?.toString() || '';

//     // let activeChannelCluster = channelClusters?.filter(
//     //   (value) =>
//     //     value?.name?.toLowerCase() === channelCluster?.toString().toLowerCase()
//     // );

//     // // Finding the selected trade channel
//     // let activeTradeChannel = activeChannelCluster[0].tradeChannel?.filter(
//     //   (value) =>
//     //     value?.title?.toLowerCase() ===
//     //     tradeChannelFromForm?.toString()?.toLowerCase()
//     // );

//     // let channelClusterToBeSubmitted = getIdsByName(
//     //   channelClusters,
//     //   'name',
//     //   channelClusterFromForm
//     // );
//     // console.log('Channel cluster to be submitted', channelClusterToBeSubmitted)

//     // let newData = { ...data, channelCluster: channelClusterToBeSubmitted, markerColor: activeChannelCluster[0].color?.hex };

//     // console.log('new data', newData);
//     // console.log('Active cluster again', activeChannelCluster);

//     const finalPosData = {
//       name: data.name,
//       owner: data.shopOwner,
//       phone: data.contact,
//       location: data.shopLocation,
//       latitude: data.position.lng.toString(),
//       longitude: data.position.lat.toString(),
//       channelCluster: data.channelCluster, //
//       tradeChannel: data.tradeChannel, //
//       category: data.category, //
//       description: data.description,
//       city: data.city, 

//       firstStat: firstStat, // coming soon
//       secondStat: secondStat, // conming soon
//       totalActivitiesDuration: data.totalActivitiesDuration, //
//       // image: data.image, // will be added later
//     }

//     console.log("finalPosData...:", finalPosData)
//     // return

//     const result = await makePostReques (`${ BASE_URL }/pos`, finalPosData)

//     // dispatch(
//     //   createPointOfSales({
//     //     newPointOfSales: { ...newData, firstStat, secondStat },
//     //   })
//     // );

//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Toaster position="top-center" reverseOrder={false} />

//       <div>
//         <InputField
//           register={register('name', { required: true, minLength: 3 })}
//           icon={ShopIcon}
//           name="name"
//           placeholder="Shop Name"
//         />
//       </div>
//       <p className="mt-1 text-sm text-red-400">
//         {errors?.name && <>A minimum of 3 characters is required</>}
//       </p>
//       <div>
//         <InputField
//           icon={UserIcon}
//           register={register('shopOwner', { required: true, minLength: 3 })}
//           name="shopOwner"
//           placeholder="Shop Owner"
//         />
//       </div>
//       <p className="mt-1 text-sm text-red-400">
//         {errors?.shopOwner && <>A minimum of 3 characters is required</>}
//       </p>
//       <div>
//         <InputField
//           icon={ContactIcon}
//           name="contact"
//           type="number"
//           register={register('contact', {
//             required: true,
//             pattern: /^6(9|7|6|5|2|8)[0-9]{7}$/,
//           })}
//           placeholder="Contact Details"
//         />
//       </div>
//       <p className="mt-1 text-sm text-red-400">
//         {errors?.contact && <>contact is not valid</>}
//       </p>
//       {/* Search field */}
//       <div className="flex h-fit space-x-5">
//         <InputField
//           icon={ShopLocationIcon}
//           name="ShopLocation"
//           placeholder="Shop Location"
//           register={register('shopLocation', { required: true })}
//         />
//         <InputField
//           icon={PositionIcon}
//           name="city"
//           type="text"
//           placeholder="City"
//           // value={`${selectedPlace.latitude}`}
//           register={register('city')}
//         />
//       </div>
//       {/* This button handles the get location dynamically function */}
//       <AnimateClick>
//         <div
//           className="rounded-md flex items-center bg-buttonPrimary px-3 py-2 w-fit text-sm ml-auto"
//           onClick={handleLocationClick}
//         >
//           <Image className="mr-2" src={LocationIcon} alt="Location icon" />
//           Get location
//         </div>
//       </AnimateClick>
//       <div className="flex h-fit space-x-5">
//         { selectedPlace.latitude }
//         { selectedPlace.longitude }
//       </div>
//       <div className="flex h-fit space-x-5">
//         <InputField
//           icon={PositionIcon}
//           name="position.lat"
//           type="text"
//           placeholder="Latitude"
//           // value={`${selectedPlace.latitude}`}
//           register={register('position.lat')}
//         />

//         <InputField
//           icon={PositionIcon}
//           name="longitude"
//           type="text"
//           placeholder="Longitude"
//           register={register('position.lng')}
//         />
//       </div>

      


//       {/* Selecting category */}

//       <div className="flex h-fit my-4 space-x-5">
//         <div className="w-full">
//           <h1>Channel cluster</h1>
//           <SelectField
//             name="channelCluster"
//             // options={extractNames(channelClusters)}
//             options={channeClusterForSelectField}
//             register={register('channelCluster', { 
//               required: true, 
//               onChange(event) {
//                 deriveTradeChannelFromSelectedCC (event)
//               },
//             })}
//           />
//         </div>
//         {/* Dynamic select fields */}

//         {fillingTradeChannel?.length > 0 && (
//           <div className="w-full">
//             <h1>Trade channel</h1>
//             <SelectField
//               name="tradeChannel"
//               options={fillingTradeChannel}
//               register={register('tradeChannel', { 
//                 required: true, 
//                 onChange: (event) => {
//                   console.log("11111111111111111111111111111111111111", event.target.value, fillingTradeChannel)
//                   deriveCatergoryFromTradeChannel (event)
//                   // fillSelect (e, "city", provincesData, setValue); 
//                 }
//               })}
//             />
//           </div>
//         )}
//       </div>
//       <div className='h-fit my-4'>
//         {fillingCategory?.length > 0 && (
//             <div>
//               <h1>Category</h1>
//               <SelectField
//                 name="category"
//                 options={ fillingCategory }
//                 register={register('category', { required: true })}
//               />
//             </div>
//           )}
//       </div>
//       <div className='h-fit my-4'>
//         <TextArea
//           props={register('description')}
//           name={'description'}
//           placeholder={'Description'}
//         />
//       </div>
//       <div className="my-8">
//         <FileInput register={''} name="image" />
//       </div>

//       <div className="w-full my-8">
//         <Button
//           disabled={isLoading ? true : false}
//           variant={!isValid || isLoading ? 'disabled' : 'default'}
//           className="w-full"
//         >
//           {isLoading ? <Spinner size="sm" color="white" /> : <>Add Location</>}
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default AddPointOfSalesForm;

