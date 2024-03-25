'use client';
import React, { useState } from 'react';
import { Button } from '../../../button/Button';
import AddIcon from '../../../../../../../public/icons/add-circleIcon.svg';
import CustomModal from '../../../modal/Modal';
import AddChannelClusterForm from '../../../forms/add-channel-cluster/AddChannelClusterForm';

const Header = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="flex w-full mt-6 mb-12 justify-between items-center">
      <div>
        <h1 className="font-bold text-xl">Channel cluster</h1>
        <p className="text-slate-600">Channel cluster</p>
      </div>
      <div>
        <Button onClick={() => setOpenModal(true)} icon={AddIcon}>
          Add Channel Cluster
        </Button>
      </div>

      <CustomModal
        title="Create a channel cluster"
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        classStyle="bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center"
      >
        <AddChannelClusterForm handleCloseModal={handleCloseModal} />
      </CustomModal>
    </div>
  );
};

export default Header;
