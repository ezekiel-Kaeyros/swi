import React from 'react';

const TabNavigation = () => {
  return (
    <div className="mb-4">
      {/* Categories */}
      <div className="flex mt-6 space-x-4">
        <div className="dark:bg-bgColorDark rounded-full px-4 py-1">All</div>
        <div className="dark:bg-bgColorDark cursor-pointer rounded-full px-4 py-1 hover:dark:bg-cardDark">
          Yaoundé
        </div>
        <div className="dark:bg-bgColorDark cursor-pointer rounded-full px-4 py-1 hover:dark:bg-cardDark">
          Douala
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
