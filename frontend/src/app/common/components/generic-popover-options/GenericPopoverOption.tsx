import React from 'react'
import AnimateClick from '../animate-click/AnimateClick'
import OptionContainer from '../employee-common/option-container/OptionContainer'

const GenericPopoverOption = ({ children, toggleOptionContainer }: any) => {
  return (
    <div onClick={ toggleOptionContainer } className='absolute right-1 top-8 group'>
        { children }
    </div>
  )
}

export default GenericPopoverOption