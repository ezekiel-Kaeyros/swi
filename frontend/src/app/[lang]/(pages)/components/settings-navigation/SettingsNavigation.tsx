'use client';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import { AgentNavigationType } from '@/redux/features/types';
import React from 'react';
import NavigationItem from '../../../../common/components/genericNavigation/NavigationItem';

const SettingsNavigation = () => {
  const { settingPageNavigation } = useClientFormStep();

  return (
    <div className="flex flex-row">
      {settingPageNavigation?.map((settingPag: AgentNavigationType, key) => {
        console.log('settingPag.textColor', settingPag.textColor);
        return (
          <NavigationItem
            key={`nav-${key}`}
            settingPaneNavigation={true}
            agentDetailPaneNavigation={false}
            id={settingPag?.id}
            label={settingPag?.label}
            textColor={settingPag?.textColor}
          />
        );
      })}
    </div>
  );
};

export default SettingsNavigation;
