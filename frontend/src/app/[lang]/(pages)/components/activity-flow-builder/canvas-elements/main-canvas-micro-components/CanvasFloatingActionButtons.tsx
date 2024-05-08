import { CategorizationNoFillSvgIcon, ChannelClusterSvgIcon, TradeChannelSvgIcon } from '@/app/common/components/svgs/SvgsIcons';
import React from 'react'
// import chroma from 'chroma-js';

const CanvasFloatingActionButtons = ({
  setOpenModal, 
  addChannelCluster, 
  setTradeCModal, 
  addTradeChannel, 
  setCategoryModal, 
  addCategory, 
}: {
  setOpenModal: (arg: boolean) => void, 
  addChannelCluster: () => void, 
  setTradeCModal: (arg: boolean) => void, 
  addTradeChannel: () => void, 
  setCategoryModal: (arg: boolean) => void, 
  addCategory: () => void, 
}) => {
  return (
    <div className='fixed right-[20%] rounded-2xl bg-newPrimaryDark px-[1rem] py-[1rem] flex flex-row gap-10 bottom-10 z-30'>
      <div className='flex flex-row gap-2'>
        <button onClick={() => {
            console.log("")
        }} className='relative group rounded-xl p-[14px] bg-normalInputBg'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.4167 0.916648L17.0875 6.13998C17.1686 6.16687 17.2395 6.21804 17.2906 6.28657C17.3416 6.35509 17.3704 6.43766 17.3729 6.52307C17.3755 6.60848 17.3517 6.69261 17.3048 6.76406C17.2579 6.83551 17.1902 6.89081 17.1109 6.92248L9.83336 9.83331L6.14586 17.2083C6.10834 17.2834 6.04901 17.3454 5.97564 17.3862C5.90227 17.427 5.81828 17.4447 5.73469 17.437C5.65109 17.4292 5.57179 17.3964 5.50717 17.3428C5.44254 17.2892 5.39562 17.2174 5.37253 17.1366L0.884197 1.42665C0.863379 1.35379 0.862824 1.27663 0.882593 1.20347C0.902363 1.13032 0.941708 1.06394 0.996393 1.01148C1.05108 0.959026 1.11904 0.922475 1.19295 0.905765C1.26686 0.889055 1.34393 0.892817 1.41586 0.916648" fill="#BABABA"/>
            </svg>
            <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>Select Tool (V)</span>
            </div>
        </button>
        <button className='relative group rounded-xl  p-[14px] bg-normalInputBg'>
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.37497 1.1875C7.37497 0.93886 7.47375 0.700403 7.64956 0.524587C7.82538 0.348772 8.06383 0.25 8.31247 0.25C8.56111 0.25 8.79957 0.348772 8.97539 0.524587C9.1512 0.700403 9.24997 0.93886 9.24997 1.1875V7.125C9.24997 7.29076 9.31582 7.44973 9.43303 7.56694C9.55024 7.68415 9.70921 7.75 9.87497 7.75C10.0407 7.75 10.1997 7.68415 10.3169 7.56694C10.4341 7.44973 10.5 7.29076 10.5 7.125V2.4375C10.5 2.18886 10.5987 1.9504 10.7746 1.77459C10.9504 1.59877 11.1888 1.5 11.4375 1.5C11.6861 1.5 11.9246 1.59877 12.1004 1.77459C12.2762 1.9504 12.375 2.18886 12.375 2.4375V8.375C12.375 8.54076 12.4408 8.69973 12.558 8.81694C12.6752 8.93415 12.8342 9 13 9C13.1657 9 13.3247 8.93415 13.4419 8.81694C13.5591 8.69973 13.625 8.54076 13.625 8.375V4.9375C13.6246 4.68886 13.7231 4.45027 13.8987 4.27422C14.0743 4.09817 14.3126 3.99908 14.5612 3.99875C14.8099 3.99842 15.0485 4.09687 15.2245 4.27245C15.4006 4.44803 15.4996 4.68636 15.5 4.935V10.875C15.5 11.8912 15.07 13.0125 14.5712 13.99C14.1025 14.8873 13.5664 15.7477 12.9675 16.5637C12.405 17.3412 11.5037 17.75 10.58 17.75H7.66997C6.47997 17.75 5.42372 17.075 4.85122 16.075C4.00085 14.6154 3.06895 13.2048 2.05997 11.85C1.60994 11.2419 1.14649 10.6438 0.669974 10.0563L0.649973 10.0312L0.646224 10.0262H0.644974C0.544553 9.90641 0.492698 9.75328 0.49964 9.59708C0.506582 9.44088 0.571818 9.29296 0.682474 9.1825C1.12122 8.745 1.63997 8.56625 2.16622 8.58C2.66622 8.5925 3.13872 8.77875 3.53622 9C3.78872 9.13875 4.02872 9.30375 4.24872 9.47375V2.4375C4.24872 2.18886 4.3475 1.9504 4.52331 1.77459C4.69913 1.59877 4.93758 1.5 5.18622 1.5C5.43486 1.5 5.67332 1.59877 5.84914 1.77459C6.02495 1.9504 6.12372 2.18886 6.12372 2.4375V7.125C6.12372 7.29093 6.18964 7.45006 6.30696 7.56738C6.42429 7.68471 6.58342 7.75063 6.74935 7.75063C6.91527 7.75063 7.0744 7.68471 7.19173 7.56738C7.30906 7.45006 7.37497 7.29093 7.37497 7.125V1.1875Z" fill="#BABABA"/>
            </svg>
            <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>Hand Tool (H)</span>
            </div>
        </button>
      </div>
      <div className='flex flex-row gap-2'>
        <button onClick={ () => {
          setOpenModal(true); 
          addChannelCluster ();
        } } className='relative group rounded-xl  p-[14px] bg-normalInputBg'>
            <ChannelClusterSvgIcon height="20" width="20" color="none" />
            <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>Channel Cluster</span>
            </div>
        </button>
        <button onClick={() => {
          setTradeCModal (true)
          addTradeChannel ();
        }} className='relative group rounded-xl  p-[14px] bg-normalInputBg'>
            <TradeChannelSvgIcon color='#323232' height="20" width="20" />
            <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>Trade Channel</span>
            </div>
        </button>
        <button onClick={ () => {
          setCategoryModal (true)
          addCategory ();
        }} className='relative group rounded-xl  p-[14px] bg-normalInputBg'>
            <CategorizationNoFillSvgIcon height={''} width={''} color={''} />
            <div className='absolute hidden group-hover:block bottom-[140%] rounded-xl left-1/2 transform -translate-x-1/2 p-2 bg-slate-100'>
                <span className={" text-slate-500 text-[12px] whitespace-nowrap "}>Category</span>
            </div>
        </button>
      </div>
  </div>
  )
}

export default CanvasFloatingActionButtons