import DelayShowAnimation from '../../../components/delayShowAnimation';
import SlideDownToUp from '../../../components/slideDownToUp';
import { SalesRepActivitiesList } from '../../../data';
import ActivityItem from '../components/ActivityItem';
import ActivityItemTask from '../components/ActivityItemTask';

function ActivitiesTasks() {
  return (
    <DelayShowAnimation>
      <div className="flex flex-col gap-33 ">
        {SalesRepActivitiesList.map((item, key) => (
          <SlideDownToUp key={`actvities-card-item-${key}`}>
            <ActivityItemTask
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

export default ActivitiesTasks;
