import {
  DailyTaskActitivitiesTabSvgIcon,
  MapSvgIcon,
} from '@/core/svg/SvgIcon';
import { motion } from 'framer-motion';
import React from 'react';

const IconsHeaders = ({
  setTabs,
  value,
  openModal,
  type,
  currentModal,
}: {
  setTabs: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  openModal?: () => void;
  type: 'settings' | 'add';
  currentModal: string;
}) => {
  const tabs = currentModal;

  return (
    <motion.div
      onClick={() => {
        setTabs(value);
        if (openModal) {
          openModal();
        }
      }}
      className={`rounded-full p-[14px] ${
        tabs === value ? 'bg-[#3772FF]' : 'bg-bgColorDark'
      }   gap-4 h-[48px] w-[48px]`}
      key={tabs === value ? value : 'empty'}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {type === 'settings' && <MapSvgIcon type={tabs} />}
      {type === 'add' && <DailyTaskActitivitiesTabSvgIcon state={tabs} />}
    </motion.div>
  );
};
export default IconsHeaders;
