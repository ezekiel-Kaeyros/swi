import React from 'react';
import FormRow from './form-row/FormRow';
import InputField from '../text-field/InputField';
import { Button } from '../../button/Button';
import AddUserIcon from '../../../../../../public/icons//addUserIcon.svg';
import { CreateChannelClusterProps } from './createChannelCluster';
import InputFieldCluster from '../input-text-cluster/InputFieldCluster';

const CreateChannelClusterForm: React.FC<CreateChannelClusterProps> = ({
  handleCloseModal,
}) => {
  return (
    <form>
      <div className="p-2">
        {/* <h1 className="font-bold my-4">Create Category</h1> */}
        <FormRow
          content1={
            <InputFieldCluster
              name="categoryName"
              placeholder="Category Name"
              className="rounded-lg bg-white"
            />
          }
        />
        <FormRow
          content1={
            <InputFieldCluster
              name="serviceModel"
              placeholder="Service Model"
            />
          }
          content2={
            <InputFieldCluster name="serviceRole" placeholder="Service Role" />
          }
        />
        <FormRow
          content1={
            <InputFieldCluster
              name="estimatedTurnOverPerMonth"
              placeholder="Estimated Turn Over Per Month"
            />
          }
        />

        <FormRow
          content1={<InputFieldCluster name="color" placeholder="Set Color" />}
        />
      </div>

      {/* Submit button */}
      <div className="w-full my-8">
        <Button icon={AddUserIcon}>Add Category</Button>
      </div>
    </form>
  );
};

export default CreateChannelClusterForm;
