import React from 'react';
import FormRow from './form-row/FormRow';
import InputField from '../text-field/InputField';
import { Button } from '../../button/Button';
import {
  AddTradeChannelFormValues,
  AddTradeChannelProps,
} from './addTradeChannel';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSettings } from '@/app/hooks/useSettings';
import { addNewTradeChannel } from '@/redux/features/channel-cluster-slice';

const AddTradeChannelForm: React.FC<AddTradeChannelProps> = ({
  handleCloseModal,
  channelClusterId,
}) => {
  const { dispatch, channelClusters } = useSettings();

  const { register, handleSubmit } = useForm<AddTradeChannelFormValues>();

  const onSubmit: SubmitHandler<AddTradeChannelFormValues> = (data) => {
    const newData = { ...data, channelClusterId };

    dispatch(addNewTradeChannel(newData));

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
              placeholder="Trade channel Name"
            />
          }
        />
      </div>

      {/* Submit button */}
      <div className="w-full pt-[2%]">
        <Button type="submit">Add Trade Channel</Button>
      </div>
    </form>
  );
};

export default AddTradeChannelForm;
