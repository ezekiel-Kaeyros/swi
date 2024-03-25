'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import DownIcon from '../../../../../../../../public/icons/arrowDowIcon.svg';
import EditIcon from '../../../../../../../../public/icons/editIcon.svg';
import AddIcon from '../../../../../../../../public/icons/addIconGrey.svg';
import { AccordionItemProps } from './AccordionItem.d';
import AnimateClick from '@/app/common/components/animate-click/AnimateClick';
import CustomModal from '@/app/common/components/modal/Modal';
import AddSubCategoryForm from '@/app/common/components/forms/add-subcategory-form/AddSubCategoryForm';

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  clusterId,
  title,
  description,
  content,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  // Function to close the modal from the form

  const handleCloseModal = () => setOpenModal(false);

  // Dropdown functionality
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // When add button is clicked
  const handleAddSubCategory = (id: string | number) => {
    setOpenModal(true);
    console.log('cluster', id, clusterId);
  };
  return (
    <div className="relative w-fit">
      <div className="font-bold group transition ease-linear duration-200 cursor-pointer flex justify-between items-center">
        <Image
          onClick={handleToggle}
          className={`${
            !isOpen
              ? '-rotate-90  transition ease-linear duration-200'
              : 'rotate-0 transition ease-linear duration-200'
          }`}
          src={DownIcon}
          alt="Dropdown Icon"
        />
        <h1
          onClick={handleToggle}
          className="ml-4 transition ease-linear duration-200"
        >
          {title}
        </h1>
        <div className="justify-between group-hover:opacity-100 group-hover:transition group-hover:duration-200 group-hover:transition:ease-linear opacity-0 peer-hover:opacity-100  ml-4 flex items-center space-x-3">
          <Image src={EditIcon} alt="Edit icon" />
          <div>
            <AnimateClick>
              <Image
                onClick={() => handleAddSubCategory(id)}
                src={AddIcon}
                alt="Add icon"
              />
            </AnimateClick>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="pl-[20px] w-full  h-fit left-0 transition ease-linear duration-200">
          <ul className="pl-6 list-disc text-xs my-1 italic transition ease-linear duration-200">
            {description &&
              description?.map((value, index) => (
                <li className="ml-2" key={index}>
                  {value}
                </li>
              ))}
          </ul>
          {content?.content?.map((subItem: any) => (
            <AccordionItem
              id={subItem?.key}
              clusterId={clusterId}
              description={subItem?.description}
              title={subItem?.title}
              key={subItem.key}
              content={subItem && subItem}
            />
          ))}
        </div>
      )}

      {/* Modal for adding a sub category */}
      <CustomModal
        title="Create a subcategory"
        classStyle="bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center"
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      >
        <AddSubCategoryForm
          handleCloseModal={handleCloseModal}
          clusterId={clusterId}
          tradeChannelId={id}
        />
      </CustomModal>
    </div>
  );
};

export default AccordionItem;
