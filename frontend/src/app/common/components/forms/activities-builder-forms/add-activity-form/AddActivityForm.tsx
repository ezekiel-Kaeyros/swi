import React, { ChangeEvent, useEffect, useState } from 'react';
import InputField from '../../text-field/InputField';
import FormRow from './form-row/FormRow';
import SelectField from '../../select-field/SelectField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ActivityFormProps, ActivityFormValues, ActivityFormValuesFrontEnd } from './addActivityForm';
import TextArea from '../../text-area/TextArea';
import { Button } from '../../../button/Button';
// import { channelClusters } from '@/utils/channelCluster';
import { useSettings } from '@/app/hooks/useSettings';
import { createActivity, createLocalActivities, editLocalActivity } from '@/redux/features/activities-slice';
import { extractNames } from '../../utils';
import { useMutation } from 'react-query';
import { BASE_URL } from '@/utils/constants';
import { makePostReques } from '@/utils/makePostReq';
import { ICategory, IChannelCluster, TradeChannel } from '@/redux/features/types';
import { generateId } from '@/utils/generateRandomID';

import ReactFlow, {
  MarkerType, 
} from 'reactflow';
import { useRouter } from 'next/navigation';


const AddActivityForm: React.FC<ActivityFormProps> = ({ handleCloseModal, shouldUpdate, dataToUpdate, id }) => {
  const { register, handleSubmit, watch, reset, setValue } = useForm<ActivityFormValuesFrontEnd>(); 

  // const { dispatch, locaChannelClusters, locaTradeChannels, localCategories } = useSettings(); 

  // WE NEED ONLY TO GET ALL CHANNEL CLUSTER AND WE CAN FILTER ALL EXITING TRADE CHANNELS AND CATEGORIES
  const { dispatch, connectTwoNodes, selectedCatID, selectedTCID, selectedCCID, priorities, locaChannelClusters, locaTradeChannels, localCategories, channeClusterForSelectField, edgesConnectingNodes } = useSettings();
  const [ fillingTradeChannel, setFillingTradeChannel ] = useState<any> ([]); 
  const [ fillingCategory, setFillingCategory ] = useState<any> ([]); 

  useEffect (() => {
    // IF SHOULD UPDATE IS TRUE THEN SET THE VALUE (THIS IS USED ONLY FOR UPDATE)
    if (shouldUpdate) {
      setValue ("name", dataToUpdate?.name!);
      setValue ("points", dataToUpdate?.points);
      setValue ("priority", dataToUpdate?.priority!);
      setValue ("time", dataToUpdate?.time);
      setValue ("time", dataToUpdate?.duration);
      setValue ("frequency", dataToUpdate?.frequency!);
      setValue ("description", dataToUpdate?.description!);
      setValue ("channelCluster", dataToUpdate?.channelCluster);
      setValue ("category", dataToUpdate?.category);
      setValue ("tradeChannel", dataToUpdate?.tradeChannel);
    } 
  }, [])

  console.log(selectedCatID, selectedTCID, selectedCCID, "selectedCatID, selectedTCID, selectedCCID")

  const findCategoryObj = localCategories?.find((cat: ICategory) => {
    if (cat?.id === selectedCatID) {
      return cat
    }
  })

  const findTCObj = localCategories?.find((cat: ICategory) => {
    if (cat?.id === selectedTCID) {
      return cat
    }
  })

  const findCCObj = localCategories?.find((cat: ICategory) => {
    if (cat?.id === selectedCCID) {
      return cat
    }
  })

  // console.log("trade_chanel_id---", findCategoryObj)

  // const findCategoryObjTransformed = [
  //   {
  //     id: findCategoryObj?.id, 
  //     name: findCategoryObj?.name
  //   }
  // ]

  // const foundTradeChannelsInCategory = findCategoryObj?.trade_chanel_id?.map((tdID: string) => {
  //   const findElement = locaTradeChannels?.find((locTC: TradeChannel) => {
  //     return locTC?.id === tdID
  //   })
  //   return findElement
  // })

  // const foundTradeChannelsInCategoryTransformed = foundTradeChannelsInCategory?.map((tdElem: any) => {
  //   // const findElement = locaTradeChannels?.find((locTC: TradeChannel) => {
  //   //   return locTC?.id === tdID
  //   // })
  //   return {
  //     id: tdElem?.id, 
  //     name: tdElem?.name
  //   };
  // })

  // const [selectedChannelCluster, setSelectedChannelCluster ] = useState<any[]> ([])

  // const deriveChannelClusterFromTradeChannelSelection = (e: any) => {
  //   const selectedTradeChannel: any = foundTradeChannelsInCategory?.find((tradeChannel: any) => {
  //     if (e.target.value == tradeChannel?.id) {
  //       return tradeChannel
  //     }
  //   })
  //   console.log(selectedTradeChannel, "selectedTradeChannel>>>selectedTradeChannel", selectedTradeChannel.channel_cluster_ids[0], selectedTradeChannel?.channel_cluster_ids[0],)
  //   const ccObj = locaChannelClusters?.find((lCC: IChannelCluster) => {
  //     console.log("selectedTradeChannel?.channel_cluster_ids[0]?.id", lCC, lCC?.id)
  //     return lCC?.id === selectedTradeChannel?.channel_cluster_ids[0]
  //   }) 
  //   console.log(">>>the corresponding channel Cluster: ", ccObj)
  //   const putccObjInArray = [
  //     {
  //       id: ccObj?.id, 
  //       name: ccObj?.name
  //     }
  //   ]
  //   console.log(putccObjInArray, ",,,,,")
  //   setSelectedChannelCluster (putccObjInArray)
  //   return putccObjInArray
  // }

  // console.log("foundTradeChannelsInCategory", foundTradeChannelsInCategory)
  
  // THIS IS WHEN WE CLICK ON CHANNELS CLUSTER
  const deriveTradeChannelFromSelectedCC = (e: any) => {
    const selectedTradeChannel: any = channeClusterForSelectField.find((tradeChannel: any) => {
      if (e.target.value == tradeChannel?.id) {
        return tradeChannel.tradeChannelContent
      }
    })
    setFillingTradeChannel (selectedTradeChannel?.tradeChannelContent?.map(({ _id,...rest }: any) => ({ ...rest, id:_id })))
    setFillingCategory ([])
    return selectedTradeChannel
  }

  // THIS IS WHEN WE CLICK ON TRADE CHANNELS
  const deriveCatergoryFromTradeChannel = (e: any) => {
    const selectedCategory = fillingTradeChannel.find((categor: any) => {
      if (e.target.value == categor?.id) {
        return categor.categories_id
      }
    })
    const transformedCategory = selectedCategory?.categories_id.map(({ _id,...rest }: any) => ({ ...rest, id:_id })); 
    setFillingCategory (transformedCategory)
    return transformedCategory
  }

  const mutation = useMutation({
    mutationFn: (newPost) => {
      return makePostReques (`${ BASE_URL }/pos`, newPost)
    },
  })

  const returnBack = useRouter ()

  const onSubmit: SubmitHandler<ActivityFormValuesFrontEnd> = async (data) => {
    // const finalObj

    if (shouldUpdate) {
      console.log(dataToUpdate, "dataToUpdatedataToUpdate")
      const finalValue = {
        id: id,
        name: data.name, 
        channelClust: data.channelCluster, 
        tradeChannel: data?.tradeChannel, 
        duration: data?.duration, 
        frequency: data?.frequency, 
        category: data?.category, 
        priority: data?.priority, 
        description: data?.description, 
        type: "activityCreation"
      }
      console.log(finalValue, "edit value before disapatching")
      dispatch(editLocalActivity({finalValue}))
    } else {
      const uniqID = generateId ()
  
      // const finalValue = {
      //   id: uniqID, 
      //   name: data.name, 
      //   channelClust: data.channelCluster, 
      //   tradeChannel: data?.tradeChannel, 
      //   duration: data?.duration, 
      //   frequency: data?.frequency, 
      //   category: data?.category, 
      //   priority: data?.priority, 
      //   description: data?.description, 
      //   type: "activityCreation"
      // }

      // console.log(finalValue, ">>>>||||")
      // dispatch(createLocalActivities({finalValue}))
      // connectTwoNodes (data?.category as any, uniqID, MarkerType.Arrow)

      const newDataActivity = {
        name: data?.name, 
        description: data?.description, 
      }

      console.log("newDataActivity", newDataActivity)
 
      // return; 
      // WE ENABLE BELOW CODE WHEN WE SEND DATA TO SERVER
      const resultActivity = await makePostReques (`${ BASE_URL }/activities`, newDataActivity)

      if (selectedCCID === undefined || selectedTCID === undefined || selectedCatID === undefined) {
        alert ("Veillez clicker sur le boutton + situer au dessus de la case categorization")
        return
      }

      const newDataActivityItems = {
        activitie: resultActivity?.data?._id,      
        // channelClusters: data.channelCluster, 
        // tradeChannels: data?.tradeChannel, 
        // categories: data?.category, 
        channelClusters: selectedCCID, 
        tradeChannels: selectedTCID, 
        categories: selectedCatID, 
        time: data?.duration, 
        frequency: data?.frequency, 
        priority: data?.priority, 
        type: "activityCreation"
      }

      console.log(newDataActivityItems, "newDataActivityItems")
      // return

      const resultActivityItem = await makePostReques (`${ BASE_URL }/activitiesItem`, newDataActivityItems)
    }

    reset ();
    returnBack.back()
    return; 


    dispatch(createActivity(data));
    handleCloseModal();
  };



  // Extracting names from an array of obejcts

  // // Listening to fields
  // let channelCluster: string = watch('channelCluster');
  // let tradeChannel: string = watch('tradeChannel');

  // // Finding the selected channel cluster
  // const activeChannelCluster = channelClusters?.find(
  //   (value) => value?.name?.toLowerCase() === channelCluster?.toLowerCase()
  // );

  // // Finding the selected trade channel
  // const activeTradeChannel = activeChannelCluster?.tradeChannel?.find(
  //   (value) => value?.title?.toLowerCase() === tradeChannel?.toLowerCase()
  // );

  return (
    <form className=" rounded-lg " onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <h1 className=''>Activity Name</h1>
        <InputField
          name="name"
          register={register('name', { required: true })}
          placeholder="Activity name"
        />
      </FormRow>

      {/* <div className='h-fit my-4'>
        <h1>Category</h1>
        <SelectField
          name="category"
          options={ findCategoryObjTransformed }
          register={register('category', { required: true })}
        />
      </div>
      {
        foundTradeChannelsInCategoryTransformed && (
          <div className="w-full">
              <h1>Trade channel</h1>
              <SelectField
                name="tradeChannel"
                options={foundTradeChannelsInCategoryTransformed}
                register={register('tradeChannel', { 
                  required: true, 
                  onChange: (event) => {
                    // deriveCatergoryFromTradeChannel (event)
                    deriveChannelClusterFromTradeChannelSelection (event)
                  }
                })}
              />
          </div>
        )
      }

      {
        selectedChannelCluster?.length > 0 && (
          <FormRow>
            <h1>Channel cluster</h1>
            <SelectField
              name="channelCluster"
              options={selectedChannelCluster}
              register={register('channelCluster', { 
                required: true, 
                // onChange(event) {
                //   deriveTradeChannelFromSelectedCC (event)
                // },
              })}
            />
          </FormRow>
        )
      } */}

      {/* we might finally not need to select the below commented codes */}

      {/* <FormRow>
        <h1>Channel cluster</h1>
        <SelectField
          name="channelCluster"
          options={channeClusterForSelectField}
          register={register('channelCluster', { 
            required: true, 
            onChange(event) {
              deriveTradeChannelFromSelectedCC (event)
            },
          })}
        />
      </FormRow> */}
      {/* {fillingTradeChannel?.length > 0 && (
        <div className="w-full">
          <h1>Trade channel</h1>
          <SelectField
            name="tradeChannel"
            options={fillingTradeChannel}
            register={register('tradeChannel', { 
              required: true, 
              onChange: (event) => {
                deriveCatergoryFromTradeChannel (event)
              }
            })}
          />
        </div>
      )} */}
        
        
      {/* {fillingCategory?.length > 0 && (
        <div>
          <h1>Category</h1>
          <SelectField
            name="category"
            options={ fillingCategory }
            register={register('category', { required: true })}
          />
        </div>
      )} */}
        
      <FormRow>
        <h1>Priority</h1>
        <SelectField
          name="priority"
          options={ priorities }
          register={register('priority')}
        />
      </FormRow>

      <FormRow>
        <h1>Time</h1>
        <InputField
          type="number"
          placeholder="In minutes"
          register={register('duration', { required: true })}
        />
      </FormRow>

      <FormRow>
        <h1>Frequency</h1>
        <InputField
          type="number"
          placeholder="eg: 4"
          register={register('frequency', { required: true })}
        />
      </FormRow>

      <FormRow>
        <h1>Points</h1>
        <InputField
          type="number"
          placeholder="eg: 4"
          register={register('points', { required: true })}
        />
      </FormRow>

      <div>
        <TextArea
          props={register('description')}
          name={'description'}
          placeholder={'Description'}
        />
      </div>

      <div className="mt-8">
        <Button>Create activity</Button>
      </div>
      

      {/* Dynamic select fields */}

      {/* {channelCluster && (
        <FormRow>
          <h1>Trade channel</h1>
          <SelectField
            name="tradeChannel"
            options={extractNames(activeChannelCluster?.tradeChannel, 'title')}
            register={register('tradeChannel', { required: true })}
          />
        </FormRow>
      )}

      {tradeChannel &&
        activeTradeChannel?.content &&
        activeTradeChannel?.content?.length !== 0 && (
          <FormRow>
            <h1>Category</h1>
            <SelectField
              name="category"
              options={extractNames(activeTradeChannel?.content, 'title')}
              register={register('category', { required: true })}
            />
          </FormRow>
        )} */}

      
    </form>
  );
};

export default AddActivityForm;
