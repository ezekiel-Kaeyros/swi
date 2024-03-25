'use client';
import React, { useState } from 'react';
import {
  AddSubCategoryFormValues,
  AddSubCategoryProps,
} from './addSubCategoryForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../text-field/InputField';
import { Button } from '../../button/Button';

import AddIcon from '../../../../../../public/icons/add-circleIcon.svg';
import RemoveIcon from '../../../../../../public/icons/removeIcon.svg';

import Image from 'next/image';
import AnimateClick from '../../animate-click/AnimateClick';
import { removeElementById } from './utils';
import { addSubCategory } from '@/redux/features/channel-cluster-slice';
import { useSettings } from '@/app/hooks/useSettings';

const AddSubCategoryForm: React.FC<AddSubCategoryProps> = ({
  tradeChannelId,
  clusterId,
  handleCloseModal,
}) => {
  const { dispatch } = useSettings();

  const [descriptionInputs, setDescriptionInputs] = useState<any[]>([]);

  const { register, handleSubmit } = useForm<AddSubCategoryFormValues>();

  // triggers when submitting

  const onSubmit: SubmitHandler<any> = (data: { [key: string]: string }) => {
    let name: string = data?.name;

    const descriptionValues: string[] = Object?.keys(data)
      .filter((key: string) => key?.startsWith('description'))
      .map((key) => data[key]);

    let dataToBeSent = {
      channelClusterId: clusterId,
      idToBeUpdated: tradeChannelId,
      name: name,
      description: descriptionValues,
    };

    dispatch(addSubCategory(dataToBeSent));

    handleCloseModal();
  };

  // When adding description
  const handleAddDescription = () => {
    setDescriptionInputs([
      ...descriptionInputs,
      {
        id: descriptionInputs?.length + 1,
        name: `description${descriptionInputs?.length + 1}`,
        placeholder: 'Description',
      },
    ]);
  };

  const handleRemoveInput = (id: number | string) => {
    setDescriptionInputs(removeElementById(descriptionInputs, id));
  };

  console.log('array');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="font-bold">Name</h1>
        <InputField
          placeholder="Name of the category"
          name="name"
          register={register('name', { required: true, minLength: 3 })}
        />
      </div>
      <div className="flex my-4 justify-between items-center">
        <h1 className="font-bold">Description</h1>

        <div>
          <Button
            onClick={() => handleAddDescription()}
            type="button"
            icon={AddIcon}
            className="py-1"
          >
            Add
          </Button>
        </div>
      </div>

      {descriptionInputs?.map((input) => (
        <div className="flex items-center space-x-4" key={input?.id}>
          <InputField
            register={register(input?.name, { required: true })}
            name={input?.name}
            placeholder={input?.placeholder}
          />
          <div>
            <AnimateClick>
              <Image
                onClick={() => handleRemoveInput(input?.id)}
                src={RemoveIcon}
                alt="remove icon"
              />
            </AnimateClick>
          </div>
        </div>
      ))}

      <div className="mt-6">
        <Button>Save</Button>
      </div>
    </form>
  );
};

export default AddSubCategoryForm;
