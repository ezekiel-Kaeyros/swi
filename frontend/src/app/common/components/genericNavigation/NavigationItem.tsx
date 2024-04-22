"use client"; 
import useChangeNavigationItem from '@/app/hooks/useChangeNavigationItem';
import React from 'react'

type NavigationItemType = {
    id: string | number; 
    label: string; 
    textColor: string; 
    color?: string;
    settingPaneNavigation?: boolean; 
    agentDetailPaneNavigation?: boolean; 
}

const NavigationItem: React.FC<NavigationItemType> = ({ id, label, textColor, settingPaneNavigation, agentDetailPaneNavigation, color }) => {
    if(settingPaneNavigation === true) {
        let { selectNavigationItem } = useChangeNavigationItem (id); 
        console.log("textColortextColor", textColor)
        return (
          <div onClick={ selectNavigationItem } key={ id } className={`relative bg-transparent p-4  cursor-pointer`}>
                {/* border-b-${ textColor } border-b-[2px] */}
              { label }
              <div className={`absolute w-full left-0 h-1 bottom-0 bg-${ textColor }`}></div>
          </div>
        )
    }
    if(agentDetailPaneNavigation === true) {
        let { selectNavigationItemDetailViewTabs } = useChangeNavigationItem (id); 
        return (
          <div onClick={ selectNavigationItemDetailViewTabs } key={ id } className={ `cursor-pointer px-4 py-2 rounded-3xl text-${ textColor } bg-${ color }`}>
              { label }
          </div>
        )
    }
}

export default NavigationItem