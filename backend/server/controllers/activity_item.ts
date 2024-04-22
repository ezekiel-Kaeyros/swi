import { Request, Response, request } from "express";
import mongoose from "mongoose";
import { createActivityItem, deleteActivityItem, findActivityItemById, findAllActivitieItem, updateActivityItem } from "../db/activitie_item";
import { updateArrayActivity } from "../db";
import { IActivityItem } from "../models/activitie_item";



const ActivitiesItemController = {

    getActivitiesItem: async (request: Request, response: Response):Promise<void> => {

        try{
            const  Activities: any[] = await findAllActivitieItem();
            response.send(Activities)

        }catch(error){
            console.error('Error fetching all activities items', error.message);
            response.status(500).send(error);
        }
    },

    getOneActivitieItem: async(request: Request, response: Response): Promise<void> =>{

        try{
            const {id} =  request.params;
        //Check if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)){
            response.status(400).json({success: false, error: 'Ivalid id format'})
            return;

        } 
        const activitie: any= await findActivityItemById(id);

        if (activitie){
            response.json(400).json({success: true, data: activitie})
        }else{
            response.status(404).json({success: false, error: 'Activitie Item not found'})
        }
        }catch(error){

            console.log('Error fetching Activitie: ', error.message )
            response.status(500).json({succes: false, error: 'Internal Server Error '})
        }
    },

    saveActivitieItem: async(request: Request, response: Response): Promise<void> => {

        try{

            const activitieItem = await createActivityItem(request.body);
            await updateArrayActivity({id: activitieItem.activitie, activitie_item_id: activitieItem._id});
            response.status(201).json({ success: true, data: activitieItem });
        }catch(error){
            console.error('Error creating trade channel:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }    
    },

    updateActivitieItem: async(request: Request, response: Response): Promise<void> => {

        try{
            const { id } = request.params;
            const data: IActivityItem = request.body;

            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const updatedActivitie: IActivityItem | null = await updateActivityItem(data);

            if (updatedActivitie) {
                response.json({ success: true, data: updatedActivitie });
            } else {
                response.status(404).json({ success: false, error: 'Activitie not found' });
            }
        } catch (error) {

            console.error('Error updating trade channel:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
            
        }   
    },

    deleteActivitieItem: async(request: Request, response: Response): Promise<void> => {

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

            const deletedActivitie: IActivityItem | null = await deleteActivityItem(id);

            if (deletedActivitie) {
                response.json({ success: true, data: deletedActivitie });
            }else {
            response.status(404).json({ success: false, error: 'not found' });
             }
        }catch(error){
            console.error('Error deleting Activitie:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }


}

export default ActivitiesItemController;

