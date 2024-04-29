'use client';
import AddSubCategoryForm from '@/app/common/components/forms/activities-builder-forms/add-subcategory-form/AddSubCategoryForm';
import CustomModal from '@/app/common/components/modal/Modal';
import { CategorizationSvgIcon } from '@/app/common/components/svgs/SvgsIcons';
import { useSettings } from '@/app/hooks/useSettings';
import {
  copyLocalCategory,
  deleteLocalCategory,
  selectCatID,
} from '@/redux/features/channel-cluster-slice';
import { ICategory } from '@/redux/features/types';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import FlowCompHoverButtons from './flow-mini-components/FlowCompHoverButtons';
import BaseFlowComponent from './base-flow-components/BaseFlowComponent';

const CategoryFlowComp = ({ data }: { data: ICategory }) => {
  const [shouldUpdateCC, setShouldUpdateCC] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { dispatch } = useSettings();

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const deleteCC = () => {
    const confirmation = confirm(
      `Do You want to remove Channel Cluster ${data.name}`
    );
    if (confirmation) {
      dispatch(
        deleteLocalCategory({
          id: data?.id,
        })
      );
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

  const editChannelCluster = () => {
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
    router.push('/activity-flow-builder/add-activity');
  }

  const takeMeToCategorizationDetails = () => {
    router.push(`/activity-flow-builder/${data?.id}/activities-list`);
  }

  return (
    <>
      <div className="big-parent bg-newPrimaryDark rounded-xl p-5 flex flex-col gap-5 w-[300px]">

        <FlowCompHoverButtons 
            canAddActivity={ true }
            copyCC={ copyCC }
            editChannelCluster={ editChannelCluster } 
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
            <CategorizationSvgIcon />
        </BaseFlowComponent>


        <Handle
          type="source"
          position={Position.Right}
          onConnect={() => {
            console.log('Connecting from Activities');
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
    </>
  );
};

export default CategoryFlowComp;
