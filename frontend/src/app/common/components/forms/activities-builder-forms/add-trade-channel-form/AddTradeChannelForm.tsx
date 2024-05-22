import React, { useEffect } from 'react';
import FormRow from './form-row/FormRow';
import InputField from '../../text-field/InputField';
import { Button } from '../../../button/Button';
import {
  AddTradeChannelFormValues,
  AddTradeChannelProps,
} from './addTradeChannel';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSettings } from '@/app/hooks/useSettings';
import { addNewTradeChannel, createLocalTradeChannel, editLocalTradeChannel } from '@/redux/features/channel-cluster-slice';
import { makePostReques, makePutReques } from '@/utils/makePostReq';
import { BASE_URL, TRADECHANNEL_API_URL } from '@/utils/constants';
import { TokenType, TradeChannel } from '@/redux/features/types';
import { getUserCookies } from '@/cookies/cookies';
import { jwtDecode } from 'jwt-decode';
import { useUserInfo } from '@/app/hooks/useUserInfo';

const AddTradeChannelForm: React.FC<AddTradeChannelProps> = ({
  handleCloseModal,
  channelClusterId,
  title, 
  shouldUpdate, 
  existingData, 
  tradeChannelId, 
  tcID
}) => {
  // const { dispatch } = useSettings();
  const { dispatch, locaTradeChannels } = useSettings (); 
  const { register, handleSubmit, setValue } = useForm<AddTradeChannelFormValues>(); 
  const { decodeToken } = useUserInfo (); 

  // FILLING INPUTS WITH USER INFO IN CASE OF EDITING USER INFO
  useEffect (() => {
    setValue ("tradeChannelName", existingData as string); 
  }, [])

  const onSubmit: SubmitHandler<AddTradeChannelFormValues> = async (data) => {

    let newDataD: TradeChannel = {
      name: data.tradeChannelName, 
      channel_cluster_id: channelClusterId as any, 
      position: {
        x: 400, 
        y: 200
      }, 
      type: 'tradeChannelCreation', 
      categories_id: [""], 
      channel_cluster_ids: [""],
    }

    // const gettoken = getUserCookies();
    // const decodeToken: TokenType = jwtDecode (gettoken)

    

    if (shouldUpdate) {
      // SEND TO STATE FOR FAST APPEARANCE
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

      // NOW SEND TO SERVER FOR STARING
      const foundTradeC = locaTradeChannels?.find((foundTC: TradeChannel) => {
        return foundTC?.id === tradeChannelId
      })
      const newDataDServer = {
          name: data.tradeChannelName ? data.tradeChannelName : foundTradeC?.name, 
          id_company: decodeToken?.user?.id_company[0]?._id, 
          channel_cluster_id: channelClusterId
          // id_company: decodeToken?.user?.id_company[0], 
      }

      // UPDATING THE TRADE CHANNEL
      const result = await makePutReques (`${ BASE_URL }/${ TRADECHANNEL_API_URL }/${ tradeChannelId }`, newDataDServer)
      alert ("Succesfully updated")
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
