import { SalesRepActivitiesList } from '../../data';
import ActivityItem from './components/ActivityItem';

type actionType = 'start' | 'expired';

function ActivitiesMaps() {
  return (
    <div className="flex flex-col gap-33 ">
      {SalesRepActivitiesList.map((item, key) => (
        <ActivityItem
          description={item.description}
          status={item.status}
          step={item.step}
          title={item.title}
          key={key}
        />
      ))}
    </div>
  );
}

export default ActivitiesMaps;
