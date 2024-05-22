import React from 'react'

const loading = () => {
  return (
    <div className='bg-black h-[90vh] w-full text-white flex justify-center items-center'>
        <div className="w-12 h-12 rounded-full animate-spin
                    border border-solid border-yellow-500 border-t-transparent"></div>
    </div>
  )
}

export default loading