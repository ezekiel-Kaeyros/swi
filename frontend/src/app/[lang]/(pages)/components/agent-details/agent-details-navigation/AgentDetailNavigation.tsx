"use client"; 
import { useClientFormStep } from '@/app/hooks/useClientFormStep'
import { selectDetailViewTab } from '@/redux/features/agent-creation'
import { AgentNavigationType } from '@/redux/features/types'
import React from 'react'
import NavigationItem from '../../../../../common/components/genericNavigation/NavigationItem'

const AgentDetailNavigation = () => {

    const { detailPageNavigation } = useClientFormStep ()
    return (
        <div className='flex flex-row gap-4 border-b-1 border-slate-700 py-[1.5rem]'>

            {
                detailPageNavigation?.map ((agentNavigation: AgentNavigationType) => {
                    return (
                        
                        <NavigationItem settingPaneNavigation={ false} agentDetailPaneNavigation={ true } id={ agentNavigation?.id } label={ agentNavigation?.label } textColor={ agentNavigation?.textColor } color={ agentNavigation?.color } />
                    )
                })
            }

        </div>
    )
}

export default AgentDetailNavigation








// const selectNavigationItem = (id: any) => {
//     dispatch(selectDetailViewTab({
//         id, 
//     }));
// }
// <div onClick={ () => selectNavigationItem (agentNavigation?.id) } key={ agentNavigation?.id } className={ `cursor-pointer px-4 py-2 rounded-3xl text-${ agentNavigation?.textColor } bg-${ agentNavigation?.color }`}>
                    //     { agentNavigation?.label }
                    // </div>