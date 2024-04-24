import React from 'react'
import AnimateClick from '../../animate-click/AnimateClick'
import OptionContainer from '../../employee-common/option-container/OptionContainer'

const PopOverOptions = ({ handleEditChannelCluster, deleteChannelCluster }: any) => {
  return (
    <>
        {/* THREE DOT UI BUTTON BELOW */}
        <AnimateClick>
            <svg width="25" height="25" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.375 9.5C7.375 10.26 6.76 10.875 6 10.875C5.24 10.875 4.625 10.26 4.625 9.5C4.625 8.74 5.24 8.125 6 8.125C6.76 8.125 7.375 8.74 7.375 9.5ZM5.375 9.5C5.375 9.845 5.655 10.125 6 10.125C6.345 10.125 6.625 9.845 6.625 9.5C6.625 9.155 6.345 8.875 6 8.875C5.655 8.875 5.375 9.155 5.375 9.5Z" fill="#BABABA"/>
                <path d="M7.375 2.5C7.375 3.26 6.76 3.875 6 3.875C5.24 3.875 4.625 3.26 4.625 2.5C4.625 1.74 5.24 1.125 6 1.125C6.76 1.125 7.375 1.74 7.375 2.5ZM5.375 2.5C5.375 2.845 5.655 3.125 6 3.125C6.345 3.125 6.625 2.845 6.625 2.5C6.625 2.155 6.345 1.875 6 1.875C5.655 1.875 5.375 2.155 5.375 2.5Z" fill="#BABABA"/>
                <path d="M7.375 6C7.375 6.76 6.76 7.375 6 7.375C5.24 7.375 4.625 6.76 4.625 6C4.625 5.24 5.24 4.625 6 4.625C6.76 4.625 7.375 5.24 7.375 6ZM5.375 6C5.375 6.345 5.655 6.625 6 6.625C6.345 6.625 6.625 6.345 6.625 6C6.625 5.655 6.345 5.375 6 5.375C5.655 5.375 5.375 5.655 5.375 6Z" fill="#BABABA"/>
            </svg>
        </AnimateClick>
        {/* LITTLE POPOVER UI APPEAR ONLY WHEN HOVER ON THREE DOTS UI DESCRIBED ABOVE */}
        <div className='relative'>
            <div className='hidden group-hover:block z-10 relative ease-in duration-300'>
            <OptionContainer firstAction={ handleEditChannelCluster } secondAction={ deleteChannelCluster } />
            </div>
        </div>
    </>
  )
}

export default PopOverOptions