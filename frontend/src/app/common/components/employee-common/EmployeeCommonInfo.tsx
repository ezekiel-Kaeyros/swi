import React from 'react'


const EmployeeCommonInfo = ({ dataLeft, dataRight, horizontalView }: any) => {
  return (
    <>
        {
            horizontalView ? 
                <div className='grid grid-cols-[repeat(2,1fr)] gap-2'>
                    <div className='flex flex-col gap-3'>
                    {
                        dataLeft.map((dat: any) => {
                            return (
                                <div key={dat.id} className='gap-2 grid grid-cols-[repeat(2,1fr)]'>
                                    <div className='50%'>
                                        <h1 className={ `font-bold` }>{ dat?.label }</h1>
                                    </div>
                                    <p className={ `text-slate-400` }>{ dat?.name }</p>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className='flex flex-col gap-3'>
                    {
                        dataRight.map((dat: any) => {
                        return (
                            <div key={dat.id} className='grid grid-cols-[repeat(2,1fr)] gap-2'>
                                <h1 className={ `font-bold` }>{ dat?.label }</h1>
                                <p className={ `text-slate-400` }>{ dat?.name }</p>
                            </div>
                        )
                        })
                    }
                    </div>
                </div>
                :
                <div className='flex flex-row gap-2'>
                    <div className='flex flex-col gap-3'>
                    {
                        dataLeft.map((dat: any) => {
                        return (
                            <div key={dat.id}>
                                <h1 className={ `font-bold` }>{ dat?.label }</h1>
                                <p className={ `text-slate-400` }>{ dat?.name }</p>
                            </div>
                        )
                        })
                    }
                    </div>
                    <div className='flex flex-col gap-3'>
                    {
                        dataRight.map((dat: any) => {
                        return (
                            <div key={dat.id}>
                                <h1 className={ `font-bold` }>{ dat?.label }</h1>
                                <p className={ `text-slate-400` }>{ dat?.name }</p>
                            </div>
                        )
                        })
                    }
                    </div>
                </div>
        }
    </>
  )
}

export default EmployeeCommonInfo