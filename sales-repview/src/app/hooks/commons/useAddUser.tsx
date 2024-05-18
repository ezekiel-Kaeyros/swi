
'use client';
import React from 'react'
import { useClientFormStep } from './useClientFormStep';
import { addUser } from '@/redux/features/agent-creation';

const useAddUser = (data: any) => {

    const { dispatch } = useClientFormStep ()

    // FUNCTION TO ADD A USER
    const addNewUser = () => {
        dispatch(addUser({
            user: data
        }))
    }

    return {
        addNewUser, 
    }
}

export default useAddUser

