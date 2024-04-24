import React from 'react';
import AccordionItem from './accordion-item/AccordionItem';

const DynamicNestedAccordion = ({
  data,
  clusterId,
}: {
  data: any;
  clusterId: string | number;
}) => {
  return (
    <div className="my-4">
      {data?.map((item: any) => {
        return (<AccordionItem
          id={item?._id}
          clusterId={clusterId}
          title={item?.name as string}
          key={item._id}
          content={item}
        />)
      })}
    </div>
  );
};

export default DynamicNestedAccordion;
