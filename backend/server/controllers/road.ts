import { Request, Response } from 'express';
import { createRoad, deleteRoad, findAllRoad, findOneRoad, findRoadBySaleRep, updateRoad } from "../db/road";
import { IRoad } from '../models/road';
import mongoose from 'mongoose';
import { deleteRoadItem } from '../db';

const RoadController = {
    getAllRoads: async (request: Request, response: Response): Promise<void> => {
        try {
            const roads: any[] = await findAllRoad();
            // response.json({ success: true, data: roads }); 
            response.send(roads)
        } catch (error) {
            console.error('Error fetching all roadItems:', error.message);
            response.status(500).send(error);
        }
    }, 

    getSaleRepsRoads: async (request: Request, response: Response): Promise<void> => {
        try {
            const saleRepId: string = request.params.id;
            console.log('=============================>>>', saleRepId);
            
            
            const roads: any[] = await findRoadBySaleRep(saleRepId);
            response.json({ success: true, data: roads });
        } catch (error) {
            console.error('Error fetching all roadItems:', error.message);
            response.status(500).send(error);
        }
    },

    getOneRoad: async(request: Request, response: Response): Promise<void> =>{

        try{
            const {id} =  request.params;
            //Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)){
                response.status(400).json({success: false, error: 'Ivalid id format'})
                return;
            } 
            const road: any= await findOneRoad(id);

            console.log('pppp', road)

            if (road){
                response.json({success: true, data: road})
            } else{
                response.status(404).json({success: false, error: 'Road not found'})
            }
        } catch (error){
            console.log('Error fetching Road: ', error.message )
            response.status(500).json({succes: false, error: 'Internal Server Error '})
        }
    },

    saveRoad: async (request: Request, response: Response): Promise<void> => {
        try {
            const { name, activities_items, pos, saleRep }: { name: string, pos: string[], activities_items?: string[]; saleRep: string;} = request.body;
            const newRoadData: IRoad = {
                name, 
                pos, 
                saleRep, 
                activities_items
            }

            const createdRoad = await createRoad(newRoadData);
            response.status(201).json({ success: true, data: createdRoad });
        } catch (error) {
          console.error('Error creating/updating RoadItem:', error.message);
          response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }, 


    deleteRoadController: async(request: Request, response: Response): Promise<void> => {

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

            const allRoutes = await findAllRoad ()

            // FIRST FIND THE ROAD BY ITS ID
            const foundRoad = await findOneRoad(id); 

            if (foundRoad.roadItems.length > 0) {
                foundRoad.roadItems.forEach( async (roadItem: any) => {
                    await deleteRoadItem(roadItem?._id.toString()); 
                });
            }

            const deletedRoad = await deleteRoad(id); 

            if (deletedRoad) {
                response.json({ success: true, data: deletedRoad });
            }   else {
                response.status(404).json({ success: false, error: 'Could not delete Road' });
            }

        } catch(error){
            console.error('Error deleting Activitie:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }, 


    deleteAllRoadController: async(request: Request, response: Response): Promise<void> => {

        try{

            const allRoutes = await findAllRoad ()

            allRoutes.forEach(async (element) => {
                // FIRST FIND THE ROAD BY ITS ID
                const foundRoad = await findOneRoad(element?._id.toString()); 
    
                if (foundRoad.roadItems && foundRoad.roadItems.length > 0) {
                    foundRoad.roadItems.forEach( async (roadItem: any) => {
                        await deleteRoadItem(roadItem?._id.toString()); 
                    });
                }
                const deletedRoad = await deleteRoad(element?._id.toString()); 
                
            });

            response.json({ success: true, data: allRoutes });
        } catch(error){
            console.error('Error deleting Activitie:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }


    // updateRoad: async(request: Request, response: Response): Promise<void> => {

    //     try{
    //         const { id } = request.params;
    //         const data: IRoad = request.body;

    //         // Check if the provided ID is a valid ObjectId
    //         if (!mongoose.Types.ObjectId.isValid(id)) {
    //             response.status(400).json({ success: false, error: 'Invalid ID format' });
    //             return;
    //         }

    //         const updatedRoad: IRoad | null = await updateRoad(data);

    //         if (updatedRoad) {
    //             response.json({ success: true, data: updatedRoad });
    //         } else {
    //             response.status(404).json({ success: false, error: 'Activitie not found' });
    //         }
    //     } catch (error) {

    //         console.error('Error updating trade channel:', error.message);
    //         response.status(500).json({ success: false, error: 'Internal Server Error' });
            
    //     }   
    // },

}

export default RoadController;