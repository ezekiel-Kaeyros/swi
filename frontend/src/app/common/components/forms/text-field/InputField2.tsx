import Image from 'next/image';
import React, { ChangeEvent } from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  icon?: string;
  title?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  register,
  title,
  name,
  icon,
  placeholder,
  type,
}) => {
  return (
    <div className="relative w-full ">
      {title && (
        <label
          className="font-medium block mb-0 mt-4 text-gray-700"
          htmlFor={name}
        >
          {title}
        </label>
      )}
      <input
        className="appearance-none relative border rounded-xl w-full py-4 bg-[#323232] px-12 leading-tight border-[#323232] bg-transparent focus:outline-none  focus:dark:bg-[#323232] focus:border-gray-300 dark:text-white pr-16"
        id={name}
        type={type ? type : 'text'}
        placeholder={placeholder}
        autoComplete="off"
        autoFocus
        {...register}
      />
      {icon && (
        <Image
          className="absolute ml-4 mt-auto mb-auto left-0 right-0 top-0 bottom-0"
          src={icon}
          alt="Icon"
        />
      )}
    </div>
  );
};

export default InputField;
