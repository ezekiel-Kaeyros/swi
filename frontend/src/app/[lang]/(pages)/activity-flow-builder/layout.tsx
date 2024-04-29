import React from 'react'
import { ReactFlowProvider } from 'reactflow';
import LayoutClientComp from './LayoutClientComp';

const layout = ({
    children,
    params: { lang },
  }: {
    children: React.ReactNode;
    params: { lang: string };
  }) => {
  return (
    <LayoutClientComp>
        { children }
    </LayoutClientComp>
  )
}

export default layout