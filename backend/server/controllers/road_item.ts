import { Request, Response } from 'express';
import { createRoadItem, deleteRoadItem, findAllRoadItem, findOneRoadItem, updateRoadItem } from "../db/road_item";
import { IRoadItem } from '../models/road_item';
import mongoose from 'mongoose';

const RoadItemController = {
    getAllRoadItems: async (request: Request, response: Response): Promise<void> => {
        try {
            const roadItems: any[] = await findAllRoadItem();
            response.json({ success: true, data: roadItems });
        } catch (error) {
            console.error('Error fetching all roadItems:', error.message);
            response.status(500).send(error);
        }
    },

    getOneRoadItem: async (request: Request, response: Response): Promise<void> => {
        try {
            const { id } = request.params;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const roadItem: any = await findOneRoadItem(id);

            if (roadItem) {
                response.json({ success: true, data: roadItem });
            } else {
                response.status(404).json({ success: false, error: 'roadItem not found' });
            }
        } catch (error) {
            console.error('Error fetching all roadItems:', error.message);
            response.status(500).send(error);
        }
    },

    saveRoadItem: async (request: Request, response: Response): Promise<void> => {
        try {
            const { taskIds, posId }: { taskIds: string[]; posId: string;} = request.body;
            const newRoadItemData: IRoadItem = {
                posId,
                taskIds: taskIds.map(id => ({id}))
            }
            const createdRoadItem = await createRoadItem(newRoadItemData);
            response.status(201).json({ success: true, data: createdRoadItem });
        } catch (error) {
          console.error('Error creating/updating RoadItem:', error.message);
          response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    },

    updateRoadItemHandler: async (req: Request, res: Response): Promise<void> => {
        const roadItemId = req.params.id;
        const updates: Partial<IRoadItem> = req.body;
      
        try {
          const updatedRoadItem = await updateRoadItem(roadItemId, updates);
      
          if (updatedRoadItem) {
            res.status(200).json({ success: true, data: updatedRoadItem });
          } else {
            res.status(404).json({ success: false, error: 'Road Item not found' });
          }
        } catch (error) {
          console.error(`Error updating road item with ID ${roadItemId}:`, error.message);
          res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    },

    deleteRoadItem: async (req: Request, res: Response): Promise<void> => {
        const roadItemIdToDelete = req.params.id; 
      
        try {
          const deletedRoadItem = await deleteRoadItem(roadItemIdToDelete);
      
          if (deletedRoadItem) {
            res.status(200).json({ success: true, data: deletedRoadItem });
          } else {
            res.status(404).json({ success: false, error: 'Road Item not found' });
          }
        } catch (error) {
          console.error(`Error deleting road item with ID ${roadItemIdToDelete}:`, error.message);
          res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
}

export default RoadItemController