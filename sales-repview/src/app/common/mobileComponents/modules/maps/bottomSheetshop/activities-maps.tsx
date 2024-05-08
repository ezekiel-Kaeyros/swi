import DelayShowAnimation from '../../../components/delayShowAnimation';
import SlideDownToUp from '../../../components/slideDownToUp';
import { SalesRepActivitiesList } from '../../../data';
import ActivityItem from '../components/ActivityItem';

function ActivitiesMaps() {
  return (
    <DelayShowAnimation>
      <div className="flex flex-col gap-33 ">
        {SalesRepActivitiesList.map((item, key) => (
          <SlideDownToUp key={`actvities-card-item-${key}`}>
            <ActivityItem
              description={item.description}
              status={item.status}
              step={item.step}
              title={item.title}
              key={key}
              displayRightSide
            />
          </SlideDownToUp>
        ))}
      </div>
    </DelayShowAnimation>
  );
}

export default ActivitiesMaps;
