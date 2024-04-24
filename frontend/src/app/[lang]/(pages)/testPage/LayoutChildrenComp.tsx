import { useToggleSidebar } from '@/app/hooks/useToggleSidebar';
import AnimationLayoutChildren from '@/app/modules/Layout/AnimationLayoutChildren';
import Sidebar from '@/app/modules/sidebar/Sidebar';

import React from 'react'

const LayoutChildrenComp = ({ children, lang }: any) => {
  return (
    <div className="flex relative">
        <div className="w-2/12 fixed">
            <Sidebar />
        </div>

        <AnimationLayoutChildren>
            {children}
        </AnimationLayoutChildren>
    </div>
  )
}

export default LayoutChildrenComp