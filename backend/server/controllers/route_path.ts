import { Request, Response, request } from "express";
import mongoose from "mongoose";
import { createPath, deleteRoutePath, findAllPaths, findPathById, updatePath } from "../db/route_path";
import { IPath } from "../models/route_path";


const RoutePathController = {

    getRoutes: async (request: Request, response: Response):Promise<void> => {
        try {
            const  RoutePaths: any[] = await findAllPaths();
            response.send(RoutePaths)
        } catch(error){
            console.error('Error fetching all route path', error.message);
            response.status(500).send(error);
        }
    },

    getOneRoute: async(request: Request, response: Response): Promise<void> =>{

        try{
            const {id} =  request.params;
            //Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)){
                response.status(400).json({success: false, error: 'Invalid id format'})
                return;

            } 
            const route: any= await findPathById(id);

            if (route){
                response.json(400).json({success: true, data: route})
            } else{
                response.status(404).json({success: false, error: 'Activitie Item not found'})
            }
        } catch(error){
            console.log('Error fetching Routes: ', error.message )
            response.status(500).json({succes: false, error: 'Internal Server Error '})
        }
    },

    saveRoute: async(request: Request, response: Response): Promise<void> => {

        try {
            const createdRoute = await createPath(request.body);
            // await updatePath({id: createdRoute.activitie, activitie_item_id: createdRoute._id});
            response.status(201).json({ success: true, data: createdRoute });
        } catch(error){
            console.error('Error creating route:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }    
    },

    updateRoute: async(request: Request, response: Response): Promise<void> => {

        try {
            const { id } = request.params;
            const data: IPath = request.body;

            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const updatedRoute: IPath | null = await updatePath(data);

            if (updatedRoute) {
                response.json({ success: true, data: updatedRoute });
            } else {
                response.status(404).json({ success: false, error: 'Route not found' });
            }
        } catch (error) {

            console.error('Error updating route:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
            
        }   
    }, 

    deleteRoute: async(request: Request, response: Response): Promise<void> => {

        try {
            const { id } = request.params;
            if(!id) {
                response.status(400).json({ success: false, error: 'ID is required' });
                return;
            }

            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const deletedRout: IPath | null = await deleteRoutePath(id);

            if (deletedRout) {
                response.json({ success: true, data: deletedRout });
            } else {
                response.status(404).json({ success: false, error: 'not found' });
            }
        } catch(error){
            console.error('Error deleting Route:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }


}

export default RoutePathController;

