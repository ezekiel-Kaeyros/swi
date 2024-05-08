import { motion } from 'framer-motion';
import React from 'react';

function DelayShowAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        visible: {
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.05,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export default DelayShowAnimation;
