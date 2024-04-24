import React from 'react';

type SelectFieldProps = {
  title?: string;
  name: string;
  options?: any;
  register: any;
};

const SelectField: React.FC<SelectFieldProps> = ({
  title,
  options,
  name,
  register,

}) => {

  const momentOp = [
    {
      id: "661d4c7ef54892933566b0be", 
      name: "Dovvv"
    }, 
    {
      id: "661e46da0c5460e02b3c492b", 
      name: "kaeyros-analytics"
    }, 
    
  ]

  console.log("optionsoptionsoptions", options)
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
        <option value="">
          Select an option
        </option>
        { options && options?.length > 0 ? options?.map((option: any) => (
          <option key={option?.id} value={option?.id}>
            {option?.name}
          </option>
        )) 
        :
        momentOp?.map((option: any) => (
          <option key={option?.id} value={option?.id}>
            {option.name}
          </option>
        ))
      }
      </select>
    </>
  );
};

export default SelectField;
