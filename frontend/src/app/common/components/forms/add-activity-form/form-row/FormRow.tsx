import React, { ReactNode } from 'react';

const FormRow = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col my-4 justify-between">{children}</div>;
};

export default FormRow;
