import React, { ChangeEvent, useEffect, useState } from 'react';
import InputField from '../../text-field/InputField';
import FormRow from './form-row/FormRow';
import SelectField from '../../select-field/SelectField';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { ActivityFormProps, ActivityFormValues, ActivityFormValuesFrontEnd } from './AddActivityItemForm';
// import TextArea from '../../text-area/TextArea';
import { Button } from '../../../button/Button';
// import { channelClusters } from '@/utils/channelCluster';
import { useSettings } from '@/app/hooks/useSettings';
import { createActivity, createLocalActivities, editLocalActivity } from '@/redux/features/activities-slice';
// import { extractNames } from '../../utils';
import { useMutation } from 'react-query';
import { BASE_URL } from '@/utils/constants';
import { makePostReques } from '@/utils/makePostReq';
// import { ICategory, IChannelCluster, TradeChannel } from '@/redux/features/types';
// import { generateId } from '@/utils/generateRandomID';

import ReactFlow, {
  MarkerType, 
} from 'reactflow';
import { ActivityFormProps, ActivityFormValuesFrontEnd } from './addActivityForm';
import { useActivities } from '@/app/hooks/useActivities';
import { useRouter } from 'next/navigation';
import { useUserInfo } from '@/app/hooks/useUserInfo';

const AddActivityItemForm: React.FC<ActivityFormProps> = ({ handleCloseModal, shouldUpdate, dataToUpdate, id }) => {
  const { register, handleSubmit, watch, reset, setValue } = useForm<ActivityFormValuesFrontEnd>(); 

  // WE NEED ONLY TO GET ALL CHANNEL CLUSTER AND WE CAN FILTER ALL EXITING TRADE CHANNELS AND CATEGORIES
  const { dispatch, selectedCatID, selectedTCID, selectedCCID, priorities } = useSettings();
  const { selectedActivity } = useActivities (); 

  console.log(selectedCatID, selectedTCID, selectedCCID, selectedActivity, "selectedCatID, selectedTCID, selectedCCID, selectedActivity")

  useEffect (() => {
    // IF SHOULD UPDATE IS TRUE THEN SET THE VALUE (THIS IS USED ONLY FOR UPDATE)
    if (shouldUpdate) {
      setValue ("name", dataToUpdate?.name!);
      setValue ("points", dataToUpdate?.points);
      setValue ("priority", dataToUpdate?.priority!);
      setValue ("time", dataToUpdate?.time);
      setValue ("time", dataToUpdate?.duration);
      setValue ("frequency", dataToUpdate?.frequency!);
      setValue ("description", dataToUpdate?.description!);
      setValue ("channelCluster", dataToUpdate?.channelCluster);
      setValue ("category", dataToUpdate?.category);
      setValue ("tradeChannel", dataToUpdate?.tradeChannel);
    } 
  }, [])

  const returnBack = useRouter ()

  // const mutation = useMutation({
  //   mutationFn: (newPost) => {
  //     return makePostReques (`${ BASE_URL }/pos`, newPost)
  //   },
  // })

  const { decodeToken } = useUserInfo ()

  const onSubmit: SubmitHandler<ActivityFormValuesFrontEnd> = async (data) => {

    if (shouldUpdate) {
      console.log(dataToUpdate, "dataToUpdatedataToUpdate")
      const finalValue = {
        id: id,
        name: data.name, 
        channelClust: data?.channelCluster, 
        tradeChannel: data?.tradeChannel, 
        duration: data?.duration, 
        frequency: data?.frequency, 
        category: data?.category, 
        priority: data?.priority, 
        description: data?.description, 
        id_company: decodeToken?.user?.id_company[0]?._id, 
        type: "activityCreation", 
        points: data?.points, 
      }
      console.log(finalValue, "edit value before disapatching")
      dispatch(editLocalActivity({finalValue}))
    } else {
      const newDataActivityItems = {
        activitie: selectedActivity,      
        channelClusters: selectedCCID, 
        tradeChannels: selectedTCID, 
        categories: selectedCatID, 
        time: data?.duration, 
        frequency: data?.frequency, 
        priority: data?.priority, 
        id_company: decodeToken?.user?.id_company[0]?._id, 
        type: "activityCreation", 
        points: data?.points, 
      }

      console.log(newDataActivityItems, "newDataActivityItems")

      const resultActivityItem = await makePostReques (`${ BASE_URL }/activitiesItem`, newDataActivityItems)
    }

    reset ();
    returnBack.back()
    return; 
    dispatch(createActivity(data));
    handleCloseModal();
  };


  return (
    <form className=" rounded-lg " onSubmit={handleSubmit(onSubmit)}>
      
      <FormRow>
        <h1>Priority</h1>
        <SelectField
          name="priority"
          options={ priorities }
          register={register('priority')}
        />
      </FormRow>

      <FormRow>
        <h1>Time</h1>
        <InputField
          type="number"
          placeholder="In minutes"
          register={register('duration', { required: true })}
        />
      </FormRow>

      <FormRow>
        <h1>Frequency</h1>
        <InputField
          type="number"
          placeholder="eg: 4"
          register={register('frequency', { required: true })}
        />
      </FormRow>

      <FormRow>
        <h1>Points</h1>
        <InputField
          type="number"
          placeholder="eg: 4"
          register={register('points', { required: true })}
        />
      </FormRow>

      <div className="mt-8">
        <Button>Create activity</Button>
      </div>
      
    </form>
  );
};

export default AddActivityItemForm;
