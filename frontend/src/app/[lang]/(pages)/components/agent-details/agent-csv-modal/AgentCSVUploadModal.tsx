"use client"; 

import Image from 'next/image';
import React, { useState } from 'react'; 
import removeIconIcon from "../../../../../../../public/icons/removeIcon.svg"
import { useClickOutside } from '@/app/hooks/useClickOutside';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import { toggleShowUploadCSVModal } from '@/redux/features/agent-creation';
import fileIcon from "../../../../../../../public/icons/uploadCsv/file.png"; 

import importUserIcon from "../../../../../../../public/icons/importUser.png"
import closeIconStartDateIcon from "../../../../../../../public/icons/closeIconStartDate.png"

const AgentCSVUploadModal = () => {
    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (event: any) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
        const newFiles = Array.from(selectedFiles);
            setFiles((prevFiles: any) => [...prevFiles, ...newFiles]);
        }
    };
    const handleDrop = (event: any) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
        const newFiles = Array.from(droppedFiles);
        setFiles((prevFiles: any) => [...prevFiles, ...newFiles]);
        }
    };

    const handleRemoveFile = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };
    const { dispatch } = useClientFormStep ()

    const domNode = useClickOutside(() => {
        dispatch(toggleShowUploadCSVModal({
            toggleValue: false, 
        }))
    }); 

    const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
        ref={ domNode }
        // h-[244px]
        className="font-articulat z-20 w-[480px] h-auto rounded-2xl bg-newPrimaryDark p-5 flex flex-col gap-10 hover:border-dashed hover:border-slate-400 hover:border-[1px] transition transition-[.3s]"
    >
        <div>
            <h1 className='font-bold text-[20px] '>Choose your file</h1>
            <p className='text-[15px] text-deemGray'>Select your xlsx or CSV file</p>
        </div>
        <div>
            <input
                type="file"
                hidden
                id="browse"
                onChange={handleFileChange}
                // accept=".pdf,.docx,.pptx,.txt,.xlsx"
                accept=".csv"
                multiple
            />

            {files.length === 0 &&

                <label htmlFor="browse" className="flex justify-center flex-col  py-2 px-4 rounded-3xl cursor-pointer">
                    <div className='w-full flex justify-center'>
                        <div className='rounded-full  p-[1px] md:p-1 flex justify-center items-center cursor-pointer'>
                            {/* h-[30px] w-[30px] md:h-[40px] md:w-[40px] */}
                            <Image
                                // h-[30px] w-[30px]
                                className="cursor-pointer"
                                src={ fileIcon }
                                alt="icon"
                                width={ 50 }
                            />
                        </div>
                    </div>
                    <span className='text-deemGray text-center'>
                        Drag & Drop your file
                    </span>
                </label>
            }

            {files.length > 0 && (
                <div className="my-[1rem]">
                    <div className="flex flex-col justify-center items-center">
                        {files.map((file, index) => (
                            <div key={ index } className='w-full flex flex-col gap-5'>
                                <div className='flex flex-row justify-between'>
                                    <div className="text-[12px] flex flex-row items-center">
                                        <div className='rounded-full  p-[1px] md:p-1 flex justify-center items-center cursor-pointer'>
                                            <Image
                                                className="cursor-pointer"
                                                src={ fileIcon }
                                                alt="icon"
                                                width={ 20 }
                                            />
                                        </div>
                                        <p>{file.name}</p>
                                    </div>
                                    <div className='flex flex-row'>
                                        <div className='text-[12px] mr-4'>
                                            <p className='text-deemGray'>0% Completed</p>
                                            <p className='text-white'>0 MB / 12 MB</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Image className='cursor-pointer' src={ closeIconStartDateIcon } width={ 20 } alt='removeImageIcon' onClick={() => handleRemoveFile(index)} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='w-full bg-white h-2 rounded-2xl'>
                                        <div className='bg-slate-950 w-[50%] h-2 rounded-2xl'></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {files.length > 0 &&
                <div className='w-full flex justify-center'>
                    <button
                    disabled={files.length === 0 || isLoading ? true : false}
                    className={` ${ files.length === 0 || isLoading ? "bg-gray-400" : "bg-black hover:bg-slate-950" } w-[40%] flex flex-row items-center justify-center gap-3 py-2 px-2 rounded-2xl `}
                    >
                    <div className=' rounded-full p-1 flex justify-center items-center cursor-pointer'>
                        <Image
                            // className="md:w-8 md:h-8 h-5 w-5"
                            // className="h-[30px] w-[30px]"
                            src={ importUserIcon }
                            alt="icon"
                            width={ 20 }
                        />
                    </div>
                    {isLoading ? "Loading" : 
                    <>
                        {
                            files.length === 0 ? 
                            <div className='text-[15px]'>Select File</div> : <div className='text-[15px]'>Upload file</div>
                        }
                    </>}
                    </button>
                </div>
            }

        </div>
    </div>
  )
}

export default AgentCSVUploadModal