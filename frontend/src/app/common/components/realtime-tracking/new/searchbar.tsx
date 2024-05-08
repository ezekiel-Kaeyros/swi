import React from 'react';
import { SearchIcon, CloseXIcon } from '../../svgs/SvgsIcons';

const SearchForm = ({width, paddingY}: any) => {
  return (
    <form className={`flex items-center mx-auto ${width ? width: 'max-w-lg'} ${paddingY ? paddingY: ""}`}>   
      <label htmlFor="voice-search" className="sr-only">Search</label>
      <div className="relative w-[100%]">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon height={20} width={20} color={'none'} />
        </div>
        <input type="text" id="voice-search" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded 
             focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Search Mockups, Logos, Design Templates..." required />
        <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
          <CloseXIcon height={'20'} width={'20'} color={'none'} />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
