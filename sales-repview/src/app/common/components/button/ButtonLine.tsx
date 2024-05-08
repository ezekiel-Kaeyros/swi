"use client";

import Image, { StaticImageData } from 'next/image';
import React from 'react'

type ButtonLineType = {
    firstBtnImg: StaticImageData; secondBtnImg: StaticImageData; 
    firstBtnLabel: string; secondBtnLabel: string; 
    roundeStyle: string; fontSizeStyle: string; 
    firstBtnFunc: () => void; secondBtnFunc: () => void; 
    wrapperStyle: string;  
}

const ButtonLine: React.FC <ButtonLineType> = ({ 
    firstBtnImg, secondBtnImg, 
    firstBtnLabel, secondBtnLabel, 
    roundeStyle, fontSizeStyle, 
    firstBtnFunc, secondBtnFunc, 
    wrapperStyle
}) => {
  return (
    <div className={ `${ wrapperStyle }`}>
        <div>
            <button type='button' onClick={ () => firstBtnFunc () } className={`font-articulat ${ roundeStyle } py-3 px-4 ${ fontSizeStyle } text-[13px] flex gap-2 items-center justify-center bg-stepsMarkerBlue`}>
                <Image src={ firstBtnImg } height={ 15 } alt={ firstBtnLabel }/>
                <span className='mt-[.2rem]'>
                    { firstBtnLabel }
                </span>
            </button>
        </div>
        <div>
            <button type='button' onClick={ () => secondBtnFunc () } className={`font-articulat ${ roundeStyle } py-3 px-4 ${ fontSizeStyle } text-[13px] flex gap-2 items-center justify-center bg-normalInputBg`}>
                <Image src={ secondBtnImg } height={ 15 } alt={ secondBtnLabel }/>
                <span className='mt-[.2rem]'>
                    { secondBtnLabel }
                </span>
            </button>
        </div>
    </div>
  )
}

export default ButtonLine