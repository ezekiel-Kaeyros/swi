import { ActivitieItem } from "../models";
import { IActivityItem } from "../models/activitie_item";



export const findAllActivitieItem = async  (): Promise<any[]> => {
    try{
        const activitiesItems = await ActivitieItem.find()
        .populate('channelClusters')
        .populate('tradeChannels')
        .populate('categories')
        .populate('activitie');
        return activitiesItems
    }catch(error){
        console.log('Error finding all activities Items', error.message)
        throw error
    }
}


export const findActivityItemById = async (id:string):Promise<IActivityItem[]> => {
    try{
        const query = {_id: id};
        const activity = await ActivitieItem.findById(query)
        .populate('channelClusters')
        .populate('tradeChannels')
        .populate('categories')
        .populate('activitie');
        return activity;
    }catch(error){
        console.log('Error finding activity')
        throw error;
    }
}

export const createActivityItem =  async(activityData: IActivityItem): Promise<any> => {
    try{
        const activityItem =  await ActivitieItem.create(activityData)
        return activityItem
    }catch(error){
        console.log('Error creating activity', error.message)
        throw error
    }
}

export const updateActivityItem =  async(activityData: any): Promise<IActivityItem> =>{
    try{
        const updateActivity = await ActivitieItem.findByIdAndUpdate(
            {_id: activityData.id },
            {
                channelClusters: activityData.channelClusters,
                tradeChannels: activityData.tradeChannels,
                categories: activityData.categories,
                status: activityData.status
            },
            {new: true}  
        )
        if (!updateActivity){
            throw new Error('L\'activité  avec l\'ID fourni n\'a pas été trouvée.')
        }
        return updateActivity;
    }catch(error){
        console.log('Error updating activity ', error.message)
        throw error
    }

}

export const deleteActivityItem =  async(activityData: any): Promise<any> =>{

    try{
        const deleteActivity = await ActivitieItem.findByIdAndDelete(
            {_id: activityData }
        )
        if (!deleteActivity){
            throw new Error('L\'activité  avec l\'ID fourni n\'a pas été trouvée.')
        }
        return deleteActivity;
    }catch(error){
        console.log('Error deleting activity ', error.message)
        throw error
    }
}
