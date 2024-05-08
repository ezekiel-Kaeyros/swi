import React from 'react';

type SelectFieldProps = {
  title?: string;
  name: string;
  options: Array<string>;
  register: any;
};

const SelectField: React.FC<SelectFieldProps> = ({
  title,
  options,
  name,
  register,
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
        className={`h-[48px] text-[14px] leading-[19px] font-articulat bg-secondaryDark
        } px-[16px] py-[18px] gap-[8px] placeholder:text-[14px] font-normal leading-[19.5px]  rounded-[8px] w-full  dark:text-white`}
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

export default SelectField;
