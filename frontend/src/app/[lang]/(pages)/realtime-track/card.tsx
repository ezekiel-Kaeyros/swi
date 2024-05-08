import React, {useEffect, useRef} from 'react';
import { ShopIconWhite, CompletedIcon, PendingIcon } from '@/app/common/components/svg/SvgIcon';

interface Activity {
  activity: string;
  startTime: string;
  status: string;
}

interface Destination {
  location: string;
  subLocation: string;
  shopType: string; // Add shopType to Destination interface
  activities: Activity[];
}

interface CardProps {
  destination: Destination;
}

const cardHeader: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
};

const Card: React.FC<CardProps> = ({ destination }) => {
  const completedActivities = destination.activities.filter(activity => activity.status === "completed");
  const numberOfCompletedActivities = completedActivities.length;

  // Updating the size of "taskCompletion" class based on content size
  const taskCompletionRef = useRef<HTMLDivElement>(null);
  const contentSize = numberOfCompletedActivities + destination.activities.length;
  useEffect(() => {
    const updateWidthHeight = () => {
      if (taskCompletionRef.current) {
        const contentWidth = taskCompletionRef.current.scrollWidth;
        taskCompletionRef.current.style.width = '40px';
        taskCompletionRef.current.style.height = '40px';
      }
    };
    

    updateWidthHeight();
    window.addEventListener('resize', updateWidthHeight);

    return () => {
      window.removeEventListener('resize', updateWidthHeight);
    };
  }, []);

  // Define background color based on shopType
  let backgroundColor = '';
  switch (destination.shopType) {
    case 'wholesaling':
      backgroundColor = '#5F05D1';
      break;
    case 'modern trade':
      backgroundColor = '#D99125';
      break;
    case 'general trade':
      backgroundColor = '#28666E';
      break;
    case 'ecommerce':
      backgroundColor = '#BD2D87';
      break;
    default:
      backgroundColor = '#ffffff'; // Default background color
      break;
  }

  const shopIconContainer: React.CSSProperties = {
    backgroundColor, // Apply dynamic background color
  };


  return (
    <div className='p-2.5 m-2.5 w-72'>
      <div className='flex flex-row gap-3.5'>
        <div className='w-9 h-9 gap-0 flex justify-center items-center rounded' style={shopIconContainer}>
          <ShopIconWhite />
        </div>
        <div className='text-sm font-medium text-left flex-1'>
          {destination.location} <br />
          <small className='text-xs font-normal text-left'>
            {destination.subLocation}
          </small>
        </div>
        <div 
          ref={taskCompletionRef}
          className='gap-2.5 rounded-full text-xs font-medium text-center content-center ml-10'
          style={{
            border: '5px solid #05522B',
          }}>
          <span>
            {numberOfCompletedActivities}/{destination.activities.length}
          </span>
        </div>
      </div>

      <ul className='gap-2'>
        {destination.activities.map((activity, index) => (
          <li key={index} className='my-2.5' >
            <div className='flex flex-col'>
              <div className='text-base font-medium text-left gap-5'>
                  {activity.activity}
                <div className='flex flex-row justify-between'>
                    {activity.status === 'completed' && <CompletedIcon/>}
                    {activity.status === 'pending' && <PendingIcon/>}
                    <span className='text-xs' style={{
                      color: "#585757"
                    }}>
                      {activity.startTime}
                    </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
