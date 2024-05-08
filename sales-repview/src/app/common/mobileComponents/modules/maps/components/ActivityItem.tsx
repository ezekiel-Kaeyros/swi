import SlideInComponent from '@/app/common/components/slidIn-component/SlideInComponent';
import { SalesRepActivities } from '../../../types/SalesRepActivities';
import { useState } from 'react';
import CustomButton from '@/app/common/components/button/CustonButton';
import CustomModal from '@/app/common/components/modal/Modal';

type actionType = 'start' | 'expired' | 'done';

const ActivityValue = ({
  type = 'start',
  triggerAction,
}: {
  type: actionType;
  triggerAction?: () => void;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState<actionType>(type);
  return (
    <>
      {status === 'start' ? (
        <span
          onClick={() => setOpenModal(true)}
          className="bg-bgColorDark cursor-pointer text-[12px] flex text-center items-center justify-center text-white  gap-[4px] w-[87px] h-[28px]  rounded-[30px]"
        >
          {' '}
          Start activity{' '}
        </span>
      ) : status === 'expired' ? (
        <div className="flex flex-col gap-2 items-center justify-center">
          <span
            onClick={() => setStatus('done')}
            className="bg-bgColorDark cursor-pointer text-[12px] flex text-center items-center justify-center text-white  gap-[4px] w-[87px] h-[28px]  rounded-full"
          >
            {' '}
            Mark as done{' '}
          </span>
          <span
            onClick={() => triggerAction && triggerAction()}
            className="bg-[#162E66]/70 whitespace-nowrap py-2   text-[#5F8EFF] cursor-pointer text-[12px] flex text-center items-center justify-center   gap-[4px] w-[94px] h-[20px]  rounded-[4px]"
          >
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 6.875C6.295 6.875 6.125 6.705 6.125 6.5V4C6.125 3.795 6.295 3.625 6.5 3.625C6.705 3.625 6.875 3.795 6.875 4V6.5C6.875 6.705 6.705 6.875 6.5 6.875Z"
                fill="#BABABA"
              />
              <path
                d="M7.94507 1.725H5.05507C4.85507 1.725 4.69507 1.565 4.69507 1.365C4.69507 1.165 4.85507 1 5.05507 1H7.94507C8.14507 1 8.30507 1.16 8.30507 1.36C8.30507 1.56 8.14507 1.725 7.94507 1.725Z"
                fill="#5F8EFF"
              />
              <path
                opacity="0.4"
                d="M8.00004 9.98502V8.51502C8.00004 7.88002 8.38004 7.50002 9.01504 7.50002H10.485C10.58 7.50002 10.665 7.51002 10.75 7.53002C10.805 7.25002 10.835 6.96002 10.835 6.66502C10.835 4.27502 8.89004 2.33002 6.50004 2.33002C4.11004 2.33002 2.16504 4.27502 2.16504 6.66502C2.16504 9.05502 4.11004 11 6.50004 11C7.10504 11 7.68004 10.875 8.20504 10.65C8.07504 10.48 8.00004 10.26 8.00004 9.98502Z"
                fill="#5F8EFF"
              />
              <path
                d="M10.485 7.5H9.015C8.38 7.5 8 7.88 8 8.515V9.985C8 10.62 8.38 11 9.015 11H10.485C11.12 11 11.5 10.62 11.5 9.985V8.515C11.5 7.88 11.12 7.5 10.485 7.5ZM10.345 9.73L9.755 10.07C9.635 10.14 9.515 10.175 9.405 10.175C9.32 10.175 9.245 10.155 9.175 10.115C9.015 10.02 8.925 9.835 8.925 9.59V8.91C8.925 8.665 9.015 8.48 9.175 8.385C9.335 8.29 9.54 8.31 9.755 8.43L10.345 8.77C10.555 8.895 10.675 9.065 10.675 9.25C10.675 9.435 10.56 9.605 10.345 9.73Z"
                fill="#5F8EFF"
              />
            </svg>
            <span>01:01:59</span>
          </span>
        </div>
      ) : status === 'done' ? (
        <div className="flex flex-col gap-2 items-center justify-center">
          <span className="bg-[#05522B]/70 whitespace-nowrap py-3   text-[#6DE2A6] cursor-pointer text-[12px] flex text-center items-center justify-center   gap-[4px] w-[67px] h-[20px]  rounded-[4px]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M6.00004 11C8.39419 11 10.335 9.05911 10.335 6.66496C10.335 4.2708 8.39419 2.32996 6.00004 2.32996C3.60588 2.32996 1.66504 4.2708 1.66504 6.66496C1.66504 9.05911 3.60588 11 6.00004 11Z"
                fill="#6DE2A6"
              />
              <path
                d="M6 6.875C5.795 6.875 5.625 6.705 5.625 6.5V4C5.625 3.795 5.795 3.625 6 3.625C6.205 3.625 6.375 3.795 6.375 4V6.5C6.375 6.705 6.205 6.875 6 6.875Z"
                fill="#6DE2A6"
              />
              <path
                d="M7.44507 1.725H4.55507C4.35507 1.725 4.19507 1.565 4.19507 1.365C4.19507 1.165 4.35507 1 4.55507 1H7.44507C7.64507 1 7.80507 1.16 7.80507 1.36C7.80507 1.56 7.64507 1.725 7.44507 1.725Z"
                fill="#6DE2A6"
              />
            </svg>

            <span>On time</span>
          </span>
        </div>
      ) : (
        <span
          onClick={() => triggerAction && triggerAction()}
          className="bg-[#600E18] whitespace-nowrap py-2   text-[#F57B8A] cursor-pointer text-[12px] flex text-center items-center justify-center   gap-[4px] w-[94px] h-[20px]  rounded-[4px]"
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
          Off schedule{' '}
        </span>
      )}

      <CustomModal
        title="Start Activity "
        isOpen={openModal}
        placement="center"
        size="xs"
        onClose={() => setOpenModal(false)}
        classStyle="bg-[#1C1C1C] "
      >
        <div className=" gap-8 flex-col w-full  ">
          <span>
            {' '}
            Are you sure you want to start this actitivit your action will be
            irreversible
          </span>
          <div className=" flex items-end w-full">
            <div className="flex  gap-4 w-full items-end place-content-end ">
              <div>
                <CustomButton
                  onClick={() => setOpenModal(false)}
                  typeOfButton="Normal"
                  className="!text-[1rem] !w-[95px] gap-4 !h-[36px] !bg-transparent !flex !items-center !justify-center leading-1"
                  title=" Cancel"
                />
              </div>
              <div>
                {' '}
                <CustomButton
                  typeOfButton="Infos"
                  title="Start now"
                  className="!text-[1rem] !w-[95px] gap-4 !h-[36px] !bg-[#3267E6] !flex !items-center !justify-center leading-1"
                  onClick={() => {
                    setStatus('expired');
                    setOpenModal(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </CustomModal>
    </>
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
    <div className="w-full flex gap-[10px] p-[10px] justify-between">
      <div className="flex justify-center  items-start ">
        <ActivitieStep
          className="bg-[#5F05D1] p-[10px] gap-[4px] w-[45px] h-[45px] rounded-[10px] "
          value={step}
        />
      </div>
      <div className="flex w-full gap-8 justify-between my-auto border-b-bgColorDark border-b-2 pb-2">
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
