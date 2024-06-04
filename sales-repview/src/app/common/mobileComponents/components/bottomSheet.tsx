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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      BottomSheet
      <path
        d="M4.16676 15.8326L15.8326 4.16669"
        stroke="#BABABA"
        strokeWidth="1.5"
        strokeLinecap="round"
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
  type: 'Simple' | 'withDataActions' | 'empty';
}) {
  return (
    <>
      <div
        className={` ${
          isOpen ? 'flex' : 'hidden'
        } fixed inset-0 z-20 bg-black/40`}
        onClick={() => close()}
      />

      <div
        className={` ${className ? className : ''} ${
          isOpen ? 'transition-all' : 'hidden'
        }
          bg-newPrimaryDark z-30  flex-col rounded-t-[30px]  mt-24 fixed bottom-0 left-0 right-0`}
      >
        <div className="  rounded-t-[16x] flex-1">
          {type === 'empty' && (
            <div className="p-4 w-full mx-auto flex  absolute z-10 bg-black/20 ">
              <div
                className="gap-[4px] cursor-pointer h-[48px] w-48px] p-[14px] rounded-full bg-black/30   transition-all"
                onClick={() => close()}
              >
                <CloseIcone />
              </div>
              <div className="  w-full flex text-center justify-center items-center">
                {' '}
                <span className="text-[24px] -ml-[40px] leading-[28px] text-white font-bold text-black/30 ">
                  {' '}
                  Map
                </span>
              </div>
            </div>
          )}
          {type === 'Simple' && (
            <div className="p-4 w-full mx-auto flex  ">
              <div
                className="gap-[4px] cursor-pointer h-[48px] w-48px] p-[14px] rounded-full  transition-all"
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

          <div className=" h-[100vh] overflow-hidden rounded-t-[30px]">
            {children}
          </div>
        </div>
      </div>
    </>

    // <Drawer open={isOpen}>
    //   <DrawerOverlay className="fixed inset-0 z-50 bg-black/40">
    //     <DrawerContent
    //       className={` ${
    //         className ? className : ''
    //       } bg-newPrimaryDark flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] rounded-t-[10px]`}
    //     >
    //       <DrawerHeader>
    //         <div className="  rounded-t-[16x] flex-1">
    //           {type === 'Simple' && (
    //             <div className="p-4 w-full mx-auto flex  ">
    //               <div
    //                 className="gap-[4px] cursor-pointer h-[48px] w-48px] p-[14px] rounded-full  transition-all"
    //                 onClick={() => close()}
    //               >
    //                 <CloseIcone />
    //               </div>
    //               <div className="  w-full flex text-center justify-center items-center">
    //                 {' '}
    //                 <span className="text-[24px] -ml-[40px] leading-[28px] text-white font-bold">
    //                   {' '}
    //                   {title}
    //                 </span>
    //               </div>
    //             </div>
    //           )}
    //           {type === 'withDataActions' && (
    //             <div className="w-full mx-auto  gap-4  ">
    //               <div className="  w-full  flex flex-col text-start justify-start items-start p-[16px]">
    //                 {' '}
    //                 <span className="text-[28px]  leading-[36px] text-white font-bold font-articulat">
    //                   {' '}
    //                   {title}
    //                 </span>
    //                 <span className="text-[18px]  leading-[28px] text-deemGray font-normal">
    //                   {' '}
    //                   {description && description}
    //                 </span>
    //               </div>
    //             </div>
    //           )}
    //         </div>
    //       </DrawerHeader>
    //       <DrawerFooter>
    //         <Button>Submit</Button>
    //         <DrawerClose>
    //           <Button>Cancel</Button>
    //         </DrawerClose>
    //       </DrawerFooter>
    //     </DrawerContent>
    //   </DrawerOverlay>
    // </Drawer>
  );
}

export default BottomSheet;
