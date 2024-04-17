'use client';
import React, { useState } from 'react';

import { Button } from '@/app/common/components/button/Button';
import CustomTable from '@/app/common/components/table/CustomTable';
import AddUserIcon from '../../../../public/icons/addUserIcon.svg';
import UploadFileIcon from '../../../../public/icons/uploadFileIcon.svg';
import CustomModal from '@/app/common/components/modal/Modal';
import AddSalesAgentForm from '@/app/common/components/forms/add-sales-agent-form/AddSalesAgentForm';
import CreateChannelClusterForm from '@/app/common/components/forms/channel-cluster-creation-form/CreateChannelClusterForm';
import CreateCategoryIcon from '../../../../public/icons//hierarchy-3.svg';

const SalesRepresentative = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  return (
    <div className=" w-full pr-10 lg:pr-8">
      <div className="flex mb-8 max-w-md ml-auto items-center space-x-4 ">
        <Button onClick={() => setOpen(true)} icon={AddUserIcon}>
          Add Agent
        </Button>
        {/* Add user modal form */}

        <CustomModal
          onClose={() => setOpen(false)}
          isOpen={open}
          title="Create agent"
          classStyle="bg-cardDark overflow-y-scroll h-8/12 xl:h-[80vh] xl:max-w-2xl"
        >
          <AddSalesAgentForm />
        </CustomModal>
        <Button variant="secondary"  onClick={() => setOpen2(true)} icon={UploadFileIcon}>
          Import CSV
        </Button>
        <CustomModal
          onClose={() => setOpen2(false)}
          isOpen={open2}
          title="Create Category"
          /* iconTitle={CreateCategoryIcon} */
          classStyle="bg-cardDark  h-8/10 xl:h-[58vh] xl:max-w-[28rem] align-self-center"
        >
          <CreateChannelClusterForm />
        </CustomModal>
      </div>

      <div>
        <CustomTable />
      </div>
    </div>
  );
};

export default SalesRepresentative;
