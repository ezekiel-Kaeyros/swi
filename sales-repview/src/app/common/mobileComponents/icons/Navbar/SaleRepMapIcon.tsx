import React from 'react';

type SaleRepMapIconProps = {
  color?: string;
};

const SaleRepMapIcon: React.FC<SaleRepMapIconProps> = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4" clipPath="url(#clip0_3163_9096)">
        <path
          d="M6.35833 2.975C6.50782 2.89347 6.66667 3.01891 6.66667 3.18918V14.4666C6.66667 14.6639 6.53158 14.8305 6.35833 14.925L4.4 16.0417C3.03333 16.825 1.90833 16.175 1.90833 14.5917V6.48334C1.90833 5.95834 2.28333 5.30834 2.75 5.04167L6.35833 2.975Z"
          fill={color ? `${color}` : 'white'}
        />
        <path
          d="M12.2219 5.06227C12.3922 5.14662 12.5 5.32026 12.5 5.51033V16.2869C12.5 16.6554 12.115 16.8973 11.783 16.7374L8.40798 15.1113C8.23498 15.028 8.125 14.8529 8.125 14.6609V3.8389C8.125 3.46804 8.51456 3.22625 8.8469 3.39084L12.2219 5.06227Z"
          fill={color ? `${color}` : 'white'}
        />
        <path
          d="M18.3333 5.40834V13.5167C18.3333 14.0417 17.9583 14.6917 17.4917 14.9583L14.707 16.5543C14.3736 16.7453 13.9583 16.5047 13.9583 16.1205V5.32366C13.9583 5.14414 14.0546 4.97841 14.2105 4.88942L15.8417 3.95834C17.2083 3.175 18.3333 3.825 18.3333 5.40834Z"
          fill={color ? `${color}` : 'white'}
        />
      </g>
      <defs>
        <clipPath id="clip0_3163_9096">
          <rect width="20" height="20" fill={color ? `${color}` : 'white'} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SaleRepMapIcon;
