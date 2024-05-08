"use client"; 

import React, { useEffect, useState } from 'react'
import InputField from '../../forms/text-field/InputField'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FilterIcon, GridViewIcon, SearchIcon } from '../../svgs/SvgsIcons';

const SearchAndFilterPosForRTT = () => {

    const router = useRouter ()

  const pathName = usePathname ()

  const searchParams = useSearchParams ()

  const filterRoutes = (e: any) => {
    // console.log("<<<<<<<", e.target.value)
    const writtenSearchParam = new URLSearchParams (searchParams)
    writtenSearchParam.set ("search", e.target.value)
    router.push(`${ pathName }?${ writtenSearchParam.toString() }`)
    // if (e.target.value.length > 0) {
    // }
    // dispatch({ type: "FILTERPRODCUTS", payload: e.target.value })
  }

  const [ searchEle, setSearchEle ] = useState ("")

    
  useEffect (() => {
    const writtenSearchParam = new URLSearchParams (searchParams)
    if (writtenSearchParam) {
      const searchEle = writtenSearchParam.get ("search")
      setSearchEle (writtenSearchParam.get ("search")!)
      if (searchEle) {
        // dispatch({ type: "FILTERPRODCUTS", payload: searchEle }) 
      }
    }

  }, [])
  return (
    <div className='flex flex-row items-center gap-3'>
        <InputField
            onChange={(e) => filterRoutes (e)}
          svg={ <SearchIcon height="30" width="30" color="none" /> }
          name="name"
          placeholder="Search Point of Sales"
        />
        <div className='bg-bgColorDark cursor-pointer p-4 flex justify-center items-center rounded-xl h-[50px]'>
            <FilterIcon height="25" width="25" color="none" />
        </div>
        <div className='bg-bgColorDark cursor-pointer p-4 flex justify-center items-center rounded-xl h-[50px]'>
            <GridViewIcon height="25" width="25" color="none" />
        </div>
    </div>
  )
}

export default SearchAndFilterPosForRTT