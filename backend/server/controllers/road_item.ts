import { Request, Response } from 'express';
import { createRoadItem, deleteRoadItem, findAllRoadItem, findOneRoadItem, updateRoadItem } from "../db/road_item";
import { IRoadItem } from '../models/road_item';
import mongoose from 'mongoose';
import { updateRoad } from '../db';

const RoadItemController = {
    getAllRoadItems: async (request: Request, response: Response): Promise<void> => {
        try {
            const roadItems: any[] = await findAllRoadItem();
            // response.json({ success: true, data: roadItems });
            response.send(roadItems)
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

    // [
    //   {
    //     pos: "638398409409", 
    //     taskIds: ["7583687948", "7583687948", "7583687948"]
    //   }, 
    //   {
    //     pos: "638398409409", 
    //     taskIds: ["7583687948", "7583687948"]
    //   }, 
    //   {
    //     pos: "638398409409", 
    //     taskIds: ["7583687948"]
    //   }, 
    // ]

    

    saveRoadItem: async (request: Request, response: Response): Promise<void> => {
      const ids: string[] = []; 
        try {
            const { roadItems, roadId }: { 
              roadItems: {
                posId: string; 
                taskIds: string[];
              } [], roadId: string } = request.body;

            roadItems.forEach( async (roadItem: any) => {

              const newRoadItemData: any = {
                posId: roadItem?.posId,
                taskIds: roadItem?.taskIds.map((id: any) => ({id})), 
                roadId, 
              }
              const createdRoadItem = await createRoadItem(newRoadItemData); 

              if (createdRoadItem) {
                ids.push(createdRoadItem?._id.toString())
              }
              // await updateRoad(roadId, { roadItems?: ids })
            });

            response.status(201).json({ success: true, data: roadItems });
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