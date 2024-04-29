import React from 'react';
import ActivityItem from '../components/ActivityItem';
import { SalesRepAllActivitiesList } from '../../../data';
import SlideDownToUp from '../../../components/slideDownToUp';
import DelayShowAnimation from '../../../components/delayShowAnimation';

function AllActivites() {
  return (
    <DelayShowAnimation>
      <div className="flex flex-col max-h-[68dvh] overflow-scroll">
        {SalesRepAllActivitiesList.map((item, key) => (
          <SlideDownToUp key={`card-item-${key}`}>
            <ActivityItem
              description={item.description}
              status={item.status}
              step={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4917 1.66666H6.50835C3.47502 1.66666 1.66669 3.47499 1.66669 6.50832V13.4917C1.66669 16.525 3.47502 18.3333 6.50835 18.3333H13.4917C16.525 18.3333 18.3334 16.525 18.3334 13.4917V6.50832C18.3334 3.47499 16.525 1.66666 13.4917 1.66666ZM8.30835 12.4167L6.43335 14.2917C6.30835 14.4167 6.15002 14.475 5.99169 14.475C5.83335 14.475 5.66669 14.4167 5.55002 14.2917L4.92502 13.6667C4.67502 13.425 4.67502 13.025 4.92502 12.7833C5.16669 12.5417 5.55835 12.5417 5.80835 12.7833L5.99169 12.9667L7.42502 11.5333C7.66669 11.2917 8.05835 11.2917 8.30835 11.5333C8.55002 11.775 8.55002 12.175 8.30835 12.4167ZM8.30835 6.58332L6.43335 8.45832C6.30835 8.58332 6.15002 8.64166 5.99169 8.64166C5.83335 8.64166 5.66669 8.58332 5.55002 8.45832L4.92502 7.83332C4.67502 7.59166 4.67502 7.19166 4.92502 6.94999C5.16669 6.70832 5.55835 6.70832 5.80835 6.94999L5.99169 7.13332L7.42502 5.69999C7.66669 5.45832 8.05835 5.45832 8.30835 5.69999C8.55002 5.94166 8.55002 6.34166 8.30835 6.58332ZM14.6334 13.85H10.2584C9.91669 13.85 9.63335 13.5667 9.63335 13.225C9.63335 12.8833 9.91669 12.6 10.2584 12.6H14.6334C14.9834 12.6 15.2584 12.8833 15.2584 13.225C15.2584 13.5667 14.9834 13.85 14.6334 13.85ZM14.6334 8.01666H10.2584C9.91669 8.01666 9.63335 7.73332 9.63335 7.39166C9.63335 7.04999 9.91669 6.76666 10.2584 6.76666H14.6334C14.9834 6.76666 15.2584 7.04999 15.2584 7.39166C15.2584 7.73332 14.9834 8.01666 14.6334 8.01666Z"
                    fill={`white`}
                  />
                </svg>
              }
              title={item.title}
              key={key}
              displayRightSide={false}
            />
          </SlideDownToUp>
        ))}
      </div>
    </DelayShowAnimation>
  );
}

export default AllActivites;
