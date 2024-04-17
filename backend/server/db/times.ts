import { ITravelTime } from '../models/times';
import { TravelTime} from '../models';


export const findAllTravelTimes = async (): Promise<ITravelTime[]> =>{
    try {
        const TravelTimes = await TravelTime.find();
        return TravelTimes;
    } catch (error){
        console.log('Error finding all travel times:', error.message);
        throw error;
    }
}

export const findtravelTimeById = async (id: string): Promise<ITravelTime | null> =>{

    try {
        const query = { _id: id };
        const travelTime = await TravelTime.findById(query);
        return travelTime;
    }catch (error){
        console.log('Error finding travel time:', error.message);
        throw error;
    }
    
}

export const createTravelTime = async (travelTimeData: ITravelTime): Promise<ITravelTime> =>{
    try {
        const travelTime = await TravelTime.create(travelTimeData);
        return travelTime;
    } catch (error) {
        console.log('Error creating travel time:', error.message);
        throw error;
    }
}

export const updateTravelTime = async (travelTimeData: ITravelTime): Promise<any> =>{
    try{
        const updatedTravelTime = await TravelTime.findOneAndUpdate(
            { _id: travelTimeData.id },
            { 
                id_company: travelTimeData.id_company,
                time: travelTimeData.time
            },
            { new: true }
        );
        if (!updatedTravelTime) {
            throw new Error('Le travel time  avec l\'ID fourni n\'a pas été trouvée.');
        }
        return updatedTravelTime;
    }catch (error){
        console.log('Error updating travel time:', error.message);
        throw error;
    }
    
}

export const deleteTravelTime = async (id: string): Promise<any> =>{
    try{
        const deletedTravelTime = await TravelTime.findByIdAndDelete(id);
        return deletedTravelTime;
    }catch (error){
        console.log('Error deleting travel time:', error.message);
        throw error;
    
}

}