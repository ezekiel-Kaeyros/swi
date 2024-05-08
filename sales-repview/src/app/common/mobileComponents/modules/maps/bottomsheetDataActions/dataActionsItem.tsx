import Link from 'next/link';
import { SalesRepActivities } from '../../../types/SalesRepActivities';

const DataActionItem = ({
  description,
  title,
  icon,
  link,
}: {
  description: String;
  title: String;
  icon: any;
  link: String;
}) => {
  return (
    <div className="w-full flex  gap-[8px] mt-3 pl-[6px] pr-[8px] py-[8px] h-[96px] justify-between cursor-pointer">
      <div className=" justify-center  items-center my-auto">{icon}</div>
      <div className="flex w-full justify-between gap-8 my-auto border-b-bgColorDark border-b-2 pb-2">
        <div className="flex flex-col gap-2">
          <span className="text-[20px] font-bold leading-[20px] text-[#E8E8E8]">
            {title}
          </span>
          <span className="text-[14px] font-normal leading-[20px] text-[#E8E8E8]">
            {description}
          </span>
        </div>

        <div className="flex text-center items-center justify-center pr-[14px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.91003 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91003 4.07996"
              stroke="#BABABA"
              stroke-width="1.5"
              stroke-miterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default DataActionItem;
