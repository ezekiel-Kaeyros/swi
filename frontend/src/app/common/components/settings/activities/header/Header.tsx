import React, { useState } from 'react';
import { Button } from '../../../button/Button';
import AddIcon from '../../../../../../../public/icons/add-circleIcon.svg';
import SlideInComponent from '../../../slidIn-component/SlideInComponent';
import AddActivityForm from '../../../forms/add-activity-form/AddActivityForm';

const Header = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="flex  w-full mt-6 mb-12 justify-between items-center">
      <div>
        <h1 className="font-bold text-xl">Activity</h1>
        <p className="text-slate-600">Activity</p>
      </div>
      <div>
        <Button onClick={() => setOpenModal(true)} icon={AddIcon}>
          Add activity
        </Button>
      </div>

      <SlideInComponent
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Create new activity"
      >
        <AddActivityForm handleCloseModal={() => setOpenModal(false)} />
      </SlideInComponent>
    </div>
  );
};

export default Header;
