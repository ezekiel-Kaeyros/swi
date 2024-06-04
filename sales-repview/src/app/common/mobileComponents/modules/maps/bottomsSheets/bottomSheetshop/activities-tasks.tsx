import { useManagePosInStore } from '@/app/hooks/API/usePos';
import DelayShowAnimation from '../../../../components/delayShowAnimation';
import SlideDownToUp from '../../../../components/slideDownToUp';
import { SalesRepActivitiesList } from '../../../../data';
import ActivityItem from '../../components/ActivityItem';
import ActivityItemTask from '../../components/ActivityItemTask';
import ActivitDbShopItemTask from '../../components/activitDbShopItemTask';

function ActivitiesTasks() {
  const { road, shopData, pos, dispatch } = useManagePosInStore();

  const roadData = shopData?.activities;
  const taskList = roadData?.taskIds;
  console.log(shopData, '----------------------++++++++++++++++++++++');
  return (
    <DelayShowAnimation>
      <div className="flex flex-col gap-33 ">
        {(taskList || []).map((task, key) => {
          return (
            <SlideDownToUp key={`actvities-card-item-tasks-${task?._id}`}>
              <ActivitDbShopItemTask
                activitie={task.activityItem}
                activityItem={task.activities}
                step={
                  task.activityItem.time <= 3 ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4917 1.66666H6.50835C3.47502 1.66666 1.66669 3.47499 1.66669 6.50832V13.4917C1.66669 16.525 3.47502 18.3333 6.50835 18.3333H13.4917C16.525 18.3333 18.3334 16.525 18.3334 13.4917V6.50832C18.3334 3.47499 16.525 1.66666 13.4917 1.66666ZM8.30835 12.4167L6.43335 14.2917C6.30835 14.4167 6.15002 14.475 5.99169 14.475C5.83335 14.475 5.66669 14.4167 5.55002 14.2917L4.92502 13.6667C4.67502 13.425 4.67502 13.025 4.92502 12.7833C5.16669 12.5417 5.55835 12.5417 5.80835 12.7833L5.99169 12.9667L7.42502 11.5333C7.66669 11.2917 8.05835 11.2917 8.30835 11.5333C8.55002 11.775 8.55002 12.175 8.30835 12.4167ZM8.30835 6.58332L6.43335 8.45832C6.30835 8.58332 6.15002 8.64166 5.99169 8.64166C5.83335 8.64166 5.66669 8.58332 5.55002 8.45832L4.92502 7.83332C4.67502 7.59166 4.67502 7.19166 4.92502 6.94999C5.16669 6.70832 5.55835 6.70832 5.80835 6.94999L5.99169 7.13332L7.42502 5.69999C7.66669 5.45832 8.05835 5.45832 8.30835 5.69999C8.55002 5.94166 8.55002 6.34166 8.30835 6.58332ZM14.6334 13.85H10.2584C9.91669 13.85 9.63335 13.5667 9.63335 13.225C9.63335 12.8833 9.91669 12.6 10.2584 12.6H14.6334C14.9834 12.6 15.2584 12.8833 15.2584 13.225C15.2584 13.5667 14.9834 13.85 14.6334 13.85ZM14.6334 8.01666H10.2584C9.91669 8.01666 9.63335 7.73332 9.63335 7.39166C9.63335 7.04999 9.91669 6.76666 10.2584 6.76666H14.6334C14.9834 6.76666 15.2584 7.04999 15.2584 7.39166C15.2584 7.73332 14.9834 8.01666 14.6334 8.01666Z"
                        fill={`white`}
                      />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7933 1.33333H5.20668C2.78001 1.33333 1.33334 2.78 1.33334 5.20667V10.7867C1.33334 13.22 2.78001 14.6667 5.20668 14.6667H10.7867C13.2133 14.6667 14.66 13.22 14.66 10.7933V5.20667C14.6667 2.78 13.22 1.33333 10.7933 1.33333ZM11.5067 6.64L9.96668 8.62667C9.77334 8.87333 9.50001 9.03333 9.18668 9.06667C8.87334 9.10667 8.56668 9.02 8.32001 8.82667L7.10001 7.86667C7.05334 7.82667 7.00001 7.82667 6.97334 7.83333C6.94668 7.83333 6.90001 7.84667 6.86001 7.9L5.27334 9.96C5.17334 10.0867 5.02668 10.1533 4.88001 10.1533C4.77334 10.1533 4.66668 10.12 4.57334 10.0467C4.35334 9.88 4.31334 9.56667 4.48001 9.34667L6.06668 7.28667C6.26001 7.04 6.53334 6.88 6.84668 6.84C7.15334 6.8 7.46668 6.88667 7.71334 7.08L8.93334 8.04C8.98001 8.08 9.02668 8.08 9.06001 8.07333C9.08668 8.07333 9.13334 8.06 9.17334 8.00667L10.7133 6.02C10.88 5.8 11.2 5.76 11.4133 5.93333C11.6333 6.11333 11.6733 6.42667 11.5067 6.64Z"
                        fill={`white`}
                      />
                    </svg>
                  )
                }
                pos={shopData?.shopData!}
                status={'start'}
                // title={item.title}
                displayRightSide
              />
            </SlideDownToUp>
          );
        })}
      </div>
    </DelayShowAnimation>
  );
}

export default ActivitiesTasks;
