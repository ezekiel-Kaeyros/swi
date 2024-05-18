import Image from 'next/image';
import React, { ChangeEvent } from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  icon?: string;
  title?: string;
  svg?: any;
}

const InputField: React.FC<InputFieldProps> = ({
  register,
  svg,
  title,
  name,
  icon,
  placeholder,
  type,
}) => {
  return (
    <div className="relative w-full py-4">
      {title && (
        <label
          className="font-medium block mb-0 mt-4 text-gray-700"
          htmlFor={name}
        >
          {title}
        </label>
      )}
      <input
        className={`appearance-none relative rounded-xl w-full py-4 ${
          icon ? 'px-12' : 'px-8'
        } leading-tight bg-bgColorDark focus:outline-none focus:border-buttonPrimary focus:dark:bg-bgColorDark dark:text-white pr-16`}
        id={name}
        type={type ? type : 'text'}
        placeholder={placeholder}
        autoComplete="off"
        autoFocus={false}
        {...register}
      />
      {icon && (
        <Image
          className="absolute ml-4 mt-auto mb-auto left-0 right-0 top-0 bottom-0"
          src={icon}
          alt="Icon"
        />
      )}
      {svg ? (
        <div className="absolute ml-4 mt-auto mb-auto left-0 top-[30%]">
          {svg}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default InputField;
