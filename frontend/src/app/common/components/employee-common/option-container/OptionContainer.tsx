"use client"; 

import React from 'react'
import { Button } from '../../button/Button'
import editIcon from "../../../../../../public/icons/table/edit.png"; 
import dustBean from "../../../../../../public/icons/table/dustBeen.png"
import useTogglePopup from '@/app/hooks/useTogglePopup';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import { toggleOptionsContainer } from '@/redux/features/agent-creation';

const OptionContainer = () => {
    const { toggleAgentCreationModal } = useTogglePopup (true); 
    const { dispatch } = useClientFormStep ()

    // truncateText
    const domNode = useClickOutside(() => {
        dispatch(toggleOptionsContainer({
            toggleValue: false, 
        }))
    });
    
  return (
    <div ref={domNode} className='rounded-lg rigt-[100%] flex flex-col justify-start translate-x translate-x-[-70%] translate-y-[10%] absolute  bg-optionContainerBg'>
        <Button type='button' icon={ editIcon } className='rounded-sm bg-transparent w-[150px] flex justify-center' onClick={ toggleAgentCreationModal }>
            Edit
        </Button>
        <Button type='button' icon={ dustBean } className='rounded-sm bg-transparent w-[150px] flex justify-center' onClick={ () => console.log("hi") }>
            Delete
        </Button>
    </div>
  )
}

export default OptionContainer