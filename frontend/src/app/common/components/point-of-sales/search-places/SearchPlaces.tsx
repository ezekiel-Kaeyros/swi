import React, { useRef, useEffect } from 'react';
import { SearchPlacesProps } from './searchPlaces';
import Image from 'next/image';

const Search: React.FC<SearchPlacesProps> = ({ handleChange, icon }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  let inputElement = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
     inputElement.current = inputRef.current;
  }, [])

  return (
    <div>
      <div className="relative w-full py-4">
        <input
          className="appearance-none relative border rounded-xl w-full py-4 px-12 leading-tight border-gray-300 bg-transparent focus:outline-none focus:border-buttonPrimary focus:dark:bg-cardDark dark:text-white pr-16"
          placeholder="search"
          id="search"
          type="text"
          autoComplete="off"
          autoFocus
          onChange={(e) => handleChange(e)}
        />
        {icon && (
          <Image
            className="absolute ml-4 mt-auto mb-auto left-0 right-0 top-0 bottom-0"
            src={icon}
            alt="Icon"
          />
        )}
      </div>
      <div id="infowindow-content" className="bg-cardDark p-4 rounded-xl">
        <span
          id="place-name"
          className="title hover:opacity-90 p-2 bg-bgColorDark"
        ></span>
        <br />
        <span
          id="place-address"
          className="hover:opacity-90 p-2 bg-bgColorDark"
        ></span>
      </div>
    </div>
  );
};

export default Search;
