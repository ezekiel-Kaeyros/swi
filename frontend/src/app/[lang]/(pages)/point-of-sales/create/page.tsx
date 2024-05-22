import Card from '@/app/common/components/card/Card';
import AddPointOfSalesForm from '@/app/common/components/forms/add-point-of-sales-form/AddPointOfSalesForm';
import BackButton from '@/app/common/components/back-button/BackButton';

export default function PointOfSale({}) {
  return (
    <div className="h-[85vh] py-3 2xl:w-11/12 flex justify-center">
      <Card>
        <div className="flex items-center">
          <div>
            <BackButton href="point-of-sales" />
          </div>

          <h1 className="ml-16 font-bold">Create Point of sales</h1>
        </div>

        {/* Add point of sales form */}
        <div className="h-full pr-3 overflow-auto pb-[10rem] pt-[2rem]">
          <AddPointOfSalesForm />
        </div>
        {/* <div className='h-[500px] p-3'>
          hi
        </div> */}
      </Card>
    </div>
  );
}
