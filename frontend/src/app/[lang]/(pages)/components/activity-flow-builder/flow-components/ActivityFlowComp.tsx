import FlowBuilderActivityItem from '@/app/common/components/activities-flow-builder/activities-list/FlowBuilderActivityItem'
import { ShopIcon } from '@/app/common/components/svgs/SvgsIcons'
import { useSettings } from '@/app/hooks/useSettings'
import { copyLocalActivity, deleteLocalActivity, linkLocaloActivityToCategory } from '@/redux/features/activities-slice'
import { IActivity, IActivityNew, IChannelCluster, TradeChannel } from '@/redux/features/types'
import React from 'react'
import { Handle, Position } from 'reactflow'
import FlowCompHoverButtons from './flow-mini-components/FlowCompHoverButtons'
import useMakeActions from '@/app/hooks/useMakeActions'
import { ACTIVITIES_API_URL, ACTIVITIES_ITEMS_API_URL, BASE_URL } from '@/utils/constants'
import { generateId } from '@/utils/generateRandomID'

const ActivityFlowComp = ({ data }: { data: IActivityNew }) => {

    const { dispatch, locaChannelClusters, priorities, activities } = useSettings(); 

    const prioritiesName = priorities.filter((prio: any) => {
        return prio.id === data.priority
    })

    // 66391335d26be58b5f268c9d

    // activities

    // const getAllAttachedChannelCluster = activities.flatMap(item => item.activitieItems)
    // .filter(activitieItem => activitieItem._id === data?.id)
    // .map(activitieItem => activitieItem.channelClusters);

    const getAllAttachedChannelCluster = activities?.filter((actiV: any) => {
      return data?.activityParentID === actiV?._id
    })

    console.log(prioritiesName, data, "qqqqqaaqqqqq", getAllAttachedChannelCluster, getAllAttachedChannelCluster[0]?.activitieItems)

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

    const { makeDeleteAction } = useMakeActions();

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

          // makeDeleteAction(`${BASE_URL}/${ ACTIVITIES_ITEMS_API_URL }/${data?.id}`)
          
          // return
          const foundActivity = activities?.find((tradC: any) => {
            console.log(tradC, "tradCto", data?.id)
            return tradC?._id === data?.activityParentID
          })

          if (foundActivity?.activitieItems?.length! > 1) {
            makeDeleteAction(`${BASE_URL}/${ ACTIVITIES_ITEMS_API_URL }/${data?.id}`)
          } else if (foundActivity?.activitieItems?.length === 1) {
            makeDeleteAction(`${BASE_URL}/${ ACTIVITIES_ITEMS_API_URL }/${data?.id}`); 
            makeDeleteAction(`${BASE_URL}/${ ACTIVITIES_API_URL }/${data?.activityParentID}`)
          }
          // console.log("ooooo: ", foundActivity); 

          // foundActivity?.activitieItems?.forEach((elementI: any) => {
          //   makeDeleteAction(`${BASE_URL}/${ ACTIVITIES_ITEMS_API_URL }/${elementI?._id}`)
          // });
          // makeDeleteAction(`${BASE_URL}/${ ACTIVITIES_API_URL }/${data?.activityParentID}`)
        } else {
          console.log('not deleted!');
        }
    };

    const uniqID = generateId (); 
    

  return (
    <>
      <div className="big-parent bg-transparent rounded-xl p-5 flex flex-col">
        <FlowCompHoverButtons 
            canAddActivity={ false }
            copyCC={ copyCC }
            editChannelCluster={ () => console.log(prioritiesName, data, "qqqqqqqqqq") } 
            deleteCC={ deleteCC } 
            addLabel='Add Activity' 
            deleteLabel='Delete' 
            duplicateLabel='Duplicate' 
            editLabel='Edit' 
            topPos='top-[-20%]'
        />
        <Handle id={`actiC`} type="target" position={Position.Left} onConnect={(params) => {
            manualLinkageFromCategory (params.source)
            console.log("Connecting from Nothing", params)
        }} />
        <FlowBuilderActivityItem
          cClusterToDisplay={ getAllAttachedChannelCluster[0]?.activitieItems as []}
          data={ data }
        />
        {/* <Handle type="source" position={Position.Right} onConnect={(params) => {
            console.log("Connecting to Category", params); 
        }} /> */}
      </div>
    </>
  )
}

export default ActivityFlowComp





