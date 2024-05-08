import React, { useState } from 'react';
import SlideDownToUp from '../../../components/slideDownToUp';
import DelayShowAnimation from '../../../components/delayShowAnimation';
import { DataActionItemType } from './dataActionItemType';
import BottomSheet from '../../../components/bottomSheet';
import DataActionItem from './dataActionsItem';
import ProposePOS from './ActionsComponents/proposePOS';
import ProposeShelfLooKup from './ActionsComponents/proposeShelfLooKup';

function DataActions() {
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
      link: 'StartLookup',
    },
    {
      description: 'Add new point of sale',
      title: 'Propose POS',
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
      link: 'POS',
    },
    {
      description: 'Order fro next command',
      title: 'Take Order',
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
            d="M36.36 22.27L36.07 19.5C35.65 16.48 34.28 15.25 31.35 15.25H28.99H27.51H24.47H22.99H20.59C17.65 15.25 16.29 16.48 15.86 19.53L15.59 22.28C15.49 23.35 15.78 24.39 16.41 25.2C17.17 26.19 18.34 26.75 19.64 26.75C20.9 26.75 22.11 26.12 22.87 25.11C23.55 26.12 24.71 26.75 26 26.75C27.29 26.75 28.42 26.15 29.11 25.15C29.88 26.14 31.07 26.75 32.31 26.75C33.64 26.75 34.84 26.16 35.59 25.12C36.19 24.32 36.46 23.31 36.36 22.27Z"
            fill="#BABABA"
          />
          <path
            d="M25.35 30.66C24.08 30.79 23.12 31.87 23.12 33.15V35.89C23.12 36.16 23.34 36.38 23.61 36.38H28.38C28.65 36.38 28.87 36.16 28.87 35.89V33.5C28.88 31.41 27.65 30.42 25.35 30.66Z"
            fill="#BABABA"
          />
          <path
            d="M35.37 28.4V31.38C35.37 34.14 33.13 36.38 30.37 36.38C30.1 36.38 29.88 36.16 29.88 35.89V33.5C29.88 32.22 29.49 31.22 28.73 30.54C28.06 29.93 27.15 29.63 26.02 29.63C25.77 29.63 25.52 29.64 25.25 29.67C23.47 29.85 22.12 31.35 22.12 33.15V35.89C22.12 36.16 21.9 36.38 21.63 36.38C18.87 36.38 16.63 34.14 16.63 31.38V28.42C16.63 27.72 17.32 27.25 17.97 27.48C18.24 27.57 18.51 27.64 18.79 27.68C18.91 27.7 19.04 27.72 19.16 27.72C19.32 27.74 19.48 27.75 19.64 27.75C20.8 27.75 21.94 27.32 22.84 26.58C23.7 27.32 24.82 27.75 26 27.75C27.19 27.75 28.29 27.34 29.15 26.6C30.05 27.33 31.17 27.75 32.31 27.75C32.49 27.75 32.67 27.74 32.84 27.72C32.96 27.71 33.07 27.7 33.18 27.68C33.49 27.64 33.77 27.55 34.05 27.46C34.7 27.24 35.37 27.72 35.37 28.4Z"
            fill="#BABABA"
          />
        </svg>
      ),
      link: '#',
    },
    {
      description: 'Offer promotions to top clients',
      title: 'Promotions',
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
  const [bottomSheet, setBottomSheet] = useState('');

  return (
    <>
      <DelayShowAnimation>
        <div className="flex-col gap-4 ">
          {dataActionlist.map((item, key) => (
            <SlideDownToUp key={`card-item-${key}`}>
              <div onClick={() => setBottomSheet(`${item.link}`)}>
                <DataActionItem
                  key={key}
                  description={item.description}
                  icon={item.icon}
                  title={item.title}
                  link={item.link}
                />
              </div>
            </SlideDownToUp>
          ))}
        </div>
      </DelayShowAnimation>

      <BottomSheet
        type="Simple"
        isOpen={bottomSheet === 'POS' ? true : false}
        close={() => setBottomSheet('')}
        title="Propose POS"
        description="Access to your custom map options"
        className={` h-[150%] ${
          bottomSheet !== '' ? 'animate-sheet-up' : 'animate-sheet-down'
        } `}
      >
        <ProposePOS onClose={() => setBottomSheet('')} />
      </BottomSheet>

      <BottomSheet
        type="Simple"
        isOpen={bottomSheet === 'StartLookup' ? true : false}
        close={() => setBottomSheet('')}
        title="Shelf lookup - Dov Bonamoussadi"
        description="Access to your custom map options"
        className={` h-[150%] ${
          bottomSheet !== '' ? 'animate-sheet-up' : 'animate-sheet-down'
        } `}
      >
        <ProposeShelfLooKup onClose={() => setBottomSheet('')} />
      </BottomSheet>
    </>
  );
}

export default DataActions;
