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
import useTranformAgentData from '@/app/hooks/useTranformAgentData';
import { AgentFormValueMainTypeMain } from '@/redux/features/types';
import { IPointOfSalesType } from '@/utils/types';
import { makePostReques } from '@/utils/makePostReq';
import { BASE_URL, FE_LINK_ROUTE_PREPARATION, ROUTE_API_URL, ROUTE_ITEMS_API_URL, SAVE_ROUTE_API_URL, TRADECHANNEL_API_URL } from '@/utils/constants';
import { useRouter } from 'next/navigation';
import { useUserInfo } from '@/app/hooks/useUserInfo';
interface IFormInput {
  search: string;
  //   montant: string;
}
type AddRouteFormValues = {
  name: string; 
  search: string; 

}
// import InputField from '../../forms/text-field/InputField';
const arrayShop = ['any', '1', '2', '3', '4', '5', '6'];
const CreateRouteModal: React.FC<{ isOpen: boolean; onClose: any }> = ({
  isOpen,
  onClose,
}) => {
  const [filteredUsers, setFilteredUsers] = useState<any>();
  const { routes, dispatch, selectedRouteId } = useRoutePlanning();

  const { agentData } = useTranformAgentData (); 
  const [shop, setShop] = useState('');
  const {
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
    handleSubmit,
    reset,
    setValue,
    watch,
  } = useForm<AddRouteFormValues>({ mode: 'onChange' || 'onBlur' || 'onSubmit' });
  let search = watch('search');
  const [ selectedAgent, setSelectedAgent ] = useState <any> ({})
  const handleSelected = (id: string) => {

    const foundAgent = agentData?.find((item) => {
      console.log("outer", item)
        if (item?.id === id) {
          console.log("inner", item)
          return item
        }
        // item?.salesName?.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        // item?.emailAddress?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    });

    console.log("foundAgent", foundAgent)

    setSelectedAgent (foundAgent)

    setValue ("search", foundAgent?.salesName as string)

    dispatch(
      assignRouteToSalesRepresentative({
        routeId: selectedRouteId,
        salesRepId: id, 
        foundAgent
      })
    );
  };

  useEffect (() => {
    setFilteredUsers (agentData)
  }, [])

  
           
  console.log("agentDataagentData", agentData);

  useEffect(() => {
    if (search && search.length > 0) {
      const array: AgentFormValueMainTypeMain[] = agentData?.filter(
        (item) =>
          item?.salesName?.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          item?.emailAddress?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      setFilteredUsers(array as any)
    }
  }, [search]); 

  const router = useRouter (); 

  const { decodeToken } = useUserInfo ()

  const onSubmit: SubmitHandler<AddRouteFormValues> = async (data) => {

    console.log ("mmmmmmmmmmmmmmmmmmmmmm", data, selectedAgent)

    const currentRoute = routes?.find(
      (route) => route?.id?.toString() === selectedRouteId?.toString()
    );

    // EXTRACT ON THE SELECTED ID FOR ALL SELECTED POS AND PUT THEM IN AN ARRAY
    const allSelectedTaskFromAllSelectedPOS = currentRoute?.pointOfSales?.map((pos: IPointOfSalesType) => {
      const allSelectedActivities = pos?.tasks?.filter ((tas: any) => {
        if (tas.selected === true) {
          return tas
        }
      }).map((transformedA: any) => {
        return transformedA?._id
      })
      return allSelectedActivities
    }).flat();

  

    // console.log(allSelectedTaskFromAllSelectedPOS, "allSelectedTaskFromAllSelectedPOS")

    // let confirmAction = confirm(
    //   'Are you sure to execute this action?'
    // );

    if (!data?.name) {
      alert ("Add a name to this route")
      return
    }
    
    if (!selectedAgent?.id) {
      alert ("Select only one agent")
      return
    }

    if (currentRoute?.pointOfSales && currentRoute?.pointOfSales?.length === 0) {
      alert ("Select at least one POS")
      return
    }

    if (allSelectedTaskFromAllSelectedPOS && allSelectedTaskFromAllSelectedPOS?.length === 0) {
      alert ("Select at least one Activity in each Selected POS")
      return
    }

    // const roadItem = 

    const finalObject = {
      ...data, 
      name: data?.name?.trim(), 
      saleRep: selectedAgent?.id, 
      pos: currentRoute?.pointOfSales.map((pos: IPointOfSalesType) => pos?._id), // extracting only the ids
      activities_items: allSelectedTaskFromAllSelectedPOS, 
      id_company: decodeToken?.user?.id_company[0]?._id, 
    }

    console.log(finalObject, "to go to the database")
    
    const result = await makePostReques (`${ BASE_URL }/${ SAVE_ROUTE_API_URL }`, finalObject)

    // console.log(result?.data, "ddddddd")

    // const newData = currentRoute?.pointOfSales?.map((pos: IPointOfSalesType) => {
    //   const getSelectedTaskForEachPOS = pos?.tasks?.filter((tas: any) => {
    //     if (tas?.selected === true) {
    //       return tas?._id
    //     }
    //   })
    //   console.log("kkkkkkkkkkkkkk1111", getSelectedTaskForEachPOS)
    //   return {
    //     posId: pos?._id, 
    //     taskIds: getSelectedTaskForEachPOS.map((tas: any) => tas?._id)
    //   }
    // })

    // console.log(newData, "kkkkkkkkkkkkkk")

    

    // const roadItems = {
    //   roadItems: newData, 
    //   roadId: result?.data?._id
    // }

    // console.log("roadItems", roadItems)

    // const roadItemResult = await makePostReques (`${ BASE_URL }/${ ROUTE_ITEMS_API_URL }`, roadItems)

    onClose(); 

    router.push(FE_LINK_ROUTE_PREPARATION)
  }; 


  return (
    <CustomModal isOpen={isOpen} onClose={onClose} >
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <InputField 
            icon={editIcon} 
            placeholder="Enter route name"
            register={register('name')}
          />
          <div className="w-full">
            <InputField
              icon={octogoneIcone}
              placeholder="Search agent name"
              register={register('search')}
              // value={ selectedAgent?._id }
            />
            {search && search.length > 0 && (
              <div className=" grid grid-cols-2 gap-4 my-4">
                {filteredUsers?.map((user: any) => (
                  <UserCard
                    key={user?.id}
                    email={user?.emailAddress}
                    id={user?.id}
                    name={user?.salesName}
                    image=""
                    handleSelect={() => handleSelected(user?.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end items-center test-sm font-[500] gap-5">
          <button 
            type='submit'
            className="p-4 rounded-xl flex items-center bg-[#323232] text-[#E8E8E8] gap-3 cursor-pointer"
            onClick={() => {
              onClose();
            }}
          >
            <Image src={map} alt="" />
            <span>Create template</span>
          </button>
          <button
            type='submit'
            className="p-4 bg-[#3267E6] rounded-xl flex items-center gap-3 cursor-pointer"
            // onClick={() => {
            //   onClose();
            // }}
          >
            <Image src={routeIcone} alt="" />
            <span>Create</span>
          </button>
        </div>

      </form>
    </CustomModal>
  );
};
export default CreateRouteModal;
