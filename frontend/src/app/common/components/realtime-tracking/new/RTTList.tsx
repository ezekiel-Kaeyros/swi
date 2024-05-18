'use client';

import React from 'react';
import RTTCard from './RTTCard';
import abrielImg from '../../../../../../public/icons/abriel.png';
import ericMarkImg from '../../../../../../public/icons/ericMark.png';

const rttListData = [
  {
    id: 1,
    posName: 'Jean Vespa',
    agentName: 'Jenny Wilson',
    elapsedTime: '2h30mins',
    remainingTime: '1h30mins left',
    presentLocation: 'Santa Lucia Bonaberi',
    nextDestination: 'Santa Lucia Bonamoussadi',
    percentageOfCompletion: '1/5',
    picture: abrielImg,
  },
  {
    id: 2,
    posName: 'Grand Mall',
    agentName: 'Eric Matip',
    elapsedTime: '5h30mins',
    remainingTime: '4h30mins left',
    presentLocation: 'Rond point Deido',
    nextDestination: 'Dovv Makepe',
    percentageOfCompletion: '0/10',
    picture: ericMarkImg,
  },
];

const RTTList = () => {
  return (
    <div className="grid grid-cols-2 gap-4  w-full">
      {rttListData && rttListData.length > 0
        ? rttListData.map((rttItem: any) => {
            return (
              <div key={rttItem.id}>
                <RTTCard routeObj={rttItem} />
              </div>
            );
          })
        : 'Loading Data...'}
    </div>
  );
};

export default RTTList;
