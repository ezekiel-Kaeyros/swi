import React from 'react';

type SelectFieldProps = {
  title?: string;
  name: string;
  options: Array<string>;
  register: any;
  icons?: React.ReactNode;
};

const SelectField: React.FC<SelectFieldProps> = ({
  title,
  options,
  name,
  register,
  icons,
}) => {
  return (
    <>
      <div className="bg-secondaryDark h-[48px] flex gap-[8px]  rounded-[8px]">
        <div className="m-auto pl-3">{icons && icons}</div>
        <select
          name={name}
          {...register}
          id={name}
          className={` border-0 ring-0 focus:right-0 h-full text-[14px] leading-[19px] font-articulat bg-secondaryDark
        } py-[18px] mr-4 gap-[8px] placeholder:text-[14px] font-normal leading-[19.5px]  rounded-[8px]  w-full  dark:text-white`}
        >
          {options?.map((option: any) => (
            <option key={option?.id} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectField;
