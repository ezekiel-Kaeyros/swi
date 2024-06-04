import Link from 'next/link';
import { SalesRepActivities } from '../../../../types/SalesRepActivities';
import { LeftIcon } from '@/core/svg/SvgIcon';

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
          <LeftIcon />
        </div>
      </div>
    </div>
  );
};
export default DataActionItem;
