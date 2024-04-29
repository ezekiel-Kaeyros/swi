import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

function PageTransitionAnimation({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="sync">
      <motion.div
        key="empty"
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransitionAnimation;
