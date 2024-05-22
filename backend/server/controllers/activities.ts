import { Request, Response, request } from "express";
import mongoose from "mongoose";
import { createActivity, deleteActivity, findActivityById, findAllActivities, updateActivity } from "../db/activities";
import { IActivity } from "../models/activities";
import { extractCompanyFromToken } from "../utils/extractCompanyToken";


const   ActivitiesController = {

    getActivities: async (request: any, response: Response):Promise<void> => {

        try{
            // const token: any = extractCompanyFromToken (request, response)
            // const company_id = token?.user?.id_company[0]._id
            const company_id = request?.company_id
            const Activities: any[] = await findAllActivities(); 
            const activitiesForCompany = Activities?.filter((sal: any) => {
                return sal?.id_company === company_id
            }) 
            response.send(activitiesForCompany)
        }catch(error){
            console.error('Error fetching all trade channel', error.message);
            response.status(500).send(error);
        }
    },

    getOneActivities: async(request: Request, response: Response): Promise<void> =>{

        try{
            const {id} =  request.params;
        //Check if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)){
            response.status(400).json({success: false, error: 'Ivalid id format'})
            return;

        } 
        const activitie: any= await findActivityById(id);

        if (activitie){
            response.json({success: true, data: activitie})
        }else{
            response.status(404).json({success: false, error: 'Activitie not found'})
        }
        }catch(error){

            console.log('Error fetching Activitie: ', error.message )
            response.status(500).json({succes: false, error: 'Internal Server Error '})
        }
    },

    saveActivities: async(request: Request, response: Response): Promise<void> => {

        try{

            const activitie = await createActivity(request.body);
            response.status(201).json({ success: true, data: activitie });
        }catch(error){
            console.error('Error creating trade channel:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }    
    },

    updateActivitie: async(request: Request, response: Response): Promise<void> => {

        try{
            const { id } = request.params;
            const data: IActivity = request.body;

            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const updatedActivitie: IActivity | null = await updateActivity(data);

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

    deleteActivity: async(request: Request, response: Response): Promise<void> => {

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

            const deletedActivitie: IActivity | null = await deleteActivity(id);

            if (deletedActivitie) {
                response.json({ success: true, data: deletedActivitie });
            }else {
            response.status(404).json({ success: false, error: 'not found' });
             }
        }catch(error){
            console.error('Error deleting Activitie:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }, 


    deleteAllActivities: async (req: Request, res: Response) => {
        const allActitivities = await findAllActivities()
        allActitivities.forEach(async (activity) => {
            await deleteActivity(activity?._id.toString());
        });
        return res.send({});
    },


}

export default ActivitiesController;

