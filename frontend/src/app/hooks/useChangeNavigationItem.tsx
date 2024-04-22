
'use client';
import React from 'react'
import { useClientFormStep } from './useClientFormStep';
import { selectDetailViewTab, selectSettingsTab } from '@/redux/features/agent-creation';

const useChangeNavigationItem = (id: any) => {

    const { dispatch } = useClientFormStep (); 

    const selectNavigationItem = () => {
        dispatch(selectSettingsTab({
            id, 
        }));
    }

    const selectNavigationItemDetailViewTabs = () => {
        dispatch(selectDetailViewTab({
            id, 
        }));
    }

    return {
        selectNavigationItem, 
        selectNavigationItemDetailViewTabs, 
    }
}

export default useChangeNavigationItem

