'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import DownIcon from '../../../../../../../../public/icons/arrowDowIcon.svg';
import EditIcon from '../../../../../../../../public/icons/editIcon.svg';
import AddIcon from '../../../../../../../../public/icons/addIconGrey.svg';
import removeIconIcon from '../../../../../../../../public/icons/table/removeIcon.svg';
import { AccordionItemProps } from './AccordionItem.d';
import AnimateClick from '@/app/common/components/animate-click/AnimateClick';
import CustomModal from '@/app/common/components/modal/Modal';
import AddSubCategoryForm from '@/app/common/components/forms/add-subcategory-form/AddSubCategoryForm';
import useMakeActions from '@/app/hooks/useMakeActions';
import { BASE_URL } from '@/utils/constants';

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  clusterId,
  title,
  description,
  content,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [ edit, setEdit ] = useState<boolean> (false); 
  const { makeDeleteAction } = useMakeActions ()

  // console.log("self id", id)
  // Function to close the modal from the form

  const handleCloseModal = () => {
    setOpenModal(false)
    setEdit (false)
  };

  // Dropdown functionality
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // When add button is clicked
  const handleAddSubCategory = (id: string | number) => {
    setOpenModal(true);
    // console.log('cluster', id, clusterId);
  };

  // When add button is clicked
  const handleEditSubCategory = (id: string | number, name: string) => {
    setOpenModal(true);
    setEdit (true)
    // console.log('cluster', id, clusterId);
  }; 

  // When remove button is clicked
  const handleRemoveSubCategory = (id: string | number) => {
    let confirmAction = confirm ("Are you sure to execute this action?")

    // DELETE TRADE CHANNEL FIRST CHECK IF THE ID PASSED IS PRESENT IN TC ARRAY OR IN CAT ARRAY
    const isItInTradeChannel = content?._id // this will always be the ID of either trade channel when you click on delete beside it or category when you click on delete button beside is
    const isItInCategory = content?.categories_id?.some((obj: any) => obj._id === id) // this line of code will always return false when you click on trade channel delete button because trade channel still has a content (category). it will return undefined if you click on category delete button since category does not have any property content

    if (confirmAction) {
      if (isItInCategory || isItInCategory === false) {
        makeDeleteAction (`${ BASE_URL }/tradeChannel/${ isItInTradeChannel}`)
        for (let index = 0; index < content.length; index++) {
          makeDeleteAction (`${ BASE_URL }/category/${ isItInTradeChannel}`)
        }
      } else {
        makeDeleteAction (`${ BASE_URL }/category/${ isItInTradeChannel}`)
      }
    } else {
      console.log("hi"); 
    }
  }

  console.log(content, "inside accordionItem", content?.categories_id)
  return (
    <div className="relative w-fit" key={ id }>
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
          <div>
            <AnimateClick>
              <Image 
                onClick={() => handleEditSubCategory(id, title)}
                // content.categories_id[0],
                src={EditIcon} 
                alt="Edit icon" 
              />
            </AnimateClick>
          </div>
          
          <div>
            <AnimateClick>
              <Image
                onClick={() => handleAddSubCategory(id)}
                src={AddIcon}
                alt="Add icon"
              />
            </AnimateClick>
          </div>

          <div>
            <AnimateClick>
              <Image
                onClick={() => handleRemoveSubCategory(id)}
                src={removeIconIcon}
                alt="Remove icon"
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

          {/* WITH DUMMY DATA */}
          {content?.categories_id?.map((subItem: any) => {
            return (
              <AccordionItem
                id={subItem?._id}
                clusterId={clusterId}
                description={subItem?.description}
                // title={subItem?.title}
                title={subItem?.name}
                key={subItem.key}
                content={subItem && subItem}
              />
          )})}
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
          editToggle={ edit }
        />
      </CustomModal>
    </div>
  );
};

export default AccordionItem;
