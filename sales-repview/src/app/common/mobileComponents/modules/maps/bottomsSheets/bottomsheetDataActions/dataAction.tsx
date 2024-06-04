import React, { useState } from 'react';
import SlideDownToUp from '../../../../components/slideDownToUp';
import DelayShowAnimation from '../../../../components/delayShowAnimation';
import { DataActionItemType } from './dataActionItemType';
import BottomSheet from '../../../../components/bottomSheet';
import DataActionItem from './dataActionsItem';
import ProposePOS from './ActionsComponents/proposePOS';
import ProposeShelfLooKup from './ActionsComponents/proposeShelfLooKup';
import {
  MerchandisingSvgIcon,
  Promotion,
  ProposePos,
  TakeOrder,
} from '@/core/svg/SvgIcon';
import Meerchandising from './ActionsComponents/machandising';

function DataActions() {
  const dataActionlist: DataActionItemType[] = [
    {
      link: 'Meerchandising',
      title: 'Meerchandising',
      icon: <MerchandisingSvgIcon />,
      description: 'See merchandising actions',
    },
    {
      description: 'Orders for next command',
      title: 'Take Order',
      icon: <TakeOrder />,
      link: '#',
    },
    {
      description: 'Add new point of sale',
      title: 'Propose POS',
      icon: <ProposePos />,
      link: 'POS',
    },

    {
      description: 'Offer promotions to top clients',
      title: 'Promotions',
      icon: <Promotion />,
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

      <BottomSheet
        type="withDataActions"
        isOpen={bottomSheet === 'Meerchandising' ? true : false}
        close={() => setBottomSheet('')}
        title="Meerchandising"
        description="Custom options"
        className={` h-[60%] ${
          bottomSheet !== '' ? 'animate-sheet-up' : 'animate-sheet-down'
        } `}
      >
        <Meerchandising />
      </BottomSheet>
    </>
  );
}

export default DataActions;
