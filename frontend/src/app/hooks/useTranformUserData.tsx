import React from 'react'
import { BASE_URL } from '@/utils/constants'
import { IUser } from '@/redux/features/types'
import useMakeGetRequest from './useMakeGetRequest'

const useTranformUserData = () => {
  const { data: rawData } = useMakeGetRequest (`${ BASE_URL }/users`)
  const departmentData = rawData?.map ((dat: IUser) => {
    return {
        id: dat._id, 
        name: `${ dat?.first_name } ${ dat?.last_name }`, 
        extra: dat?.role, 
    } 
  })
  return {
    departmentData
  }
}

export default useTranformUserData