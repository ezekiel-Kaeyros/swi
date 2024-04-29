// tabs.tsx
import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col h-14 mt-6">
      <div className="flex">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab underline-offset-8 cursor-pointer ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
        <div className="absolute inset-y-0 h-0.5" style={{
          left: `${activeTab * 100}%`,
          backgroundColor: 'blue',
          transition: 'left 0.3s ease-in-out',
          fontWeight: 'bold', // Bold font for the line under the active tab
        }}></div>
      </div>
      <div className="mt-1.5">
        {tabs[activeTab].content}
      </div>
      <style jsx>{`
        .tab {
          padding-right: 30px;
        }

        .tab.active {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Tabs;
