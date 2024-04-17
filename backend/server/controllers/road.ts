import { Request, Response } from 'express';
import { createRoad, findAllRoad } from "../db/road";
import { IRoad } from '../models/road';

const RoadController = {
    getAllRoads: async (request: Request, response: Response): Promise<void> => {
        try {
            const roads: any[] = await findAllRoad();
            response.json({ success: true, data: roads });
        } catch (error) {
            console.error('Error fetching all roadItems:', error.message);
            response.status(500).send(error);
        }
    },

    saveRoad: async (request: Request, response: Response): Promise<void> => {
        try {
            const { roadItems, saleRep }: { roadItems: string[]; saleRep: string;} = request.body;
            const newRoadData: IRoad = {
                saleRep,
                roadItems
            }
            const createdRoad = await createRoad(newRoadData);
            response.status(201).json({ success: true, data: createdRoad });
        } catch (error) {
          console.error('Error creating/updating RoadItem:', error.message);
          response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    },
}

export default RoadController;