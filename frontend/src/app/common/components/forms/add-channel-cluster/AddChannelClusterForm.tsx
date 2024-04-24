'use client';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/css';

import {
  AddChannelClusterFormProps,
  AddChannelClusterFormValues,
} from './addChannelClusterForm';
import InputField from '../text-field/InputField';
import { Button } from '../../button/Button';
import { useSettings } from '@/app/hooks/useSettings';
import { createChannelCluster } from '@/redux/features/channel-cluster-slice';
import { BASE_URL } from '@/utils/constants';

import { makePostReques, makePutReques } from '@/utils/makePostReq';

const AddChannelClusterForm: React.FC<AddChannelClusterFormProps> = ({
  handleCloseModal, 
  channelClusterIdForUpdate, 
  title, 
  shouldUpdate, 
  existingData, 
}) => {
  const [color, setColor] = useColor('#414C50');

  const {
    handleSubmit,
    register, 
    setValue, 
    formState: { errors },
  } = useForm<AddChannelClusterFormValues>();

  const { dispatch, companies } = useSettings(); 

  useEffect (() => {
    // IF SHOULD UPDATE IS TRUE THEN SET THE VALUE (THIS IS USED ONLY FOR UPDATE)
    if (shouldUpdate) setValue ("name", existingData as string); 
  }, [])

  const onSubmit: SubmitHandler<AddChannelClusterFormValues> = async (data) => {
    let channelCluster = { ...data, color };

    // MAKE A PUT REQUEST IF shouldUpdate IS TRUE ELSE DO POST REQUEST
    if (shouldUpdate) {
      const newDataS = {
        name: data.name, 
        id_company: "661d4c7ef54892933566b0be", 
        color: color.hex, 
        id: channelClusterIdForUpdate, 
      }
      const result = await makePutReques (`${ BASE_URL }/channelCluster/${ channelClusterIdForUpdate }`, newDataS)
    } else {
      const newDataS = {
        name: data.name, 
        id_company: "661d4c7ef54892933566b0be", 
        color: color.hex, 
      }
      const result = await makePostReques (`${ BASE_URL }/channelCluster`, newDataS)
    }    

    // THEN DISPATCH THE ACTION TO THE STATE
    dispatch(createChannelCluster(channelCluster)); 

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
