
'use client';
import React from 'react'
import { useClientFormStep } from './useClientFormStep';
import { selectDetailViewTab, selectSettingsTab } from '@/redux/features/agent-creation';
import { navigationTabsInPOS, navigationTabsInRTT, navigationTabsInRTTProfile, toggleTrackingListElement } from '@/redux/features/create-point-of-sale-slice';
import { useSettings } from './useSettings';

const useChangeNavigationItem = () => {

    const { dispatch, posDisplayNavigationList, realTimeTrackingNavigationList, trackingProfileNavigationList } = useClientFormStep (); 
    const { trackingList } = useSettings (); 

    const selectNavigationTabsInPOS = (id: any) => {
        console.log("Leave me leave me")
        dispatch(navigationTabsInPOS({
            id, 
        }));
    }

    const selectNavigationTabsInRTT = (id: any) => {
        dispatch(navigationTabsInRTT({
            id, 
        }));
    }

    const selectNavigationTabsInRTTProfile = (id: any) => {
        dispatch(navigationTabsInRTTProfile({
            id, 
        }));
    }

    

    const selectNavigationItem = (id: any) => {
        dispatch(selectSettingsTab({
            id, 
        }));
    }

    // 
    const selectNavigationItemDetailViewTabs = (id: any) => {
        dispatch(selectDetailViewTab({
            id, 
        }));
    }

    const toggleRTTProfileElement = (id: any) => {
        dispatch(toggleTrackingListElement({
            id, 
        }));
    }

    return {
        selectNavigationItem, 
        selectNavigationItemDetailViewTabs, 
        selectNavigationTabsInPOS, 
        selectNavigationTabsInRTT, 
        selectNavigationTabsInRTTProfile, 
        toggleRTTProfileElement, 
        posDisplayNavigationList, 
        realTimeTrackingNavigationList, 
        trackingProfileNavigationList, 
        trackingList, 
        dispatch, 
    }
}

export default useChangeNavigationItem

