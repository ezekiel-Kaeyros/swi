import React from 'react';

const CustomTextArea: React.FC<CustomTextAreaInputType> = ({
  props,
  name,
  placeholder,
  register,
  row,
}) => {
  return (
    <textarea
      {...register}
      id={placeholder}
      rows={row}
      name={name}
      {...props}
      className={`focus:outline-none text-[14px] leading-[19px] font-articulat bg-secondaryDark px-[16px] py-[18px] gap-[8px] placeholder:text-[14px] font-normal   rounded-[8px] w-full  dark:text-white`}
      placeholder="Description"
    ></textarea>
  );
};
export default CustomTextArea;
