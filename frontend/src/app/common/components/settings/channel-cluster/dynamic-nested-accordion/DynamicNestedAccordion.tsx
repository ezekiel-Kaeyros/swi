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
      {data?.map((item: { title: string; key: number | string }) => (
        <AccordionItem
          id={item?.key}
          clusterId={clusterId}
          title={item?.title}
          key={item.key}
          content={item}
        />
      ))}
    </div>
  );
};

export default DynamicNestedAccordion;
