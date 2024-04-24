import React from 'react'

type LoadingUIType = {
    loadingTitle: string; 
}

const LoadingUI: React.FC<LoadingUIType> = ({ loadingTitle }) => {
  return (
    <div className='relative bg-transparent h-screen flex flex-col justify-start p-10'>
        <span className='text-white text-[16px]'>
            { loadingTitle }...
        </span>
        {/* <div role="status" className="w-full p-4 space-y-4  divide-y rounded shadow animate-pulse md:p-6 ">
            <div className="flex items-center justify-between">
                <div>
                    <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray rounded-full dark:bg-gray"></div>
                </div>
                <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray rounded-full dark:bg-gray"></div>
                </div>
                <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray rounded-full dark:bg-gray"></div>
                </div>
                <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray rounded-full dark:bg-gray"></div>
                </div>
                <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray rounded-full dark:bg-gray"></div>
                </div>
                <div className="h-2.5 bg-gray rounded-full dark:bg-gray w-12"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div> */}
        <div className="flex animate-pulse">
            <div className="flex-shrink-0">
                <span className="size-12 block bg-gray-200 rounded-full"></span>
            </div>

            <div className="ms-4 mt-10 w-full">
                <p className="h-5 bg-gray-700 rounded-full" style={{
                    width: "40%"
                }}></p>

                <ul className="mt-5 space-y-3">
                    <li className="w-full h-5 bg-gray-700 rounded-full"></li>
                    <li className="w-full h-5 bg-gray-700 rounded-full"></li>
                    <li className="w-full h-5 bg-gray-700 rounded-full"></li>
                    <li className="w-full h-5 bg-gray-700 rounded-full"></li>
                    <li className="w-full h-5 bg-gray-700 rounded-full"></li>
                    <li className="w-full h-5 bg-gray-700 rounded-full"></li>
                    <li className="w-full h-5 bg-gray-700 rounded-full"></li>
                    <li className="w-full h-5 bg-gray-700 rounded-full"></li>
                </ul>
            </div>
            </div>
        </div>
  )
}

export default LoadingUI