import React from 'react';
import { SvgCustomIconProps } from './svgCustomIcons';

const SearchSvgIcons: React.FC<SvgCustomIconProps> = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.58341 17.5C13.9557 17.5 17.5001 13.9556 17.5001 9.58335C17.5001 5.2111 13.9557 1.66669 9.58341 1.66669C5.21116 1.66669 1.66675 5.2111 1.66675 9.58335C1.66675 13.9556 5.21116 17.5 9.58341 17.5Z"
        fill="#BABABA"
      />
      <path
        d="M17.7499 18.3333C17.5999 18.3333 17.4499 18.275 17.3416 18.1667L15.7916 16.6167C15.5666 16.3917 15.5666 16.025 15.7916 15.7917C16.0166 15.5667 16.3832 15.5667 16.6166 15.7917L18.1666 17.3417C18.3916 17.5667 18.3916 17.9333 18.1666 18.1667C18.0499 18.275 17.8999 18.3333 17.7499 18.3333Z"
        fill="#BABABA"
      />
    </svg>
  );
};

export default SearchSvgIcons;
