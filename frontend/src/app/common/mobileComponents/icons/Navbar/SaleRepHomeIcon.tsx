import React from 'react';

type SaleRepHomeIconProps = {
  color?: string;
};

const SaleRepHomeIcon: React.FC<SaleRepHomeIconProps> = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3583 6.67501L11.9 2.30834C10.8333 1.45834 9.16667 1.45001 8.10834 2.30001L2.65 6.67501C1.86667 7.30001 1.39167 8.55 1.55834 9.53334L2.60834 15.8167C2.85 17.225 4.15834 18.3333 5.58334 18.3333H14.4167C15.825 18.3333 17.1583 17.2 17.4 15.8083L18.45 9.52501C18.6 8.55001 18.125 7.30001 17.3583 6.67501ZM10.625 15C10.625 15.3417 10.3417 15.625 10 15.625C9.65834 15.625 9.375 15.3417 9.375 15V12.5C9.375 12.1583 9.65834 11.875 10 11.875C10.3417 11.875 10.625 12.1583 10.625 12.5V15Z"
        fill={color ? `${color}` : 'white'}
      />
    </svg>
  );
};

export default SaleRepHomeIcon;
