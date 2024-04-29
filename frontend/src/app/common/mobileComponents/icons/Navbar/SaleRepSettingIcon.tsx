import React from 'react';

type SaleRepSettingsIconProps = {
  color?: string;
};

const SaleRepSettingsIcon: React.FC<SaleRepSettingsIconProps> = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4917 1.66666H6.50833C3.475 1.66666 1.66667 3.47499 1.66667 6.50832V13.4833C1.66667 16.525 3.475 18.3333 6.50833 18.3333H13.4833C16.5167 18.3333 18.325 16.525 18.325 13.4917V6.50832C18.3333 3.47499 16.525 1.66666 13.4917 1.66666ZM14.3833 8.29999L12.4583 10.7833C12.2167 11.0917 11.875 11.2917 11.4833 11.3333C11.0917 11.3833 10.7083 11.275 10.4 11.0333L8.875 9.83332C8.81667 9.78332 8.75 9.78332 8.71667 9.79166C8.68333 9.79166 8.625 9.80832 8.575 9.87499L6.59167 12.45C6.46667 12.6083 6.28333 12.6917 6.1 12.6917C5.96667 12.6917 5.83333 12.65 5.71667 12.5583C5.44167 12.35 5.39167 11.9583 5.6 11.6833L7.58333 9.10832C7.825 8.79999 8.16667 8.59999 8.55833 8.54999C8.94167 8.49999 9.33333 8.60832 9.64167 8.84999L11.1667 10.05C11.225 10.1 11.2833 10.1 11.325 10.0917C11.3583 10.0917 11.4167 10.075 11.4667 10.0083L13.3917 7.52499C13.6 7.24999 14 7.19999 14.2667 7.41666C14.5417 7.64166 14.5917 8.03332 14.3833 8.29999Z"
        fill={color ? `${color}` : 'white'}
      />
    </svg>
  );
};

export default SaleRepSettingsIcon;