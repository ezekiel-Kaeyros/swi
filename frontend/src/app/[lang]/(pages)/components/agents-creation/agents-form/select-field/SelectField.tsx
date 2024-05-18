import React from 'react';
import { OptionType, OptionTypes } from './selectTypes';
// import { OptionType, SelectFieldProps } from './selectTypes';

type SelectFieldProps = {
  title?: string;
  name: string;
  options?: OptionTypes;
  register: any;
  widthPercentage?: any;
  ifExtra?: boolean; 
  requiredInfo?: boolean; 
};

const SelectField: React.FC<SelectFieldProps> = ({
  title,
  options,
  name,
  register, 
  requiredInfo, 
  widthPercentage,
  ifExtra,
}) => {
  return (
    <div className="flex flex-col mt-[.2rem]">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {title} { requiredInfo && <span className='text-red'>*</span>}
      </label>
      <select
        style={{
          backgroundColor: '#323232',
        }}
        name={name}
        {...register}
        id={name}
        className={`appearance-none relative h-[48px] p-4 rounded-xl py-3  leading-tight border-gray-300 bg-transparent focus:outline-none focus:border-buttonPrimary bg-cardDark focus:dark:bg-cardDark dark:text-white`}
      >
        {options?.map((option: OptionType, i) => (
          <option key={i} value={option?.id}>
            {ifExtra ? option?.extra : option?.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
