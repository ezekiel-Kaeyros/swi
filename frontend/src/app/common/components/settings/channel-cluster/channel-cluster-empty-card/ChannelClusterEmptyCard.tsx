import Image from 'next/image';
import React from 'react';

import AddIcon from '../../../../../../../public/icons/addIconGrey.svg';
import FolderDashedIcon from '../../../../../../../public/icons/folderDashedIcon.svg';
import AnimateClick from '../../../animate-click/AnimateClick';

const ChannelClusterEmptyCard = () => {
  return (
    <div className="relative">
      <Image
        src={FolderDashedIcon}
        className="w-[17rem] h-[10.5rem]"
        alt="Folder dashed icon "
      />
      <div className="absolute m-auto top-1/3  left-0 right-0">
        <AnimateClick>
          <div className="flex flex-col items-center ">
            <Image src={AddIcon} alt="Add icon" />
            <h1 className="mt-3">Add Channel Cluster</h1>
          </div>
        </AnimateClick>
      </div>
    </div>
  );
};

export default ChannelClusterEmptyCard;
