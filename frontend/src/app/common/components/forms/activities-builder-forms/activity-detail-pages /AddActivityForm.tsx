import React, { ChangeEvent, useState } from 'react';
import InputField from '../../text-field/InputField';
import FormRow from './form-row/FormRow';
import SelectField from '../../select-field/SelectField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ActivityFormProps, ActivityFormValues } from './addActivityForm';
import TextArea from '../../text-area/TextArea';
import { Button } from '../../../button/Button';
// import { channelClusters } from '@/utils/channelCluster';
import { useSettings } from '@/app/hooks/useSettings';
import { createActivity } from '@/redux/features/activities-slice';
import { extractNames } from '../../utils';
import { useMutation } from 'react-query';
import { BASE_URL } from '@/utils/constants';
import { makePostReques } from '@/utils/makePostReq';

const AddActivityForm: React.FC<ActivityFormProps> = ({ handleCloseModal }) => {
  const { register, handleSubmit, watch } = useForm<ActivityFormValues>();

  // WE NEED ONLY TO GET ALL CHANNEL CLUSTER AND WE CAN FILTER ALL EXITING TRADE CHANNELS AND CATEGORIES
  const { dispatch, channelClusters, tradeChannels, channeClusterForSelectField, extractedtArrayfromChannelCluster } = useSettings();
  const [ fillingTradeChannel, setFillingTradeChannel ] = useState<any> ([]); 
  const [ fillingCategory, setFillingCategory ] = useState<any> ([]); 
  
  // THIS IS WHEN WE CLICK ON CHANNELS CLUSTER
  const deriveTradeChannelFromSelectedCC = (e: any) => {
    const selectedTradeChannel: any = channeClusterForSelectField.find((tradeChannel: any) => {
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

  const mutation = useMutation({
    mutationFn: (newPost) => {
      return makePostReques (`${ BASE_URL }/pos`, newPost)
    },
  })

  const onSubmit: SubmitHandler<ActivityFormValues> = (data) => {
    // const finalObj
    dispatch(createActivity(data));
    handleCloseModal();
  };



  // Extracting names from an array of obejcts

  // // Listening to fields
  // let channelCluster: string = watch('channelCluster');
  // let tradeChannel: string = watch('tradeChannel');

  // // Finding the selected channel cluster
  // const activeChannelCluster = channelClusters?.find(
  //   (value) => value?.name?.toLowerCase() === channelCluster?.toLowerCase()
  // );

  // // Finding the selected trade channel
  // const activeTradeChannel = activeChannelCluster?.tradeChannel?.find(
  //   (value) => value?.title?.toLowerCase() === tradeChannel?.toLowerCase()
  // );

  return (
    <form className=" rounded-lg " onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <h1 className=''>Activity Name</h1>
        <InputField
          name="name"
          register={register('name', { required: true })}
          placeholder="Activity name"
        />
      </FormRow>
      <FormRow>
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
      </FormRow>
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
      <FormRow>
        <h1>Priority</h1>
        <SelectField
          name="priority"
          options={['Low', 'Medium', 'High']}
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

      <div>
        <TextArea
          props={register('description')}
          name={'description'}
          placeholder={'Description'}
        />
      </div>

      <div className="mt-8">
        <Button>Create activity</Button>
      </div>
      

      {/* Dynamic select fields */}

      {/* {channelCluster && (
        <FormRow>
          <h1>Trade channel</h1>
          <SelectField
            name="tradeChannel"
            options={extractNames(activeChannelCluster?.tradeChannel, 'title')}
            register={register('tradeChannel', { required: true })}
          />
        </FormRow>
      )}

      {tradeChannel &&
        activeTradeChannel?.content &&
        activeTradeChannel?.content?.length !== 0 && (
          <FormRow>
            <h1>Category</h1>
            <SelectField
              name="category"
              options={extractNames(activeTradeChannel?.content, 'title')}
              register={register('category', { required: true })}
            />
          </FormRow>
        )} */}

      
    </form>
  );
};

export default AddActivityForm;
