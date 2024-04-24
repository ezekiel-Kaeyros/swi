'use client';
import useChangeNavigationItem from '@/app/hooks/useChangeNavigationItem';
import React from 'react';

type NavigationItemType = {
    id: string | number; 
    label: string; 
    textColor: string; 
    color?: string;
    currentState?: boolean; 
    settingPaneNavigation?: boolean; 
    agentDetailPaneNavigation?: boolean; 
    genericAction?: any;
    genericActionBoolean?: boolean; 
}

const NavigationItem: React.FC<NavigationItemType> = ({ id, label, textColor, settingPaneNavigation, currentState, agentDetailPaneNavigation, color, genericActionBoolean, genericAction }) => {

    let { selectNavigationItem } = useChangeNavigationItem (); 
    let { selectNavigationItemDetailViewTabs } = useChangeNavigationItem (); 

    console.log("textColor.....", genericActionBoolean, textColor, color)

    if(genericActionBoolean === true) {
        return (
          <div onClick={ () => genericAction (id) } key={ id } className={`relative bg-transparent p-4  cursor-pointer`}>
              { label }
              <div className={`absolute w-full left-0 h-1 bottom-0 bg-${ textColor } ${ currentState ? "bg-blue-500" : "bg-slate-500" }`}></div>
          </div>
        )
    }
    
    if(settingPaneNavigation === true) {
        return (
          <div onClick={ () => selectNavigationItem (id) } key={ id } className={`relative bg-transparent p-4  cursor-pointer`}>
              { label }
              <div className={`absolute w-full left-0 h-1 bottom-0 bg-${ textColor } ${ currentState ? "bg-blue-500" : "bg-slate-500" }`}></div>
          </div>
        )
    }

    if(agentDetailPaneNavigation === true) {
        return (
          <div onClick={ () => selectNavigationItemDetailViewTabs(id) } key={ id } className={ `cursor-pointer px-4 py-2 rounded-3xl text-${ textColor } bg-${ color }`}>
              { label }
          </div>
        )
    }
}

export default NavigationItem;
