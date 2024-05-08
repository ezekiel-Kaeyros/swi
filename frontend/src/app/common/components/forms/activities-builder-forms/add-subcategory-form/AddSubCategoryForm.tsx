'use client';
import React, { useEffect, useState } from 'react';
import {
  AddSubCategoryFormValues,
  AddSubCategoryProps,
} from './addSubCategoryForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../text-field/InputField';
import { Button } from '../../../button/Button';

import AddIcon from '../../../../../../../public/icons/add-circleIcon.svg';
import RemoveIcon from '../../../../../../../public/icons/removeIcon.svg';

import Image from 'next/image';
import AnimateClick from '../../../animate-click/AnimateClick';
import { removeElementById } from './utils';
import { useSettings } from '@/app/hooks/useSettings';
import { makePostReques, makePutReques } from '@/utils/makePostReq';
import { BASE_URL } from '@/utils/constants';
import { createLocalCategory, editLocalCategory } from '@/redux/features/channel-cluster-slice';
import { ICategory } from '@/redux/features/types';
// import { addSubCategory } from '@/redux/features/channel-cluster-slice';

const AddSubCategoryForm: React.FC<AddSubCategoryProps> = ({
  tradeChannelId,
  catID, 
  editToggle, 
  clusterId, 
  dataTtoEdit, 
  handleCloseModal,
}) => {
  const { dispatch } = useSettings();

  

  const [descriptionInputs, setDescriptionInputs] = useState<any[]>([]);
  const { register, handleSubmit, setValue } = useForm<AddSubCategoryFormValues>();

  useEffect (() => {
    // IF SHOULD UPDATE IS TRUE THEN SET THE VALUE (THIS IS USED ONLY FOR UPDATE)
    if (editToggle) setValue ("name", dataTtoEdit as string); 
  }, [])

  const onSubmit: SubmitHandler<any> = async (data: { [key: string]: string }) => {
    let name: string = data?.name;

    // THE BELOW LINES OF CODE WORK FOR API REQUEST ALREADY
    // const descriptionValues: string[] = Object?.keys(data)
    //   .filter((key: string) => key?.startsWith('description'))
    //   .map((key) => data[key]);

    // const newDataD = {
    //   name: name, 
    //   id_company: "661e46da0c5460e02b3c492b", 
    //   description: descriptionValues.length > 0 ? [descriptionValues[0]] : "", // NOT ADDED IN BE YET: FILE backend/server/controllers/category.ts LINE 47 (I ASKED BACKEND TEAM)
    //   trade_chanel_id: tradeChannelId
    // }

    // if (editToggle) {
    //   // CANT DELETE BECAUSE WE ARE NOT ABLE TO GET CATEGORY ID DINAMYCALLY (COMING SOON)
    //   // const result = await makePutReques (`${ BASE_URL }/tradeChannel/${  }`, newDataD)
    // } else {
    //   const result = await makePostReques (`${ BASE_URL }/category`, newDataD)
    // }

    // THIS OLD CODE IS FOR DUMMY DATA
    // let dataToBeSent = {
    //   channelClusterId: clusterId,
    //   idToBeUpdated: tradeChannelId,
    //   name: name,
    //   description: descriptionValues,
    // };
    // dispatch(addSubCategory(dataToBeSent));

    let newData: ICategory = {
      ...data, 
      name: data.name, 
      position: {
        x: 800, 
        y: 300
      }, 
      type: 'categoryCreation', 
      trade_chanel_id: [], 
      activities_ids: [], 
    }

    if (dataTtoEdit) {
      newData = {
        ...data, 
        id: catID as string, 
        position: {
          x: 800, 
          y: 300
        }, 
        type: 'categoryCreation', 
      }
      dispatch(editLocalCategory(newData)); 
    } else {
      dispatch(createLocalCategory(newData)); 
    }
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

  // console.log('array');

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
