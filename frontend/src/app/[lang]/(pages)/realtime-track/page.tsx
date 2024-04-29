"use client"

import React, {useEffect} from 'react'
import { usePathname } from 'next/navigation'
import { RightArrowIcon } from '@/app/common/components/svg/SvgIcon'
import io from 'socket.io-client';
import ProfileDetail from './profileDetail'
import Tabs from './tabs'
import DeliveryDestinations from './deliveryDestinations'

// Importing file system library (`promises`) to use external file extensions 
// import { promises as fs } from 'fs';

// import './styles.css'


const RealtimeTrackingProfileView = () => {

    useEffect(() => {
        const socket = io('http://localhost:4000');
        console.log(socket);
    
        socket.on('connect', () => {
          console.log('Connected to Socket.IO server');

          const keyData = {
            "agentID": 1,
            "agentManagerID": 20,
            "location": {
                "latitude": "1.323232",
                "longitude": "32.17238343"
            }
          }
          // Emit custom event to the server
          socket.emit('receive position', keyData);
        });
    
        socket.on('disconnect', () => {
          console.log('Disconnected from Socket.IO server');
        });
    
        return () => {
          socket.disconnect();
        };
      }, []);

    const tabs = [
        { 
            label: 'Tracking', content: '' },
        { label: 'Details', content: <DeliveryDestinations/> },
      ];

    const pathname = usePathname()

    // Remove "realtime-tracking/profile" from the pathname
    const modifiedPathname = pathname.replace('/en/', '').replace('-', ' ').replace('/profile-details', '');

    // Capitalize the words in the modified pathname
    const capitalizeString = (str:  string) => {
        const newString = str.split('/').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        return newString;
    }

    return (
        <div className='top-[72px] left-[78px] mt-[72px] bottom-[72px] px-[32px] py-[16px] gap-5 opacity-1' style={{
            fontFamily: "articulate"
        }}>
            <div className='absolute top-9 font-extrabold text-3xl'>
                {capitalizeString(modifiedPathname)}
            </div>
            <hr className='mt-4' />
            <div className='flex flex-row p-[6px] text-[16px] font-medium leading-4 text-left h-9 gap-2 mt-[30px]'>
                <div>
                    {capitalizeString(modifiedPathname)}
                </div>
                <div>
                    <RightArrowIcon/>
                </div>
                <div className='text-base font-medium text-left'>
                    Profile
                </div>
            </div>
            <ProfileDetail/>
            <Tabs tabs={tabs} />
            
            
        </div>
    )
}

export default RealtimeTrackingProfileView