'use client';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/css';

import {
  AddChannelClusterFormProps,
  AddChannelClusterFormValues,
} from './addChannelClusterForm';
import InputField from '../../text-field/InputField';
import { Button } from '../../../button/Button';
import { useSettings } from '@/app/hooks/useSettings';
import { createChannelCluster, createLocalChannelCluster, editLocalChannelCluster } from '@/redux/features/channel-cluster-slice';

const AddChannelClusterForm: React.FC<AddChannelClusterFormProps> = ({
  handleCloseModal, 
  channelClusterIdForUpdate, 
  title, 
  shouldUpdate, 
  existingData, 
}) => {
  const [color, setColor] = useColor('#414C50');

  console.log(channelClusterIdForUpdate, "channelClusterIdForUpdate----")

  const {
    handleSubmit,
    register, 
    setValue, 
    formState: { errors },
  } = useForm<AddChannelClusterFormValues>();

  const { dispatch, locaChannelClusters } = useSettings(); 

  useEffect (() => {
    // IF SHOULD UPDATE IS TRUE THEN SET THE VALUE (THIS IS USED ONLY FOR UPDATE)
    if (shouldUpdate) setValue ("name", existingData as string); 
  }, [])

  const onSubmit: SubmitHandler<AddChannelClusterFormValues> = async (data) => {
    let channelCluster = { 
      ...data, 
      color, 
      position: {
        x: 10, 
        y: 110
      }, 
      type: 'channelClusterCreation', 
      trade_channels_id: [1], 
    };

    // THEN DISPATCH THE ACTION TO THE STATE
    dispatch(createChannelCluster(channelCluster)); 
    if (shouldUpdate) {
      channelCluster = {
        ...channelCluster, 
        id: channelClusterIdForUpdate
      }
      dispatch(editLocalChannelCluster(channelCluster)); 
    } else {
      dispatch(createLocalChannelCluster(channelCluster)); 
    }

    // CLOSE MODAL
    handleCloseModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <h1>Name</h1>
        <div className="mt-1">
          <InputField
            name="channelClusterName"
            register={register('name', { required: true })}
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex mb-4 items-center justify-between">
          <h1 className="font-bold">Choose a color</h1>

          <div
            className={`w-7 h-7 rounded-full`}
            style={{ backgroundColor: `${color.hex}` }}
          />
        </div>
        <div>
          <ColorPicker color={color} onChange={setColor} />
        </div>
      </div>

      <div className="my-4">
        <Button
          type="submit"
          variant={errors.name ? 'disabled' : 'default'}
          disabled={errors.name ? true : false}
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default AddChannelClusterForm;
