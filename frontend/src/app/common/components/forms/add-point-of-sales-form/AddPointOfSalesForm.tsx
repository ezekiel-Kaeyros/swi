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
  createPointOfSales,
  toggleMapView,
} from '@/redux/features/create-point-of-sale-slice';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import AnimateClick from '../../animate-click/AnimateClick';
import SelectField from '../select-field/SelectField';
import { extractNames, getIdsByName } from '../utils';
import { useSettings } from '@/app/hooks/useSettings';

const AddPointOfSalesForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { channelClusters } = useSettings();

  console.log('This is a channel cluster', channelClusters)

  const selectedPlace = useSelector(
    (state: RootState) => state.pointOfSaleViewReducer.selectedPlace
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<AddPointOfSalesFormValues>({
    mode: 'onChange' || 'onBlur' || 'onSubmit',
  });

  // Listening to fields

  let channelCluster: string | number = watch('channelCluster');
  let tradeChannel: string | number = watch('tradeChannel');

  // Finding the selected channel cluster
  const activeChannelCluster = channelClusters?.find(
    (value) =>
      value?.name?.toLowerCase() === channelCluster?.toString().toLowerCase()
  );
  
  console.log('active Channel Cluster', activeChannelCluster)
  // Finding the selected trade channel
  const activeTradeChannel = activeChannelCluster?.tradeChannel?.find(
    (value) =>
      value?.title?.toLowerCase() === tradeChannel?.toString()?.toLowerCase()
  );

  useEffect(() => {
    if (selectedPlace && selectedPlace?.latitude && selectedPlace.longitude) {
      selectedPlace.latitude &&
        setValue('position.lat', selectedPlace.latitude);
      selectedPlace.longitude &&
        setValue('position.lng', selectedPlace.longitude);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlace]);

  // Triggers when submitting

  const onSubmit: SubmitHandler<AddPointOfSalesFormValues> = (data) => {
    let firstStat: string = '50 000 XAF';
    let secondStat: string = '5%';

    console.log('data', data);

    let channelClusterFromForm = data?.channelCluster.toString();
    let tradeChannelFromForm = data?.tradeChannel.toString();
    let categoryFromForm = data?.category?.toString() || '';

    let activeChannelCluster = channelClusters?.filter(
      (value) =>
        value?.name?.toLowerCase() === channelCluster?.toString().toLowerCase()
    );

    // Finding the selected trade channel
    let activeTradeChannel = activeChannelCluster[0].tradeChannel?.filter(
      (value) =>
        value?.title?.toLowerCase() ===
        tradeChannelFromForm?.toString()?.toLowerCase()
    );

    let channelClusterToBeSubmitted = getIdsByName(
      channelClusters,
      'name',
      channelClusterFromForm
    );
    console.log('Channel cluster to be submitted', channelClusterToBeSubmitted)

    let newData = { ...data, channelCluster: channelClusterToBeSubmitted, markerColor: activeChannelCluster[0].color?.hex };

    console.log('new data', newData);
    console.log('Active cluster again', activeChannelCluster);

    dispatch(
      createPointOfSales({
        newPointOfSales: { ...newData, firstStat, secondStat },
      })
    );

    // reset();
  };

  const handleGetLocationClick = () => {
    dispatch(toggleMapView({ toggle: true }));
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
      <div>
        <InputField
          icon={ShopLocationIcon}
          name="ShopLocation"
          placeholder="Shop Location"
          register={register('shopLocation', { required: true })}
        />
      </div>
      {/* This button handles the get location dynamically function */}
      <AnimateClick>
        <div
          className="rounded-md flex items-center bg-buttonPrimary px-3 py-2 w-fit text-sm ml-auto"
          onClick={handleGetLocationClick}
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
          value={`${selectedPlace.latitude}`}
          register={register('position.lat')}
        />

        <InputField
          icon={PositionIcon}
          name="longitude"
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
            options={extractNames(channelClusters)}
            register={register('channelCluster', { required: true })}
          />
        </div>
        {/* Dynamic select fields */}

        {channelCluster && (
          <div className="w-full">
            <h1>Trade channel</h1>
            <SelectField
              name="tradeChannel"
              options={extractNames(
                activeChannelCluster?.tradeChannel,
                'title'
              )}
              register={register('tradeChannel', { required: true })}
            />
          </div>
        )}
      </div>
      <div>
        {tradeChannel &&
          activeTradeChannel?.content &&
          activeTradeChannel?.content?.length !== 0 && (
            <div>
              <h1>Category</h1>
              <SelectField
                name="category"
                options={extractNames(activeTradeChannel?.content, 'title')}
                register={register('category', { required: true })}
              />
            </div>
          )}
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
