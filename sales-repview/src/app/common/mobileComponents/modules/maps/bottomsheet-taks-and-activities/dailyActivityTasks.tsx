import React from 'react';
import ActivityItem from '../components/ActivityItem';
import { SalesRepActivitiesList } from '../../../data';
import DelayShowAnimation from '../../../components/delayShowAnimation';
import SlideDownToUp from '../../../components/slideDownToUp';

function DailyActivityTasks() {
  return (
    <DelayShowAnimation>
      <div className="flex flex-col h-screen overflow-scroll overflow-y-hidden">
        {SalesRepActivitiesList.map((item, key) => (
          <SlideDownToUp key={`card-item-${key}`}>
            <ActivityItem
              description={item.description}
              status={item.status}
              step={item.step}
              title={item.title}
              key={key}
            />
          </SlideDownToUp>
        ))}
      </div>
    </DelayShowAnimation>
  );
}

export default DailyActivityTasks;
