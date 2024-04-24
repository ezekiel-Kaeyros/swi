import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

function AnimationSideBar({
  showMenu,
  sidebarToggle,
  children,
}: {
  showMenu: boolean;
  sidebarToggle: boolean;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={`border-r-[0.02px]  dark:border-bgColorDark/50 ${
        showMenu ? 'absolute  p-10 top-0 md:w-full md:relative' : 'hidden'
      }  md:block top-0 transition-all duration-300 overflow-auto scrollbar-hide flex flex-col justify-between  h-screen  dark:bg-primaryDark py-6 px-2   ${
        sidebarToggle ? 'w-fit' : 'w-full'
      }`}
      initial={false}
      animate={{
        width: sidebarToggle ? 80 : 295,
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationSideBar;
