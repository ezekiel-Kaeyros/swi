import { FC } from 'react';
import CustomInputType from './customInputFile';

const CustomInputFile: FC<CustomInputType> = ({
  className,
  type,
  placeholder,
  register,
  name,
  disabled,
  ...props
}) => {
  return (
    <input
      className={`h-[48px] text-[14px] leading-[19px] font-articulat  ${
        disabled ? 'bg-secondaryDark/60' : 'bg-secondaryDark'
      } px-[16px] py-[18px] gap-[8px] placeholder:text-[14px] font-normal leading-[19.5px]  rounded-[8px] w-full  dark:text-white`}
      id={name}
      type={type ? type : 'text'}
      placeholder={placeholder}
      disabled={disabled}
      autoComplete="off"
      autoFocus
      {...register}
    />
  );
};
export default CustomInputFile;
