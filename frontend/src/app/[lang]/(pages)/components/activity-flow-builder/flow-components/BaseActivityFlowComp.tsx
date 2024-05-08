import FlowBuilderActivityItem from '@/app/common/components/activities-flow-builder/activities-list/FlowBuilderActivityItem'
import { ShopIcon } from '@/app/common/components/svgs/SvgsIcons'
import { useSettings } from '@/app/hooks/useSettings'
import { copyLocalActivity, deleteLocalActivity, linkLocaloActivityToCategory } from '@/redux/features/activities-slice'
import { IActivity, IActivityNew, IChannelCluster, TradeChannel } from '@/redux/features/types'
import React from 'react'
import { Handle, Position } from 'reactflow'
import FlowCompHoverButtons from './flow-mini-components/FlowCompHoverButtons'

const BaseActivityFlowComp = ({ data }: { data: IActivityNew }) => {

    const { dispatch, locaChannelClusters, priorities } = useSettings(); 

    const prioritiesName = priorities.filter((prio: any) => {
        return prio.id === data.priority
    })

    console.log(prioritiesName, data, "qqqqqqqqqq")

    const manualLinkageFromCategory = (categoryID: any) => {
        dispatch(linkLocaloActivityToCategory({
            id: data.id, 
            categoryID,
        }));
    }; 
    const copyCC = () => {
        dispatch(
            copyLocalActivity({
            id: data?.id,
          })
        );
    };

    const deleteCC = () => {
        const confirmation = confirm(
          `Do You want to remove Activity ${data.name}`
        );
        if (confirmation) {
          dispatch(
            deleteLocalActivity({
              id: data?.id,
            })
          );
        } else {
          console.log('not deleted!');
        }
    };
    

  return (
    <>
        <div className="big-parent bg-transparent rounded-xl p-5 flex flex-col">
            <FlowCompHoverButtons 
                canAddActivity={ false }
                copyCC={ copyCC }
                editChannelCluster={ () => console.log(prioritiesName, data, "qqqqqqqqqq") } 
                deleteCC={ deleteCC } 
                addLabel='Add Activity Items' 
                deleteLabel='Delete Items' 
                duplicateLabel='Duplicate' 
                editLabel='Edit' 
                topPos='top-[-20%]'
            />
            <Handle type="target" position={Position.Left} onConnect={(params) => {
                manualLinkageFromCategory (params.source)
                console.log("Connecting from Nothing", params)
            }} />
            <FlowBuilderActivityItem
                data={ data }
            />
            {/* <Handle type="source" position={Position.Right} onConnect={(params) => {
                console.log("Connecting to Category", params); 
            }} /> */}

        </div>
    </>
  )
}

export default BaseActivityFlowComp; 





