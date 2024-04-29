import { SalesRepActivities } from '../../../types/SalesRepActivities';

type actionType = 'start' | 'expired';

const ActivityValue = ({
  type = 'start',
  triggerAction,
}: {
  type: actionType;
  triggerAction?: () => void;
}) => {
  return type === 'start' ? (
    <span
      onClick={() => triggerAction && triggerAction()}
      className="bg-bgColorDark cursor-pointer text-[12px] flex text-center items-center justify-center text-white  gap-[4px] w-[87px] h-[28px]  rounded-[30px]"
    >
      {' '}
      Start activity{' '}
    </span>
  ) : (
    <span
      onClick={() => triggerAction && triggerAction()}
      className="bg-[#600E18] text-[#F57B8A] cursor-pointer text-[12px] flex text-center items-center justify-center   gap-[2px] w-[80px] h-[28px]  rounded-[8px]"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M5.99998 11C8.39413 11 10.335 9.05911 10.335 6.66496C10.335 4.2708 8.39413 2.32996 5.99998 2.32996C3.60582 2.32996 1.66498 4.2708 1.66498 6.66496C1.66498 9.05911 3.60582 11 5.99998 11Z"
          fill="#F24F63"
        />
        <path
          d="M6 6.875C5.795 6.875 5.625 6.705 5.625 6.5V4C5.625 3.795 5.795 3.625 6 3.625C6.205 3.625 6.375 3.795 6.375 4V6.5C6.375 6.705 6.205 6.875 6 6.875Z"
          fill="#F57B8A"
        />
        <path
          d="M7.44501 1.725H4.55501C4.35501 1.725 4.19501 1.565 4.19501 1.365C4.19501 1.165 4.35501 1 4.55501 1H7.44501C7.64501 1 7.80501 1.16 7.80501 1.36C7.80501 1.56 7.64501 1.725 7.44501 1.725Z"
          fill="#F57B8A"
        />
      </svg>
      Expired{' '}
    </span>
  );
};

const ActivitieStep = ({
  value,
  className,
}: {
  value: React.ReactNode | string;
  className?: string;
}) => {
  return (
    <div
      className={` ${
        className && className
      } flex text-center items-center justify-center text-white `}
    >
      {' '}
      {value ? value : '01'}
    </div>
  );
};

const ActivityItem = ({
  description,
  status,
  step,
  title,
  displayRightSide,
}: SalesRepActivities) => {
  return (
    <div className="w-full flex gap-[8px] mt-3 pl-[6px] pr-[8px] py-[8px] h-[96px] justify-between">
      <div className="flex justify-center  items-start mt-2">
        {status === 'start' ? (
          <ActivitieStep
            className="bg-[#5F05D1] p-[10px] gap-[4px] w-[45px] h-[45px] rounded-[10px] "
            value={step}
          />
        ) : (
          <ActivitieStep
            className="bg-[#162E66] text-[12px] px-[16px] py-[14px] gap-[4px] w-[56px] h-[56px] rounded-full"
            value={step}
          />
        )}
      </div>
      <div className="flex w-full gap-8 my-auto border-b-bgColorDark border-b-2 pb-2">
        <div className="flex flex-col gap-2">
          <span className="text-[20px] font-bold leading-[20px] text-[#E8E8E8]">
            {title}
          </span>
          <span className="text-[14px] font-normal leading-[20px] text-[#E8E8E8]">
            {description}
          </span>
        </div>
        {displayRightSide && (
          <div className="flex text-center items-center justify-center pr-[14px]">
            <ActivityValue type={status} />
          </div>
        )}
      </div>
    </div>
  );
};
export default ActivityItem;
