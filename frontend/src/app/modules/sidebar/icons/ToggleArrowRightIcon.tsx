import React from 'react';

type ToggleArrowRightIconProps = {
  color?: string;
};

const ToggleArrowRightIcon: React.FC<ToggleArrowRightIconProps> = ({
  color,
}) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.6 5.245L6.615 4.26L5.01 2.655C4.67 2.32 4.09 2.56 4.09 3.04V6.155V8.96C4.09 9.44 4.67 9.68 5.01 9.34L7.6 6.75C8.015 6.34 8.015 5.66 7.6 5.245Z"
        fill={color ? `${color}` : 'white'}
      />
    </svg>
  );
};

export default ToggleArrowRightIcon;
