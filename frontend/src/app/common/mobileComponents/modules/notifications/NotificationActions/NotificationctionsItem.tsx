import SlideDownToUp from '../../../components/slideDownToUp';

const NotificationctionsItem = ({
  description,
  title,
  icon,
  link,
  isReaded,
}: {
  description: String;
  title: String;
  icon: any;
  link: String;
  isReaded: boolean;
}) => {
  return (
    <SlideDownToUp>
      <div className="w-full flex gap-[4px] mt-3  py-[8px] h-[96px] justify-between">
        <div className=" justify-center  items-center my-auto p-[12px]">
          {icon}
        </div>
        <div className="flex w-full justify-between gap-8 my-auto border-b-bgColorDark border-b-2 pb-2">
          <div className="flex flex-col gap-2">
            <span className="text-[20px] font-bold leading-[20px] text-[#E8E8E8]">
              {title}
            </span>
            <span className="text-[14px] font-normal leading-[20px] text-[#E8E8E8]">
              {description}
            </span>
          </div>

          <div className="flex text-center items-center justify-center pr-[14px] mb-[10px]">
            {isReaded ? (
              ''
            ) : (
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#3772FF" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </SlideDownToUp>

    // <div className="w-full flex  gap-[8px] mt-3 pl-[6px] pr-[8px] py-[8px] h-[96px] justify-between">
    //   <div className=" justify-center  items-center my-auto">{icon}</div>
    //   <div className="flex w-full justify-between gap-8 my-auto border-b-bgColorDark border-b-2 pb-2">
    //     <div className="flex flex-col gap-2">
    //       <span className="text-[20px] font-bold leading-[20px] text-[#E8E8E8]">
    //         {title}
    //       </span>
    //       <span className="text-[14px] font-normal leading-[20px] text-[#E8E8E8]">
    //         {description}
    //       </span>
    //     </div>

    //     <div className="flex text-center items-center justify-center pr-[14px]">
    //       {isReaded ? (
    //         ''
    //       ) : (
    //         <svg
    //           width="8"
    //           height="8"
    //           viewBox="0 0 8 8"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <circle cx="4" cy="4" r="4" fill="#3772FF" />
    //         </svg>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};
export default NotificationctionsItem;
