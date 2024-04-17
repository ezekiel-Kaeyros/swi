import { ITradeChannel } from "../models/trade_channel";
import { TradeChannel } from "../models";

export const findAllTradeChannels = async  (): Promise<ITradeChannel[]> => {
    try{
        const TradeChannels = await TradeChannel.find();
        return TradeChannels
    }catch(error){
        console.log('Error finding all trade channel ', error.message)
        throw error
    }
}

export const findTradeChannelById = async (id:string):Promise<ITradeChannel[]> => {
    try{
        const query = {_id: id};
        const tradeChannel = await TradeChannel.findById(query)
        return tradeChannel;
    }catch(error){
        console.log('Error finding trade channel')
        throw error;
    }
}


export const createTradeChannel =  async(tradeChannelData: ITradeChannel): Promise<ITradeChannel[]> => {
    try{
        const tradeChannel =  await TradeChannel.create(tradeChannelData)
        
        return tradeChannel
    }catch(error){
        console.log('Error creating trade channel', error.message)
        throw error
    }
}

export const updateTradeChannel =  async(tradeChannelData: ITradeChannel): Promise<ITradeChannel> =>{
    try{
        const updateTradeChannel = await TradeChannel.findByIdAndUpdate(
            {_id: tradeChannelData.id },
            {
                name: tradeChannelData.name,
                id_company: tradeChannelData.id_company,
                channel_cluster_id: tradeChannelData.channel_cluster_id
    
            },
            {new: true}  
        )
        if (!updateTradeChannel){
            throw new Error('Le trade channel  avec l\'ID fourni n\'a pas été trouvée.')
        }
        return updateTradeChannel;
    }catch(error){
        console.log('Error updating trade channel ', error.message)
        throw error
    }

}

export const updateArrayCategories = async (tradeData: any): Promise<any> =>{
    try{
        const updatedTradeCluster = await TradeChannel.findOneAndUpdate(
            {_id: tradeData.id},
            { "$push": { "categories_id": tradeData.categories_id } },
            {new: true}
            )

            if (!updatedTradeCluster) {
                throw new Error('La categorie  avec l\'ID fourni n\'a pas été trouvée.');
            }
            return updatedTradeCluster;
            
    }catch (error){
        console.log('Error updating trade cluster:', error.message);
        throw error;
    }
    
}

export const deleteTradeChannel =  async(id:string): Promise<any> => {
    try{
        const deleteTradeChannel = await TradeChannel.findByIdAndDelete(id)
        return deleteTradeChannel
    }catch(error){
        console.log('Error deleting trade channel:' ,error.message);
        throw error
    }
}