'use client';
import AddSubCategoryForm from '@/app/common/components/forms/activities-builder-forms/add-subcategory-form/AddSubCategoryForm';
import CustomModal from '@/app/common/components/modal/Modal';
import { CategorizationSvgIcon } from '@/app/common/components/svgs/SvgsIcons';
import { useSettings } from '@/app/hooks/useSettings';
import {
  copyLocalCategory,
  deleteLocalCategory,
  linkLocalCategoryToActivity,
  selectCCID,
  selectCatID,
  selectTCID,
} from '@/redux/features/channel-cluster-slice';
import { IActivityNew, ICategory } from '@/redux/features/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Handle, Position } from 'reactflow';
import FlowCompHoverButtons from './flow-mini-components/FlowCompHoverButtons';
import BaseFlowComponent from './base-flow-components/BaseFlowComponent';
import AddActivityForm from '@/app/common/components/forms/activities-builder-forms/add-activity-form/AddActivityForm';
import { selectActivity } from '@/redux/features/activities-slice';
import AddActivityItemForm from '@/app/common/components/forms/activities-builder-forms/add-activity-form/AddActivityItemForm ';
import { generateId } from '@/utils/generateRandomID';

const CategoryFlowComp = ({ data }: { data: ICategory }) => {
  const [shouldUpdateCC, setShouldUpdateCC] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalActi, setOpenModalActi] = useState<boolean>(false); 
  const [ foundTradeChannel, setFoundTradeChannel ] = useState<any> (); 
  const [ foundChannelC, setFoundChannelC ] = useState<any> (); 
  const [ objectData, setObjectData ] = useState<any> (); 
  const { dispatch, connectTwoNodes, deleteAndEdge, locaChannelClusters, localActivities, locaTradeChannels, tradeChannels, localCategories, edgesConnectingNodes, activities, channelClusters } = useSettings(); 

  console.log("datadatadata", data)

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const openActivityVariation = () => {
    setOpenModalActi(true);
  };

  const closeActivityVariation = () => {
    setOpenModalActi(false);
  };

  const searchTradeChannel = () => {
    const foundTradeChannel = tradeChannels?.find((tradC: any) => {
      console.log(tradC, "tradCto")
      return tradC?._id === data.trade_chanel_id
    })
    console.log(foundTradeChannel, "foundTradeChannel++")
    setFoundTradeChannel(foundTradeChannel )

    const foundChannelC = foundTradeChannel?.channel_cluster_id
    console.log(foundChannelC, "foundChannelC++")
    setFoundChannelC (foundChannelC);

    setObjectData({
      foundChannelC, 
      foundTradeChannel, 
    })
  }

  useEffect(() => {
    searchTradeChannel ()
  }, [foundTradeChannel, foundChannelC,])

  console.log("datadatadata", data)

  const deleteCC = () => {
    const confirmation = confirm(`Do You want to remove Channel Cluster ${data.name}`);
    if (confirmation) {
      dispatch(deleteLocalCategory({
          id: data?.id,
      }));
    } else {
      console.log('not deleted!');
    }
  };

  const copyCC = () => {
    dispatch(
      copyLocalCategory({
        id: data?.id,
      })
    );
  };

  const editCategory = () => {
    setShouldUpdateCC(true);
    setOpenModal(true);
  };
  const router = useRouter();

  const handleOpenAcitivityForm = () => {
    dispatch(
      selectCatID({
        id: data?.id,
      })
    ); 

    dispatch(
      selectTCID({
        id: foundTradeChannel?._id,
      })
    );

    dispatch(
      selectCCID({
        id: foundChannelC,
      })
    );
    
    router.push('/activity-flow-builder/add-activity');
  }

  const handleOpenAcitivityItemForm = (id: string) => {

    dispatch(
      selectCatID({
        id: data?.id,
      })
    ); 

    dispatch(
      selectTCID({
        id: foundTradeChannel?._id,
      })
    );

    dispatch(
      selectCCID({
        id: foundChannelC,
      })
    );

    dispatch(
      selectActivity({
        id: id,
      })
    );
    
    router.push('/activity-flow-builder/add-activity-item');
  }

  const takeMeToCategorizationDetails = () => {
    router.push(`/activity-flow-builder/${data?.id}/activities-list`);
  }

  const manualLinkageToActivity = (activtyID: any) => {
    dispatch(linkLocalCategoryToActivity({
        id: data.id, 
        activtyID,
    }));
  }

  const uniqID = generateId (); 

  return (
    <>
      <div className="big-parent bg-newPrimaryDark rounded-xl p-5 flex flex-col gap-5 w-[300px]">

        <FlowCompHoverButtons 
          canAddActivity={ true }
          copyCC={ copyCC }
          editChannelCluster={ editCategory } 
          deleteCC={ deleteCC } 
          addLabel='Add Activity' 
          deleteLabel='Delete' 
          duplicateLabel='Duplicate' 
          editLabel='Edit' 
          addFunction={ handleOpenAcitivityForm }
        />
        <Handle
          type="target"
          position={Position.Left}
          id={`catC`}
          onConnect={() => {
            console.log('Connecting from Trade Channel');
          }}
        />

        <BaseFlowComponent 
          id={ data?.id as string } 
          headerTitle='Categorization' 
          flowCompName={ data?.name as string } 
          activitiesNumber=''
          bg_color='bg-normalInputBg'
          executeSomthing={ takeMeToCategorizationDetails }
        >
            <CategorizationSvgIcon height="20" width="20" color="white" />
        </BaseFlowComponent>

        <Handle
          type="source"
          position={Position.Right}
          id={`catT`}
          onConnect={(params) => {
            console.log('Connecting to Activities', params); 
            // GET THE ENTIRE OBJECT OF THE TARGET
            const foundTargetObject = localActivities?.find((obj: IActivityNew) => {
              console.log("foundTargetObject,", obj, params?.target)
              return obj?.id === params?.target
            })

            handleOpenAcitivityItemForm (foundTargetObject?.activityParentID as string)

            // openActivityVariation ()

            console.log("foundTargetObject,", foundTargetObject)
            // manualLinkageToActivity (params.target)
          }}
        />

      </div>
      <CustomModal
        title="Create a channel cluster"
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        classStyle="bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center"
      >
        <AddSubCategoryForm
          catID={data?.id}
          // channelClusterIdForUpdate={data.id}
          handleCloseModal={handleCloseModal}
          // title={ " Channel Cluster"}
          editToggle={shouldUpdateCC}
          dataTtoEdit={data.name}
        />
      </CustomModal>

      <CustomModal
        title="Create Activity Variation"
        isOpen={openModalActi}
        onClose={() => closeActivityVariation() }
        classStyle="bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center"
      >
        <AddActivityItemForm 
          handleCloseModal={ closeActivityVariation } 
          dataToUpdate={ objectData }
        />
      </CustomModal>
    </>
  );
};

export default CategoryFlowComp;
