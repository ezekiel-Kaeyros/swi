import React from 'react'

type LoadingUIType = {
    loadingTitle: string; 
}

const LoadingUIBoxes: React.FC<LoadingUIType> = ({ loadingTitle }) => {
  return (
    <div className='relative bg-transparent h-screen flex flex-col justify-start p-10'>
        <span className='text-white text-[16px]'>
            { loadingTitle }...
        </span>
        <div className="flex animate-pulse">
            <div className="flex-shrink-0">
                <span className="size-12 block bg-gray-200 rounded-full"></span>
            </div>

            <div className="ms-4 mt-5 w-full">
                {/* <p className="h-5 bg-gray-200 rounded-full" style={{
                    width: "40%"
                }}></p> */}

                <ul className="mt-5 gap-5 grid grid-cols-[repeat(auto-fit,minmax(200px,300px))]">
                    <li className="w-[300px] h-[150px] bg-gray-700 rounded-2xl"></li>
                    <li className="w-[300px] h-[150px] bg-gray-700 rounded-2xl"></li>
                    <li className="w-[300px] h-[150px] bg-gray-700 rounded-2xl"></li>
                    <li className="w-[300px] h-[150px] bg-gray-700 rounded-2xl"></li>
                    <li className="w-[300px] h-[150px] bg-gray-700 rounded-2xl"></li>
                    <li className="w-[300px] h-[150px] bg-gray-700 rounded-2xl"></li>
                    <li className="w-[300px] h-[150px] bg-gray-700 rounded-2xl"></li>
                    <li className="w-[300px] h-[150px] bg-gray-700 rounded-2xl"></li>
                </ul>
            </div>
            </div>
        </div>
  )
}

export default LoadingUIBoxes