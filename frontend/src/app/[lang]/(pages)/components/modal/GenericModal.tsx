"use client"
import React from 'react'

const GenericModal = ({ children }: any) => {
  return (
    <div className='font-articulat flex justify-center items-center fixed w-full h-screen z-10 top-0 left-0'>
        <div className='backdrop-blur-lg h-screen w-full absolute'>
        </div>
        {
            children
        }
        {/* <AgentModal /> */}
    </div>
  )
}

export default GenericModal