'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import PosMap from '@/app/common/components/maps/PosMap';
import { ScrollArea } from '@radix-ui/react-scroll-area';

export default function Layout({ children }: { children: React.ReactNode }) {
  const addClick = useSelector(
    (state: RootState) => state.pointOfSaleViewReducer.toggleMap
  );
  // console.log('should the map be clicked', addClick);

  return (
    // <div className="flex flex-col lg:flex-row  h-[calc(100%-800px)] dark:bg-newPrimaryDark">
    //   <div className="w-7/12 overflow-y-scroll h-full ">{children}</div>
    //   <div className="w-9/12 overflow-y-hidden">
    //     {/* <ShopPointOfSalesMap address="Bonnamoussadi, Douala" onMapClick={addClick}/> */}
    //     <PosMap />
    //   </div> dark:bg-newPrimaryDark
    // </div>

    // <ScrollArea className="flex  h-screen  ">
    //   <ScrollArea className="w-7/12 overflow-y-scroll ">{children}</ScrollArea>
    //   <ScrollArea className="w-9/12 overflow-y-hidden">
    //     {/* <PosMap /> */}
    //   </ScrollArea>
    // </ScrollArea>
    <div className="flex  h-[calc(100vh-100px)]">
      <div className="w-7/12 overflow-y-hidden flex justify-center">{children}</div>
      <div className="w-9/12 overflow-y-hidden">
        {' '}
        <PosMap />
      </div>
    </div>
  );
}
