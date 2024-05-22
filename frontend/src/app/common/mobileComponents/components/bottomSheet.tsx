import React, { ReactNode } from 'react';

const CloseIcone = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16748 4.16669L15.8334 15.8326"
        stroke="#BABABA"
        stroke-width="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      BottomSheet
      <path
        d="M4.16676 15.8326L15.8326 4.16669"
        stroke="#BABABA"
        stroke-width="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
function BottomSheet({
  isOpen,
  close,
  title,
  children,
  type,
  className,
  description,
}: {
  isOpen: boolean;
  className?: String;
  close: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  type: 'Simple' | 'withDataActions';
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40"
      onClick={() => {
        if (type === 'withDataActions') {
          close();
        }
      }}
    >
      <div
        className={` ${className ? className : ''}
          bg-newPrimaryDark flex flex-col rounded-t-[10px]  mt-24 fixed bottom-0 left-0 right-0`}
      >
        <div className="  rounded-t-[16x] flex-1">
          {type === 'Simple' && (
            <div className="p-4 w-full mx-auto flex  ">
              <div
                className="gap-[4px] h-[48px] w-48px] p-[14px] rounded-full  transition-all"
                onClick={() => close()}
              >
                <CloseIcone />
              </div>
              <div className="  w-full flex text-center justify-center items-center">
                {' '}
                <span className="text-[24px] -ml-[40px] leading-[28px] text-white font-bold">
                  {' '}
                  {title}
                </span>
              </div>
            </div>
          )}
          {type === 'withDataActions' && (
            <div className="w-full mx-auto  gap-4  ">
              <div className="  w-full  flex flex-col text-start justify-start items-start p-[16px]">
                {' '}
                <span className="text-[28px]  leading-[36px] text-white font-bold font-articulat">
                  {' '}
                  {title}
                </span>
                <span className="text-[18px]  leading-[28px] text-deemGray font-normal">
                  {' '}
                  {description && description}
                </span>
              </div>
            </div>
          )}

          <div className=" h-[100vh] overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default BottomSheet;
