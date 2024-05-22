import PointOfSalesList from '@/app/common/components/point-of-sales/point-of-sales-list/PointOfSalesList';

const ActivePOS = () => {
  return (
    <div className="flex-col gap-4">
      <div className=" w-full min-h-full snap-y px-4">
        {/* Point of sales list */}
        <PointOfSalesList />
      </div>
    </div>
  );
};
export default ActivePOS;
