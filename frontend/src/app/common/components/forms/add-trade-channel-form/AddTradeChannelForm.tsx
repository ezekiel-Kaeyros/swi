import React, { useEffect } from 'react';
import FormRow from './form-row/FormRow';
import InputField from '../text-field/InputField';
import { Button } from '../../button/Button';
import {
  AddTradeChannelFormValues,
  AddTradeChannelProps,
} from './addTradeChannel';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSettings } from '@/app/hooks/useSettings';
import { addNewTradeChannel, createLocalTradeChannel, editLocalTradeChannel } from '@/redux/features/channel-cluster-slice';
import { makePostReques } from '@/utils/makePostReq';
import { BASE_URL } from '@/utils/constants';
import { TradeChannel } from '@/redux/features/types';

const AddTradeChannelForm: React.FC<AddTradeChannelProps> = ({
  handleCloseModal,
  channelClusterId,
  title, 
  shouldUpdate, 
  existingData, 
  tradeChannelId, 
  tcID
}) => {
  const { dispatch } = useSettings();

  const { register, handleSubmit, setValue } = useForm<AddTradeChannelFormValues>(); 

  // FILLING INPUTS WITH USER INFO IN CASE OF EDITING USER INFO
  useEffect (() => {
    setValue ("tradeChannelName", existingData as string); 
  }, [])

  const onSubmit: SubmitHandler<AddTradeChannelFormValues> = async (data) => {
    
    // const newData = { ...data, channelClusterId }; 
    // const newDataD = {
    //   name: data.tradeChannelName, 
    //   id_company: "661e46da0c5460e02b3c492b", 
    //   channel_cluster_id: channelClusterId
    // }

    // WE ENABLE BELOW CODE WHEN WE SEND DATA TO SERVER
    // const result = await makePostReques (`${ BASE_URL }/tradeChannel`, newDataD)

    // dispatch(addNewTradeChannel(newDataD)); 

    console.log (tcID, data, shouldUpdate, "{{{{{{{")

    let newDataD: TradeChannel = {
      name: data.tradeChannelName, 
      channel_cluster_id: channelClusterId as any, 
      position: {
        x: 400, 
        y: 200
      }, 
      // id: tcID ? tcID : 1, 
      type: 'tradeChannelCreation', 
    }

    console.log (newDataD, "newDataD...")

    if (shouldUpdate) {
      newDataD = {
        ...newDataD, 
        id: tradeChannelId as any, 
        position: {
          x: 400, 
          y: 200
        }, 
        type: 'tradeChannelCreation', 
      }
      dispatch(editLocalTradeChannel(newDataD)); 
    } else {
      dispatch(createLocalTradeChannel(newDataD)); 
    }

    handleCloseModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <FormRow
          content1={
            <InputField
              name="tradeChannelName"
              register={register('tradeChannelName')}
              placeholder={"Trade channel Name"}
              // placeholder={ title ? title : "Trade channel Name"}
            />
          }
        />
      </div>

      {/* Submit button */}
      <div className="w-full pt-[2%]">
        <Button type="submit">
          {
            shouldUpdate ? title : "Add Trade Channel"
          }
        </Button>
      </div>
    </form>
  );
};

export default AddTradeChannelForm;
