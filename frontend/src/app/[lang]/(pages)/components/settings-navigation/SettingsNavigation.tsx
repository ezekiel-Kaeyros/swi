"use client"
import useChangeNavigationItem from '@/app/hooks/useChangeNavigationItem';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import { selectSettingsTab } from '@/redux/features/agent-creation';
import { AgentNavigationType } from '@/redux/features/types';
import React from 'react'
import SettingNavigationItem from '../../../../common/components/genericNavigation/NavigationItem';
import NavigationItem from '../../../../common/components/genericNavigation/NavigationItem';

const SettingsNavigation = () => {

    const { settingPageNavigation } = useClientFormStep (); 

    return (
        <div className='flex flex-row'>
            {
                settingPageNavigation?.map ((settingPag: AgentNavigationType) => {
                    console.log("settingPag.textColor", settingPag.textColor)
                    return (
                        <NavigationItem settingPaneNavigation={ true } agentDetailPaneNavigation={ false } id={ settingPag?.id } label={ settingPag?.label } textColor={ settingPag?.textColor } />
                    )
                })
            }
        </div>
    )
}

export default SettingsNavigation