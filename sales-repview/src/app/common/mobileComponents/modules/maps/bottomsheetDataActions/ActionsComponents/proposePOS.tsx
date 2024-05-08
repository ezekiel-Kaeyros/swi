import { Button } from '@/app/common/components/button/Button';
import CustomButton from '@/app/common/components/button/CustonButton';
import CustomInput from '@/app/common/components/forms/customInput/CustomInput';
import CustomTextArea from '@/app/common/components/forms/customTextArea/CustomTextArea';
import FileInput from '@/app/common/components/forms/file-input/FileInput';
import FormRow from '@/app/common/components/forms/form-row/FormRow';
import TextArea from '@/app/common/components/forms/text-area/TextArea';
import InputField from '@/app/common/components/forms/text-field/InputField';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface InputTypeFile extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  icon?: string;
  title?: string;
}
const CustomInputFile: React.FC<InputTypeFile> = ({
  className,
  type = 'file',
  placeholder,
  register,
  name,
  ...props
}) => {
  return (
    <input
      className="h-[48px] text-[14px] leading-[19px] font-articulat  bg-secondaryDark px-[16px] py-[18px] gap-[8px]  rounded-[8px] w-full  dark:text-white "
      id={name}
      type={type}
      {...register}
    />
  );
};

interface ProposePOSType {
  images: File[];
  currentLocation: string;
  shopName: string;
  EstimatedCommmands: number;
  notes: string;
}

interface PointOfSaleInteface {
  onClose: () => void;
}

const ProposePOS: React.FC<PointOfSaleInteface> = ({ onClose }) => {
  const { register, handleSubmit, watch } = useForm<ProposePOSType>();

  // const { dispatch } = useSettings();

  const onSubmit: SubmitHandler<ProposePOSType> = (data) => {
    console.log(data);
    // dispatch(createActivity(data));
    onClose();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-wrap h-[80%] w-full relative "
    >
      <div className="p-2 flex  flex-col gap-3 ">
        <FileInput
          register={register('images')}
          accept={'image/*'}
          multiple
          name="file"
        />
        <CustomInput
          register={register('currentLocation')}
          disabled
          type="text"
          placeholder="Location(Your current position)"
          autoComplete="off"
        />
        <CustomInput
          register={register('shopName')}
          type="text"
          placeholder="Enter shop name"
          autoComplete="off"
        />
        <CustomInput
          register={register('EstimatedCommmands')}
          type="text"
          placeholder="Estimatated commands (in figure)"
          autoComplete="off"
        />
        <CustomTextArea
          row={5}
          props={register('notes')}
          name={'description'}
          placeholder={'Notes (facultative)'}
        />
      </div>
      <div className="flex m-2 flex-col  w-full absolute bottom-0 ">
        <div className="relative flex flex-col gap-2">
          <button
            className=" bg-[#3267E6] !w-[97%]   rounded-[8px]  h-[48px] tex-center items-center justify-center flex text-white px-[14px] py-[8px] gap-[4px]"
            type="button"
          >
            Save
          </button>
          <button
            className=" bg-secondaryDark !w-[97%]   rounded-[8px]  h-[48px] tex-center items-center justify-center flex text-white px-[14px] py-[8px] gap-[4px]"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProposePOS;
