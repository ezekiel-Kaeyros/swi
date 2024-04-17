import { Activities } from "../models";
import { IActivity } from "../models/activities";


export const findAllActivities = async  (): Promise<any[]> => {
    try{
        const activities = await Activities.find()
        .populate('channelClusters')
        .populate('tradeChannels')
        .populate('categories');
        return activities
    }catch(error){
        console.log('Error finding all activities ', error.message)
        throw error
    }
}


export const findActivityById = async (id:string):Promise<IActivity[]> => {
    try{
        const query = {_id: id};
        const activity = await Activities.findById(query)
        .populate('channelClusters')
        .populate('tradeChannels')
        .populate('categories');
        return activity;
    }catch(error){
        console.log('Error finding activity')
        throw error;
    }
}

export const createActivity =  async(activityData: IActivity): Promise<IActivity[]> => {
    try{
        const activity =  await Activities.create(activityData)
        return activity
    }catch(error){
        console.log('Error creating activity', error.message)
        throw error
    }
}

export const updateActivity =  async(activityData: any): Promise<IActivity> =>{
    try{
        const updateActivity = await Activities.findByIdAndUpdate(
            {_id: activityData.id },
            {
                name: activityData.name,
                priority: activityData.priority,
                colors: activityData.colors,
                description: activityData.description,
                channelClusters: activityData.channelClusters,
                tradeChannels: activityData.tradeChannels,
                categories: activityData.categories
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

export const deleteActivity =  async(activityData: any): Promise<any> =>{
    try{
        const deleteActivity = await Activities.findByIdAndDelete(
            {_id: activityData.id }
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