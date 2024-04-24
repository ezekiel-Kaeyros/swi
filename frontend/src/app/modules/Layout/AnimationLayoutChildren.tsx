import { useToggleSidebar } from '@/app/hooks/useToggleSidebar';
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

const AnimationLayoutChildren = ({
  showMenu,
  sidebarToggle,
  children,
}: {
  showMenu?: boolean;
  sidebarToggle?: boolean;
  children: ReactNode;
}) => {
  const { dispatch, toggleSideBarState } = useToggleSidebar();
  return (
    <motion.div
      className={`ml-auto h-screen overflow-y-auto ${
        toggleSideBarState ? "w-[95%]" : "w-10/12" }
      }`}
      initial={false}
      animate={{
        width: toggleSideBarState ? "95%" : "85%",
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationLayoutChildren;
