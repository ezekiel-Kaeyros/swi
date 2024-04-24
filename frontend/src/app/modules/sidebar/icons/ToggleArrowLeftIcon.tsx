import React from 'react';

type ArrowLeftIconProps = {
  color?: string;
};

const ArrowLeft: React.FC<ArrowLeftIconProps> = ({ color }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99 2.66L5.385 4.265L4.4 5.245C3.985 5.66 3.985 6.335 4.4 6.75L6.99 9.34C7.33 9.68 7.91 9.435 7.91 8.96V6.155V3.04C7.91 2.56 7.33 2.32 6.99 2.66Z"
        fill={color ? `${color}` : 'white'}
      />
    </svg>
  );
};

export default ArrowLeft;
