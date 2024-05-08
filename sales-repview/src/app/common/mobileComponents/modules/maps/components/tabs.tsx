import React, { useState } from 'react';

export interface Tab {
  title: string;
  icon?: any;
  content: React.ReactNode; // This can be any JSX content
}

const Tabs: React.FC<{ tabs: Tab[]; filter?: React.ReactNode }> = ({
  tabs,
  filter,
}) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedTabIndex(index);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <ul className="flex mb-4 w-full  ">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`p-[16px] cursor-pointer w-full flex items-center justify-center gap-2 border-b-3 text-white transition-all duration-200 ${
              index === selectedTabIndex
                ? 'border-b-3 border-b-settingViewBottomBorderColor  text-gray-700 font-bold '
                : 'text-gray-500 gap-2 hover:text-gray-700'
            }`}
            onClick={() => handleTabClick(index)}
          >
            <div className="font-medium w-[20px] h-[20px]">
              {tab?.icon && tab?.icon}
            </div>

            <span className="font-medium text-[14px] leading-[14px]  text-[#E8E8E8]">
              {tab.title}
            </span>
          </li>
        ))}
      </ul>
      <div className="w-full whitespace-nowrap ">{filter && filter}</div>
      <div className="h-100vh">{tabs[selectedTabIndex].content}</div>
    </div>
  );
};

export default Tabs;
