import Image from 'next/image';
import React, { ChangeEvent } from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  icon?: string;
  title?: string; 
  limit?: any
  onChange?: () => void
}

const InputField: React.FC<InputFieldProps> = ({
  register,
  title,
  name,
  icon,
  placeholder,
  type, 
  limit, 
  onChange, 
}) => {
  return (
    <div className="relative w-full py-2">
      {title && (
        <label
          className="font-medium block mb-0 mt-4 text-gray-700"
          htmlFor={name}
        >
          {title}
        </label>
      )}
      <input
        style={{
          backgroundColor: "#323232"
        }}
        className="appearance-none relative rounded-xl w-full py-3 px-12 leading-tight border-gray-300 bg-transparent focus:outline-none focus:border-buttonPrimary bg-cardDark focus:dark:bg-cardDark dark:text-white pr-16"
        id={name}
        type={type ? type : 'text'}
        placeholder={placeholder}
        autoComplete="off"
        autoFocus
        max={ limit }
        onChange={ onChange }
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
