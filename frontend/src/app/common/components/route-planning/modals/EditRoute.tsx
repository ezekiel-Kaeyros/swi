'use client';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import Image from 'next/image';
import CustomModal from '../../modal/Modal';
import btnClose from '../../../../../../public/images/close.svg';
import map from '../../../../../../public/images/map.svg';
import msgQuestionIcon from '../../../../../../public/images/message-question.svg';
import deleteIcone from '../../../../../../public/images/trash.svg';
import detail from '../../../../../../public/images/Frame 477.svg';

// import delete from '../../../../../../public/images/trash.svg';
// import delete from '../../..'
import editIcon from '../../../../../../public/images/edit.svg';
import { useState } from 'react';
import InputField from '../../forms/text-field/InputField2';
import { SubmitHandler, useForm } from 'react-hook-form';
interface IFormInput {
  search: string;
  //   montant: string;
}
// import InputField from '../../forms/text-field/InputField';
const arrayShop = ['any', '1', '2', '3', '4', '5', '6'];
const EditRoute: React.FC<{ id?: number; edit:any }> = ({

    id,
  edit
}) => {
  const [shop, setShop] = useState('');
  const {
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
    handleSubmit,
    reset,
    setValue,
    watch,
  } = useForm<IFormInput>({ mode: 'onChange' || 'onBlur' || 'onSubmit' });
  let search = watch('search');

  return (
    <Popover triggerType="dialog" placement="right-start" offset={10}>
      <PopoverTrigger className="flex items-center">
        <Image src={detail} alt="" className="cursor-pointer" />
        {/* <button>ok</button> */}
      </PopoverTrigger>
      <PopoverContent className="max-w-lg bg-bgColorDark">
        <div className=" test-sm font-[500] w-fit">
          <div
            className="p-4 rounded-xl flex items-center  text-[#BABABA] gap-3 cursor-pointer"
            onClick={edit}
          >
            <Image src={editIcon} alt="" />

            <span>Edit</span>
          </div>
          <div className="p-4  rounded-xl flex items-center gap-3 cursor-pointer text-[#F24F63]">
            <Image src={deleteIcone} alt="" />
            <span>Delete</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default EditRoute;
