import  { IChannelCluster } from '../models/channel_cluster';
import { ChannelCluster } from '../models';


export const findAllChannelClusters = async (): Promise<IChannelCluster[]> =>{

    try{
        const ChannelClusters = await ChannelCluster.find()
        .populate({
            path: 'trade_channels_id',
            populate: "id_company categories_id",
        })
        .populate('id_company');
        return ChannelClusters;
    }catch (error){
        console.log('Error finding all channel clusters:', error.message);
        throw error;
    }
    
}


export const findChannelClusterById = async (id: string): Promise<IChannelCluster | null> => {

    try{
        const query = {_id: id };
        const channelCluster = await ChannelCluster.findById(query)
        .populate({
            path: 'trade_channels_id',
            populate: "id_company"
        })
        .populate('id_company');
        return channelCluster;
    }catch (error){
        console.log('Error finding channel cluster:', error.message);
        throw error;
    }
}

export const createChannelCluster = async (channelClusterData: IChannelCluster): Promise<IChannelCluster> =>{
    try {
        const channelCluster = await ChannelCluster.create(channelClusterData);
        return channelCluster;
    } catch (error) {
        console.log('Error creating channel cluster:', error.message);
        throw error;
    }
}

export const updateChannelCluster = async (channelClusterData: IChannelCluster): Promise<IChannelCluster> =>{
    try{
        const updatedChannelCluster = await ChannelCluster.findOneAndUpdate(
            {_id: channelClusterData.id},
            {
             ...channelClusterData
            },
            {new: true}
            )

            if (!updatedChannelCluster) {
                throw new Error('Le channel cluster  avec l\'ID fourni n\'a pas été trouvée.');
            }
            return updatedChannelCluster;
            
    }catch (error){
        console.log('Error updating channel cluster:', error.message);
        throw error;
    }
    
}

export const updateArrayTradeChannels = async (channelClusterData: IChannelCluster): Promise<IChannelCluster> =>{
    try{
        const updatedChannelCluster = await ChannelCluster.findOneAndUpdate(
            {_id: channelClusterData.id},
            { "$push": { "trade_channels_id": channelClusterData.trade_channels_id } },
            {new: true}
            )

            if (!updatedChannelCluster) {
                throw new Error('Le channel cluster  avec l\'ID fourni n\'a pas été trouvée.');
            }
            return updatedChannelCluster;
            
    }catch (error){
        console.log('Error updating channel cluster:', error.message);
        throw error;
    }
    
}

export const deleteChannelCluster = async (id: string): Promise<any> =>{
    try{
        const deletedChannelCluster = await ChannelCluster.findByIdAndDelete(id);
        return deletedChannelCluster;
    }catch (error){
        console.log('Error deleting channel cluster:', error.message);
        throw error;
    
}
}