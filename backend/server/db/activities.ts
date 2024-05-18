import { Activities } from "../models";
import { IActivity } from "../models/activities";


export const findAllActivities = async  (): Promise<any[]> => {
    try{
        const activities = await Activities.find()
        .populate({
            path: 'activitieItems',
            populate: "channelClusters tradeChannels categories",
        })
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
        .populate({
            path: 'activitieItems',
            populate: "channelClusters tradeChannels categories",
        })
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
                description: activityData.description,
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

export const updateArrayActivity = async (Data: any): Promise<any> =>{
    try{
        const activity = await Activities.findOneAndUpdate(
            {_id: Data.id},
            { "$push": { "activitieItems": Data.activitie_item_id } },
            {new: true}
            )

            if (!activity) {
                throw new Error('Activity  avec l\'ID fourni n\'a pas été trouvée.');
            }
            return activity;
            
    }catch (error){
        console.log('Error updating:', error.message);
        throw error;
    }
    
}

export const deleteActivity =  async(activityData: any): Promise<any> =>{
    try{
        const deleteActivity = await Activities.findByIdAndDelete(
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