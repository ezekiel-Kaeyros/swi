import { Request, Response, request } from "express";
import { findAllTravelTimes, findtravelTimeById, createTravelTime, updateTravelTime, deleteTravelTime } from "../db/times";
import mongoose from "mongoose";
import { ITravelTime } from "../models/times";


const TimesController = {
    getTravelTimes: async(request: Request, response: Response): Promise<void> => {
        try {
            const TravelTimes: ITravelTime[] =  await findAllTravelTimes();
            response.send(TravelTimes);
        }catch(error){
            console.error('Error fetching all travel times:', error.message);
            response.status(500).send(error);
        }

    },

getOneTravelTime: async(request: Request, response: Response): Promise<void> => {
    try{
        const { id } = request.params;
        // Check if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            response.status(400).json({ success: false, error: 'Invalid ID format' });
            return;
        }

        const travelTime: ITravelTime | null = await findtravelTimeById(id);

        if (travelTime) {
            response.json({ success: true, data: travelTime });
        } else {
            response.status(404).json({ success: false, error: 'Travel time not found' });
        }

    }catch(error){
        console.error('Error fetching one travel time:', error.message);
        response.status(500).json({ success: false, error: 'Internal Server Error' });
    }
},

saveTravelTime: async(request: Request, response: Response): Promise<void> => {
    try{
        const { time, id_company }: ITravelTime = request.body;

        if (!time || !id_company) {
            response.status(400).json({ success: false, error: 'All fields are required' });
            return;
        }

        const newTravelTime: ITravelTime = await createTravelTime({ time, id_company });

        response.status(201).json({ success: true, data: newTravelTime });
    
    }catch(error){
        console.error('Error creating travel time:', error.message);
        response.status(500).json({ success: false, error: 'Internal Server Error' });
    }


},
updateTravelTime: async(request: Request, response: Response): Promise<void> => {
    try{
        const { id } = request.params;
        const { time, id_company }: ITravelTime = request.body;
        


        if (!id || !time || !id_company) {
            response.status(400).json({ success: false, error: 'ID and time are required' });
            return;
        }

        // Check if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            response.status(400).json({ success: false, error: 'Invalid ID format' });
            return;
        }

        const updatedTravelTime: ITravelTime | null = await updateTravelTime({ id, time, id_company });

        if (updatedTravelTime) {
            response.json({ success: true, data: updatedTravelTime });
        } else {
            response.status(404).json({ success: false, error: 'Travel time not found' });
        }
    } catch(error){
        console.error('Error updating travel time:', error.message);
        response.status(500).json({ success: false, error: 'Internal Server Error' });
    }

},
deleteTravelTime: async(request: Request, response: Response): Promise<void> => {
    try{
        const { id } = request.params;

        if (!id) {
            response.status(400).json({ success: false, error: 'ID is required' });
            return;
        }
        // Check if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            response.status(400).json({ success: false, error: 'Invalid ID format' });
            return;
        }
        
        const deletedTravelTime: ITravelTime | null = await deleteTravelTime(id);

        if (deletedTravelTime) {
            response.json({ success: true, data: deletedTravelTime });

        } else {
            response.status(404).json({ success: false, error: 'Travel time not found' });
        }

    }catch(error){
        console.error('Error deleting travel time:', error.message);
        response.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}
    
    
    
}

export default TimesController;