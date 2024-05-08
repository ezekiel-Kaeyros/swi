import React, { useState } from 'react';
import DataActionItem from './DataActionsItem';
import { DataActionItemType } from './dataActionItemType';
import DelayShowAnimation from '@/app/common/mobileComponents/components/delayShowAnimation';
import SlideDownToUp from '@/app/common/mobileComponents/components/slideDownToUp';
import CustomModal from '@/app/common/components/modal/Modal';

function DataActionshop() {
  const dataActionlist: DataActionItemType[] = [
    {
      description: 'Shelf Lookup',
      title: 'Start lookup',
      icon: (
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H44C48.4183 0 52 3.58172 52 8V44C52 48.4183 48.4183 52 44 52H8C3.58172 52 0 48.4183 0 44V8Z"
            fill="#1C1C1C"
          />
          <path
            d="M35.25 23.1501C32.94 19.5201 29.56 17.4301 26 17.4301C24.22 17.4301 22.49 17.9501 20.91 18.9201C19.33 19.9001 17.91 21.3301 16.75 23.1501C15.75 24.7201 15.75 27.2701 16.75 28.8401C19.06 32.4801 22.44 34.5601 26 34.5601C27.78 34.5601 29.51 34.0401 31.09 33.0701C32.67 32.0901 34.09 30.6601 35.25 28.8401C36.25 27.2801 36.25 24.7201 35.25 23.1501ZM26 30.0401C23.76 30.0401 21.96 28.2301 21.96 26.0001C21.96 23.7701 23.76 21.9601 26 21.9601C28.24 21.9601 30.04 23.7701 30.04 26.0001C30.04 28.2301 28.24 30.0401 26 30.0401Z"
            fill="#BABABA"
          />
          <path
            d="M26 23.14C24.43 23.14 23.15 24.42 23.15 26C23.15 27.57 24.43 28.85 26 28.85C27.57 28.85 28.86 27.57 28.86 26C28.86 24.43 27.57 23.14 26 23.14Z"
            fill="#BABABA"
          />
        </svg>
      ),
      link: '#',
    },
    {
      description: 'Take Order',
      title: 'Order for next command',
      icon: (
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H44C48.4183 0 52 3.58172 52 8V44C52 48.4183 48.4183 52 44 52H8C3.58172 52 0 48.4183 0 44V8Z"
            fill="#1C1C1C"
          />
          <path
            d="M34.71 22.12V31.53C34.71 33.99 32.7 36 30.24 36H21.76C19.3 36 17.29 33.99 17.29 31.53V22.12C17.29 20.41 18.25 18.92 19.66 18.17C20.15 17.91 20.76 18.26 20.76 18.82C20.76 20.41 22.06 21.71 23.65 21.71H28.35C29.94 21.71 31.24 20.41 31.24 18.82C31.24 18.26 31.84 17.91 32.34 18.17C33.75 18.92 34.71 20.41 34.71 22.12Z"
            fill="#BABABA"
          />
          <path
            d="M28.35 16H23.65C22.61 16 21.76 16.84 21.76 17.88V18.82C21.76 19.86 22.6 20.7 23.64 20.7H28.35C29.39 20.7 30.23 19.86 30.23 18.82V17.88C30.24 16.84 29.39 16 28.35 16Z"
            fill="#BABABA"
          />
        </svg>
      ),
      link: '#',
    },

    {
      description: 'Promotions',
      title: 'Offer promotions to top clients',
      icon: (
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H44C48.4183 0 52 3.58172 52 8V44C52 48.4183 48.4183 52 44 52H8C3.58172 52 0 48.4183 0 44V8Z"
            fill="#1C1C1C"
          />
          <path
            d="M29.3899 19.21L30.7999 22.03C30.9899 22.42 31.4999 22.79 31.9299 22.87L34.4799 23.29C36.1099 23.56 36.4899 24.74 35.3199 25.92L33.3299 27.91C32.9999 28.24 32.8099 28.89 32.9199 29.36L33.4899 31.82C33.9399 33.76 32.8999 34.52 31.1899 33.5L28.7999 32.08C28.3699 31.82 27.6499 31.82 27.2199 32.08L24.8299 33.5C23.1199 34.51 22.0799 33.76 22.5299 31.82L23.0999 29.36C23.1899 28.88 22.9999 28.23 22.6699 27.9L20.6799 25.91C19.5099 24.74 19.8899 23.56 21.5199 23.28L24.0699 22.86C24.4999 22.79 25.0099 22.41 25.1999 22.02L26.6099 19.2C27.3799 17.68 28.6199 17.68 29.3899 19.21Z"
            fill="#BABABA"
          />
          <path
            d="M22 19.75H16C15.59 19.75 15.25 19.41 15.25 19C15.25 18.59 15.59 18.25 16 18.25H22C22.41 18.25 22.75 18.59 22.75 19C22.75 19.41 22.41 19.75 22 19.75Z"
            fill="#BABABA"
          />
          <path
            d="M19 33.75H16C15.59 33.75 15.25 33.41 15.25 33C15.25 32.59 15.59 32.25 16 32.25H19C19.41 32.25 19.75 32.59 19.75 33C19.75 33.41 19.41 33.75 19 33.75Z"
            fill="#BABABA"
          />
          <path
            d="M17 26.75H16C15.59 26.75 15.25 26.41 15.25 26C15.25 25.59 15.59 25.25 16 25.25H17C17.41 25.25 17.75 25.59 17.75 26C17.75 26.41 17.41 26.75 17 26.75Z"
            fill="#BABABA"
          />
        </svg>
      ),
      link: '#',
    },
  ];
  const [openModal, setOpenModal] = useState('');
  return (
    <>
      <DelayShowAnimation>
        <div className="flex-col gap-4 ">
          {dataActionlist.map((item, key) => (
            <SlideDownToUp key={`card-item-${key}`}>
              <DataActionItem
                key={key}
                description={item.description}
                icon={item.icon}
                title={item.title}
                link={item.link}
              />
            </SlideDownToUp>
          ))}
        </div>
      </DelayShowAnimation>
    </>
  );
}

export default DataActionshop;
