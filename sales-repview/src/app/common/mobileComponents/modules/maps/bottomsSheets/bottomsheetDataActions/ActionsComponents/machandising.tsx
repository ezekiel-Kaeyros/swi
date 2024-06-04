import React, { useState } from 'react';
import { DataActionItemType } from '../dataActionItemType';
import DelayShowAnimation from '@/app/common/mobileComponents/components/delayShowAnimation';
import SlideDownToUp from '@/app/common/mobileComponents/components/slideDownToUp';
import DataActionItem from '../dataActionsItem';
import BottomSheet from '@/app/common/mobileComponents/components/bottomSheet';
import ProposeShelfLooKup from './proposeShelfLooKup';
import { DeliverySvgIcon } from '@/core/svg/SvgIcon';

const Meerchandising = () => {
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
      description: 'Perform a delivery to shop/ client',
      title: 'Delivery',
      icon: <DeliverySvgIcon />,
      link: 'Delivery',
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
        isOpen={bottomSheet === 'StartLookup' ? true : false}
        close={() => setBottomSheet('')}
        title="Shelf lookup - Dov Bonamoussadi"
        description="Access to your custom map options"
        className={` h-[250%] ${
          bottomSheet !== '' ? 'animate-sheet-up' : 'animate-sheet-down'
        } `}
      >
        <ProposeShelfLooKup onClose={() => setBottomSheet('')} />
      </BottomSheet>
    </>
  );
};

export default Meerchandising;
