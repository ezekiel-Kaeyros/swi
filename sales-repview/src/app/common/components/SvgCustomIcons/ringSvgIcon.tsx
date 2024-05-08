import React from 'react';
import { SvgCustomIconProps } from './svgCustomIcons';

const HeaderBellSvgIcon: React.FC<SvgCustomIconProps> = ({ color }) => {
  return (
    <svg
      width="30"
      height="40"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M16.1168 12.0751L15.2834 10.6917C15.1084 10.3834 14.9501 9.80008 14.9501 9.45842V7.35008C14.9501 4.63341 12.7418 2.41675 10.0168 2.41675C7.29178 2.41675 5.08345 4.63341 5.08345 7.35008V9.45842C5.08345 9.80008 4.92512 10.3834 4.75012 10.6834L3.90845 12.0751C3.57512 12.6334 3.50012 13.2501 3.70845 13.8167C3.90845 14.3751 4.38345 14.8084 5.00012 15.0167C6.61678 15.5667 8.31678 15.8334 10.0168 15.8334C11.7168 15.8334 13.4168 15.5667 15.0335 15.0251C15.6168 14.8334 16.0668 14.3917 16.2835 13.8167C16.5001 13.2417 16.4418 12.6084 16.1168 12.0751Z"
        fill={`${color ? '#0094D9' : 'white'} `}
      />
      <path
        d="M11.8748 2.76675C11.2998 2.54175 10.6748 2.41675 10.0165 2.41675C9.3665 2.41675 8.7415 2.53341 8.1665 2.76675C8.52484 2.09175 9.23317 1.66675 10.0165 1.66675C10.8082 1.66675 11.5082 2.09175 11.8748 2.76675Z"
        fill={`${color ? '#0094D9' : 'white'} `}
      />
      <path
        d="M12.3582 16.6751C12.0082 17.6417 11.0832 18.3334 9.9999 18.3334C9.34157 18.3334 8.69157 18.0667 8.23324 17.5917C7.96657 17.3417 7.76657 17.0084 7.6499 16.6667C7.75824 16.6834 7.86657 16.6917 7.98324 16.7084C8.1749 16.7334 8.3749 16.7584 8.5749 16.7751C9.0499 16.8167 9.53324 16.8417 10.0166 16.8417C10.4916 16.8417 10.9666 16.8167 11.4332 16.7751C11.6082 16.7584 11.7832 16.7501 11.9499 16.7251C12.0832 16.7084 12.2166 16.6917 12.3582 16.6751Z"
        fill={`${color ? '#0094D9' : 'white'} `}
      />
    </svg>
  );
};

export default HeaderBellSvgIcon;
