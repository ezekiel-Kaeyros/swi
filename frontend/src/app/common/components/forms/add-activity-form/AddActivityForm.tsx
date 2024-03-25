import React, { ChangeEvent, useState } from 'react';
import InputField from '../text-field/InputField';
import FormRow from './form-row/FormRow';
import SelectField from '../select-field/SelectField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ActivityFormProps, ActivityFormValues } from './addActivityForm';
import TextArea from '../text-area/TextArea';
import { Button } from '../../button/Button';
import { channelClusters } from '@/utils/channelCluster';
import { useSettings } from '@/app/hooks/useSettings';
import { createActivity } from '@/redux/features/activities-slice';
import { extractNames } from '../utils';

const AddActivityForm: React.FC<ActivityFormProps> = ({ handleCloseModal }) => {
  const { register, handleSubmit, watch } = useForm<ActivityFormValues>();

  const { dispatch } = useSettings();

  const onSubmit: SubmitHandler<ActivityFormValues> = (data) => {
    dispatch(createActivity(data));
    handleCloseModal();
  };

  // Extracting names from an array of obejcts

  // Listening to fields

  let channelCluster: string = watch('channelCluster');
  let tradeChannel: string = watch('tradeChannel');

  // Finding the selected channel cluster
  const activeChannelCluster = channelClusters?.find(
    (value) => value?.name?.toLowerCase() === channelCluster?.toLowerCase()
  );

  // Finding the selected trade channel
  const activeTradeChannel = activeChannelCluster?.tradeChannel?.find(
    (value) => value?.title?.toLowerCase() === tradeChannel?.toLowerCase()
  );

  return (
    <form className=" rounded-lg " onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <h1>Activity Name</h1>
        <InputField
          name="name"
          register={register('name', { required: true })}
          placeholder="Activity name"
        />
      </FormRow>
      <FormRow>
        <h1>Priority</h1>
        <SelectField
          name="priority"
          options={['Low', 'Medium', 'High']}
          register={register('priority')}
        />
      </FormRow>

      <FormRow>
        <h1>Channel cluster</h1>
        <SelectField
          name="channelCluster"
          options={extractNames(channelClusters)}
          register={register('channelCluster', { required: true })}
        />
      </FormRow>

      {/* Dynamic select fields */}

      {channelCluster && (
        <FormRow>
          <h1>Trade channel</h1>
          <SelectField
            name="tradeChannel"
            options={extractNames(activeChannelCluster?.tradeChannel, 'title')}
            register={register('tradeChannel', { required: true })}
          />
        </FormRow>
      )}

      {/* Dynamic subcategory */}

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
        )}

      <FormRow>
        <h1>Duration</h1>
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
    </form>
  );
};

export default AddActivityForm;
