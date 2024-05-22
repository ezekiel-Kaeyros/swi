import { Request, Response } from "express";
import { findAllChannelClusters, findChannelClusterById, createChannelCluster, updateChannelCluster, deleteChannelCluster } from "../db/channel_cluster";
import mongoose from "mongoose";
import { IChannelCluster } from "../models/channel_cluster";
import { TradeChannel } from "../models";
import { extractCompanyFromToken } from "../utils/extractCompanyToken";
const ChannelClusterController = {
    getChannelClusters: async(request: any, response: Response): Promise<void> => {
        try {
            // const token: any = extractCompanyFromToken (request, response)
            // const company_id = token?.user?.id_company[0]._id
            const company_id = request?.company_id
            const ChannelClusters: IChannelCluster[] =  await findAllChannelClusters();
            const channelCForCompany = ChannelClusters?.filter((sal: any) => {
                return sal?.id_company[0]?._id.toString() === company_id
            })
            response.send(channelCForCompany)
        }catch(error){
            console.error('Error fetching all channel clusters:', error.message);
            response.status(500).send(error);
        }
    },

    getOneChannelCluster: async(request: Request, response: Response): Promise<void> => {
        try{
            const { id } = request.params;
            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const channelCluster: IChannelCluster | null = await findChannelClusterById(id);

            if (channelCluster) {
                response.json({ success: true, data: channelCluster });
            } else {
                response.status(404).json({ success: false, error: 'Channel cluster not found' });
            }

        }catch(error){
            console.error('Error fetching one channel cluster:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }

    },
    saveChannelCluster: async(request: Request, response: Response): Promise<void> => {
        try{
            const { name, id_company , color}: IChannelCluster = request.body;
             
            if (!name || !id_company ) {
                response.status(400).json({ success: false, error: 'All fields are required' });
                return;
            }


            const newChannelCluster: IChannelCluster = await createChannelCluster({ name, id_company, color});

            response.status(201).json({ success: true, data: newChannelCluster });

        }catch(error){
            console.error('Error creating channel cluster:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    },
    updateChannelCluster: async(request: Request, response: Response): Promise<void> => {
        try{
            const { id } = request.params;
            let data: IChannelCluster = request.body;
            data['id']=id



            // if (!id || !name || !id_company) {
            //     response.status(400).json({ success: false, error: 'ID and name are required' });
            //     return;
            // }

            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const updatedChannelCluster: IChannelCluster | null = await updateChannelCluster(data);

            if (updatedChannelCluster) {
                response.json({ success: true, data: updatedChannelCluster });
            } else {
                response.status(404).json({ success: false, error: 'Channel cluster not found' });
            }
        }catch(error){
            console.error('Error updating channel cluster:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
            
        }  
    },

    deleteChannelCluster: async(request: Request, response: Response): Promise<void> => {
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

            const deletedChannelCluster: IChannelCluster | null = await deleteChannelCluster(id);

            if (deletedChannelCluster) {
                response.json({ success: true, data: deletedChannelCluster });
            }else {
            response.status(404).json({ success: false, error: 'Channel cluster not found' });
             }
        }catch(error){
            console.error('Error deleting channel cluster:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        } 

    }, 

    deleteAllChannelCluster: async (req: Request, res: Response) => {
        const allChanneCluster = await findAllChannelClusters()
        allChanneCluster.forEach(async (channelC) => {
            await deleteChannelCluster(channelC?._id.toString());
        });
        return res.send({});
    },

}    

export default ChannelClusterController;

