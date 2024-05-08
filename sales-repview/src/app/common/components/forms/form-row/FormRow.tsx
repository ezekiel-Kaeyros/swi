import React, { ReactNode } from 'react';

const FormRow = ({ content1, content2 }: { content1: any; content2?: any }) => {
  return (
    <div className="flex my-4 w-full flex-col space-y-2 lg:space-x-6 lg:space-y-0 lg:flex-row">
      <div className="w-full">{content1}</div>
      {content2 && <div className="w-full">{content2}</div>}
    </div>
  );
};

export default FormRow;
