'use client';
import Image from 'next/image';
import CustomModal from '../../modal/Modal';
import btnClose from '../../../../../../public/images/close.svg';
import map from '../../../../../../public/images/map.svg';
import msgQuestionIcon from '../../../../../../public/images/message-question.svg';
import octogoneIcone from '../../../../../../public/images/search-normal (1).svg';
import routeIcone from '../../../../../../public/images/routing (1).svg';
import editIcon from '../../../../../../public/images/edit.svg';
import { useEffect, useState } from 'react';
import InputField from '../../forms/text-field/InputField2';
import { SubmitHandler, useForm } from 'react-hook-form';
import UserCard from '../user-assign-modal-card/user-card/UserCard';
import { users } from '@/utils/usersData';
import { assignRouteToSalesRepresentative } from '@/redux/features/route-planning-slice';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
interface IFormInput {
  search: string;
  //   montant: string;
}
// import InputField from '../../forms/text-field/InputField';
const arrayShop = ['any', '1', '2', '3', '4', '5', '6'];
const CreateRouteModal: React.FC<{ isOpen: boolean; onClose: any }> = ({
  isOpen,
  onClose,
}) => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const { routes, dispatch, selectedRouteId } = useRoutePlanning();

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
  const handleSelected = (id: number) => {
    dispatch(
      assignRouteToSalesRepresentative({
        routeId: selectedRouteId,
        salesRepId: id,
      })
    );
  };

  useEffect(() => {
    if (search && search.length > 0) {
      const array = users.filter(
        (item) =>
          item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          item.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
        setFilteredUsers(array)
    }
  }, [search]);
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} >
      <div className="flex justify-between">
        <span className="font-bold text-3xl">Creating route</span>
        <div className="flex gap-5">
          <Image src={msgQuestionIcon} alt="" className="cursor-pointer" />{' '}
          <Image
            src={btnClose}
            alt=""
            onClick={() => {
              onClose();
            }}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="grid gap-5 my-5">
        <InputField icon={editIcon} placeholder="Enter route name" />
        <div className="w-full">
          <InputField
            icon={octogoneIcone}
            placeholder="Search agent name"
            register={register('search')}
          />
          {search && search.length > 0 && (
            <div className=" grid grid-cols-2 gap-4 my-4">
              {filteredUsers?.map((user) => (
                <UserCard
                  key={user?.id}
                  email={user?.email}
                  id={user?.id}
                  name={user?.name}
                  image=""
                  handleSelect={() => handleSelected(user?.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end items-center test-sm font-[500] gap-5">
        <div
          className="p-4 rounded-xl flex items-center bg-[#323232] text-[#E8E8E8] gap-3 cursor-pointer"
          onClick={() => {
            onClose();
          }}
        >
          <Image src={map} alt="" />
          <span>Create template</span>
        </div>
        <div
          className="p-4 bg-[#3267E6] rounded-xl flex items-center gap-3 cursor-pointer"
          onClick={() => {
            onClose();
          }}
        >
          <Image src={routeIcone} alt="" />
          <span>Create</span>
        </div>
      </div>
    </CustomModal>
  );
};
export default CreateRouteModal;
