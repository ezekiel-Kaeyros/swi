import { Request, Response, request } from "express";
import { findAllTradeChannels, findTradeChannelById, createTradeChannel, updateTradeChannel, deleteTradeChannel } from "../db/trade_channel";
import mongoose from "mongoose";
import { ITradeChannel } from "../models/trade_channel";
import { TradeChannel } from "../models";
import { findChannelClusterById, updateArrayTradeChannels, updateChannelCluster } from "../db";
import { extractCompanyFromToken } from "../utils/extractCompanyToken";

const TradeChannelController = {

    getTradeChannels: async (request: Request, response: Response):Promise<void> => {

        try{
            const token: any = extractCompanyFromToken (request, response)
            const company_id = token?.user?.id_company[0]._id
            const  TradeChannel: ITradeChannel[] = await findAllTradeChannels(); 
            const tradeCForCompany = TradeChannel?.filter((sal: any) => {
                return sal?.id_company === company_id
            })
            // response.send(TradeChannel)
            response.send(tradeCForCompany)

        }catch(error){
            console.error('Error fetching all trade channel', error.message);
            response.status(500).send(error);
        }
    },

    getOneTradeChannel: async(request: Request, response: Response): Promise<void> =>{

        try{
            const {id} =  request.params;
        //Check if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)){
            response.status(400).json({success: false, error: 'Ivalid id format'})
            return;

        } 
        const tradeChannel: ITradeChannel[] | null = await findTradeChannelById(id);

        if (tradeChannel){
            response.json(400).json({success: true, data: tradeChannel})
        }else{
            response.status(404).json({success: false, error: 'Trade channel not found'})
        }
        }catch(error){

            console.log('Error fetching one trade channel: ', error.message )
            response.status(500).json({succes: false, error: 'Internal Server Error '})
        }
    },

    saveTradeChannel: async(request: Request, response: Response): Promise<void> => {

        try{
            const { name, id_company,channel_cluster_id}: ITradeChannel = request.body;

            // console.log(name, id_company,channel_cluster_id, ">>>")

            const channelCluster = await findChannelClusterById(channel_cluster_id);
            
            if (!channelCluster) {
                throw new Error('Channel Cluster not found with the provided ID');
            }
        

            const newTradeChannel: any = await createTradeChannel({ name,channel_cluster_id,id_company});
            await updateArrayTradeChannels({id: channel_cluster_id, trade_channels_id: newTradeChannel._id});

            response.status(201).json({ success: true, data: newTradeChannel });
        }catch(error){
            console.error('Error creating trade channel:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }    
    },

    updateTradeChannel: async(request: Request, response: Response): Promise<void> => {

        try{
            const { id } = request.params;
            const { name, id_company,channel_cluster_id }: ITradeChannel = request.body;

            if (!id || !name || !id_company || !channel_cluster_id) {
                response.status(400).json({ success: false, error: 'ID and name are required' });
                return;
            }

            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const updatedTradeChannel: ITradeChannel | null = await updateTradeChannel({ name, id_company,channel_cluster_id, id });

            if (updatedTradeChannel) {
                response.json({ success: true, data: updatedTradeChannel });
            } else {
                response.status(404).json({ success: false, error: 'Trade channel not found' });
            }
        } catch (error) {

            console.error('Error updating trade channel:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
            
        }   
    },

    deleteTradeChannel: async(request: Request, response: Response): Promise<void> => {

        try{
            const { id } = request.params;
            if(!id){
                response.status(400).json({ success: false, error: 'ID is required' });
                return;
            }

            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const deletedTradeChannel: ITradeChannel | null = await deleteTradeChannel(id);

            if (deletedTradeChannel) {
                response.json({ success: true, data: deletedTradeChannel });
            }else {
            response.status(404).json({ success: false, error: 'Trade channel not found' });
             }
        }catch(error){
            console.error('Error deleting trade channel:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }, 

    deleteAllTradeCh: async (req: Request, res: Response) => {
        const allTradeChannels = await findAllTradeChannels()
        allTradeChannels.forEach(async (user) => {
            await deleteTradeChannel(user?.id.toString());
        });
        return res.send({});
    },


}

export default TradeChannelController;

