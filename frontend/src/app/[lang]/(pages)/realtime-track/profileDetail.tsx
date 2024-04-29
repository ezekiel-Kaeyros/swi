"use client"

import React from 'react'
import { ShopIcon } from '@/app/common/components/svg/SvgIcon'
import { agentDelivery } from './fakeData'


interface Activity {
    activity: string;
    startTime: string;
    status: string;
}
  
interface Destination {
    location: string;
    subLocation: string;
    shopType: string;
    activities: Activity[];
}

const ProfileDetail = () => {

    let totalActivities = 0;
    let completedActivities = 0;

    agentDelivery.destinations.forEach(destination => {
        destination.activities.forEach(activity => {
            totalActivities++;
            if (activity.status === "completed") {
                completedActivities++;
            }
        });
    });

    // Getting the latest `starttime` from Json data
    const findLatestStartTime = (destinations: Destination[]): string => {
        // Array to store all start times
        const allStartTimes: string[] = [];
  
        // Extracting all start times from destinations
        destinations.forEach(destination => {
            destination.activities.forEach(activity => {
                allStartTimes.push(activity.startTime);
            });
        });
  
        // Finding the latest start time from the array
        let latestStartTime: string = ""; // Initializing with an empty string or a time that will always be earlier than any valid start time
        
        allStartTimes.forEach(startTime => {
            if (startTime > latestStartTime) {
                latestStartTime = startTime;
            }
        });
  
        return latestStartTime;
    }
  
  

    const latestStartTime: string = findLatestStartTime(agentDelivery.destinations);

    const calculateTimeLeft = (latestStartTime: string): { hours: number; minutes: number } | string => {
        // Getting the current time
        const now: Date = new Date();
        const currentHours: number = now.getHours();
        const currentMinutes: number = now.getMinutes();
      
        // Parsing the latest start time
        const [latestHours, latestMinutes] = latestStartTime.split(":").map(Number);
      
        // Calculating the current time in minutes
        const currentTimeInMinutes: number = currentHours * 60 + currentMinutes;
      
        // Calculating the latest start time in minutes
        const latestTimeInMinutes: number = latestHours * 60 + latestMinutes;
      
        // If the latest start time is before the current time, return "Over time"
        if (latestTimeInMinutes < currentTimeInMinutes) {
            return "Over time";
        }
      
        // Calculating the difference in minutes
        let timeDifferenceMinutes: number = latestTimeInMinutes - currentTimeInMinutes;
      
        // Calculating hours and minutes from the difference
        const hoursLeft: number = Math.floor(timeDifferenceMinutes / 60);
        const minutesLeft: number = timeDifferenceMinutes % 60;
      
        return { hours: hoursLeft, minutes: minutesLeft };
    }

    // Comparing current date with `startAt` in Json Data
    const compareDates = (startAt: string): string => {
        const currentDate: Date = new Date();
        const startDate: Date = new Date(startAt);
      
        // Extracting year, month, and day components of the current date
        const currentYear: number = currentDate.getFullYear();
        const currentMonth: number = currentDate.getMonth();
        const currentDay: number = currentDate.getDate();
      
        // Extracting year, month, and day components of the startAt date
        const startYear: number = startDate.getFullYear();
        const startMonth: number = startDate.getMonth();
        const startDay: number = startDate.getDate();
      
        // Comparing the dates
        if (startYear !== currentYear) {
          return startYear > currentYear ? "Future Deliveries" : "Passed Deliveries";
        } else if (startMonth !== currentMonth) {
          return startMonth > currentMonth ? "Future Deliveries" : "Passed Deliveries";
        } else if (startDay !== currentDay) {
          return startDay > currentDay ? "Future Deliveries" : "Passed Deliveries";
        } else {
          return "Equal to";
        }
      }
      
      // Usage
      const comparisonResult = compareDates(agentDelivery.startAt);
      
      
      
    // Usage
    const timeLeft = calculateTimeLeft(latestStartTime);
    let timeLeftString: string;

    if (comparisonResult != "Equal to") {
        timeLeftString = comparisonResult;
    } else if (typeof timeLeft === "string"){
        if (timeLeft.toLowerCase() == "over time") {
            timeLeftString = "Working over time"
        } else {
            timeLeftString = timeLeft;
        }
    } else {
        const { hours, minutes } = timeLeft;
        timeLeftString = `${hours}h${minutes}mins left`; // Concatenating hours, minutes, and static text
    } 
      

    return (
        <div className='flex justify-between mt-6'>
            <div className='h-14 gap-0 flex-col justify-between'>
                <div className='text-2xl font-semibold text-left'>
                    {agentDelivery.agentName}
                </div>
                <div>
                    {agentDelivery.agentStatus}
                </div>
            </div>
            <div className='flex flex-row flex-wrap gap-[6px]'>
                <div className='text-sm font-medium text-left'>
                    <div className='flex flex-row h-6 p-1.5 rounded items-center' style={{
                        color: 'gray', backgroundColor: '#fff', border: '1px 0px 0px 0px #F3F3F3'
                    }}>
                        <ShopIcon/>
                        <div>
                            {completedActivities} / {totalActivities} Shops
                        </div>
                    </div>
                </div>
                <div>
                    <div className='h-6 p-1.5 gap-1.5 rounded flex items-center' style={{
                        backgroundColor: '#05522B', color: '#6DE2A6'
                    }}>
                        <div>
                            {timeLeftString}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetail