import React, { ReactNode } from 'react';

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dark:bg-newPrimaryDark overflow-y-hidden rounded-xl w-full py-8 px-8 overflow-y-hide">
      {children}
    </div>
  );
};

export default Card;
