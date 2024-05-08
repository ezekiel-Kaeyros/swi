import { card } from '@nextui-org/react';
import { motion } from 'framer-motion';
import React from 'react';

function SlideDownToUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: {
          y: -10,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      layout
    >
      {children}
    </motion.div>
  );
}

export default SlideDownToUp;
