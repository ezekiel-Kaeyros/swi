import React from 'react';
import { SelectCategoryProps } from './selectCategory';

const SelectCategory: React.FC<SelectCategoryProps> = ({
  name,
  title,
  register,
  options,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <select
        name={name}
        {...register}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttonPrimary focus:border-buttonPrimary block w-full py-4 px-4 dark:bg-cardDark dark:border-gray-400 dark:placeholder-gray-100 dark:text-white dark:focus:ring-buttonPrimary dark:focus:border-buttonPrimary"
      >
        {options?.map((option: any) => (
          <option key={option?.id} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectCategory;
