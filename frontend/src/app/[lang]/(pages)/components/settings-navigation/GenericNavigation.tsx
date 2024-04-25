'use client';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import { AgentNavigationType } from '@/redux/features/types';
import React from 'react';
import NavigationItem from '../../../../common/components/genericNavigation/NavigationItem';

const GenericNavigation = ({ settingPageNavigation, genericActionBoolean, settinPStyle, agentDStyle, genericAction }: any) => {
  // const { settingPageNavigation } = useClientFormStep();
  // console.log("settingPageNavigation, settinPStyle, agentDStyle", settingPageNavigation, settinPStyle, agentDStyle)

  return (
    <div className="flex flex-row">
      {settingPageNavigation?.map((settingPag: AgentNavigationType, key: any) => {
        console.log('settingPag.textColor', settingPag.textColor);
        return (
          <NavigationItem
            currentState={ settingPag?.status }
            key={`nav-${key}`}
            settingPaneNavigation={ settinPStyle }
            agentDetailPaneNavigation={ agentDStyle }
            id={settingPag?.id}
            label={settingPag?.label}
            textColor={settingPag?.textColor}
            genericAction={ genericAction }
            genericActionBoolean={ genericActionBoolean }
          />
        );
      })}
    </div>
  );
};

export default GenericNavigation;
