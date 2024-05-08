import React, { useState } from 'react';
import { FileInputProps } from './fileInput';
import Image from 'next/image';
import AnimateClick from '../../animate-click/AnimateClick';

const FileInput: React.FC<FileInputProps> = ({
  name,
  register,
  accept,
  multiple,
}) => {
  const [file, setFile] = useState<string[]>([]);
  function handleChange(e: { target: { files: (Blob | MediaSource)[] } }) {
    console.log(e.target.files);

    const files = e.target.files;

    if (!files) return;

    const imagesArray: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i] as Blob);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          imagesArray.push(reader.result);
          if (imagesArray.length === files.length) {
            setFile([...file, ...imagesArray]);
          }
        }
      };
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...file];
    newImages.splice(index, 1);
    setFile(newImages);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-32  rounded-[12px] cursor-pointer bg-secondaryDark   "
      >
        <div
          className={`flex ${
            file.length === 0 ? 'flex' : 'hidden'
          } flex-col items-center justify-center pt-5 pb-6 gap-2`}
        >
          <svg
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 8C0.5 3.58172 4.08172 0 8.5 0H40.5C44.9183 0 48.5 3.58172 48.5 8V40C48.5 44.4183 44.9183 48 40.5 48H8.5C4.08172 48 0.5 44.4183 0.5 40V8Z"
              fill="#323232"
            />
            <path
              d="M29.5001 19C28.9917 19 28.5251 18.7083 28.2917 18.2583L27.6917 17.05C27.3084 16.2916 26.3084 15.6666 25.4584 15.6666H23.5501C22.6917 15.6666 21.6917 16.2916 21.3084 17.05L20.7084 18.2583C20.4751 18.7083 20.0084 19 19.5001 19C17.6917 19 16.2584 20.525 16.3751 22.325L16.8084 29.2083C16.9084 30.925 17.8334 32.3333 20.1334 32.3333H28.8667C31.1667 32.3333 32.0834 30.925 32.1917 29.2083L32.6251 22.325C32.7417 20.525 31.3084 19 29.5001 19ZM23.2501 20.0416H25.7501C26.0917 20.0416 26.3751 20.325 26.3751 20.6666C26.3751 21.0083 26.0917 21.2916 25.7501 21.2916H23.2501C22.9084 21.2916 22.6251 21.0083 22.6251 20.6666C22.6251 20.325 22.9084 20.0416 23.2501 20.0416ZM24.5001 29.1C22.9501 29.1 21.6834 27.8416 21.6834 26.2833C21.6834 24.725 22.9417 23.4666 24.5001 23.4666C26.0584 23.4666 27.3167 24.725 27.3167 26.2833C27.3167 27.8416 26.0501 29.1 24.5001 29.1Z"
              fill="#BABABA"
            />
          </svg>

          <p className="mb-2 gap-4 text-sm text-white font-semibold">
            <span className="font-semibold">Add pictures</span>
          </p>
        </div>
        {file.map((item, key) => (
          <div key={key} className="h-full w-full relative">
            <div
              onClick={() => removeImage(key)}
              className="absolute -top-4 -right-4 h-8 w-8 flex items-center justify-center rounded-full bg-red-700 p-1"
            >
              x
            </div>

            <Image
              width={20}
              className="w-full h-full object-cover"
              height={20}
              src={item}
              alt="File uploaded"
            />
          </div>
        ))}
        <input
          {...register}
          disabled={file ? true : false}
          name={name}
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleChange}
          accept={accept}
          multiple={multiple}
        />
      </label>
    </div>
  );
};

export default FileInput;
