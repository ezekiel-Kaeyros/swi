import { Request, Response } from 'express';
import { findAllPos, createPos, updatePos, deletePos, findOnePos } from "../db/pos";
import mongoose from 'mongoose';
import { IPos } from '../models/pos';

const PosController = {
    getPos: async (request: Request, response: Response): Promise<void> => {
        try {
            const pos: IPos[] = await findAllPos();
            response.send(pos);
        } catch (error) {
            console.error('Error fetching all pos:', error.message);
            response.status(500).send(error);
        }
    },

    getOnePos: async (request: Request, response: Response): Promise<void> => {
        try {
            const { id } = request.params;

            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const pos: IPos | null = await findOnePos(id);

            if (pos) {
                response.json({ success: true, data: pos });
            } else {
                response.status(404).json({ success: false, error: 'Pos not found' });
            }
        } catch (error) {
            console.error('Error fetching one pos:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    },

    savePos: async (request: Request, response: Response): Promise<void> => {
        try {
            const { longitude, latitude, name, description }: IPos = request.body;

            if (!longitude || !latitude || !name || !description) {
                response.status(400).json({ success: false, error: 'All fields are required' });
                return;
            }

            const newPos: IPos = await createPos({ longitude, latitude, name, description });

            response.status(201).json({ success: true, data: newPos });
        } catch (error) {
            console.error('Error creating pos:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    },

    updatePos: async (request: Request, response: Response): Promise<void> => {
        try {
            const { id, longitude, latitude, name, description }: IPos = request.body;

            if (!id || !longitude || !latitude || !name || !description) {
                response.status(400).json({ success: false, error: 'ID, longitude, latitude, name, and description are required' });
                return;
            }

            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const updatedPos: IPos | null = await updatePos({ id, longitude, latitude, name, description });

            if (updatedPos) {
                response.json({ success: true, data: updatedPos });
            } else {
                response.status(404).json({ success: false, error: 'Pos not found' });
            }
        } catch (error) {
            console.error('Error updating pos:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    },

    deletePos: async (request: Request, response: Response): Promise<void> => {
        try {
            const { id } = request.params;
        
            if (!id) {
                response.status(400).json({ success: false, error: 'ID parameter is required' });
                return;
            }

            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const deletedPos: IPos | null = await deletePos(id);
        
            if (deletedPos) {
                response.json({ success: true, data: deletedPos });
            } else {
                response.status(404).json({ success: false, error: 'Pos not found' });
            }
        } catch (error) {
          console.error('Error deleting pos:', error.message);
          response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    },
};

export default PosController;