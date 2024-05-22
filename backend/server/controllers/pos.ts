import { Request, Response } from 'express';
import { findAllPos, createPos, updatePos, deletePos, findOnePos } from "../db/pos";
import mongoose from 'mongoose';
import { IPos } from '../models/pos';
import { extractCompanyFromToken } from '../utils/extractCompanyToken';

const PosController = {
    // getPos: async (request: Request, response: Response): Promise<void> => {
    //     try {
    //         const pos: IPos[] = await findAllPos();
    //         response.send(pos);
    //     } catch (error) {
    //         console.error('Error fetching all pos:', error.message);
    //         response.status(500).send(error);
    //     }
    // },

    getPos: async (request: any, response: Response): Promise<void> => {
        try {
            // console.log(request?.user?.user?.id_company[0]._id);
            // const token: any = extractCompanyFromToken (request, response)
            const company_id = request?.company_id
            const pos: IPos[] = await findAllPos();
            const posForCompany = pos?.filter((sal: any) => {
                return sal?.id_company === company_id
            }) 
            response.send(posForCompany);
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
            const data: IPos = request.body;

            const newPos: IPos = await createPos(data);

            response.status(201).json({ success: true, data: newPos });
        } catch (error) {
            console.error('Error creating pos:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    },

    updatePos: async (request: Request, response: Response): Promise<void> => {
        try {
            const id= request.params.id
            const {longitude, latitude, name, description, id_company }: IPos = request.body;

            if (!id || !longitude || !latitude || !name || !description || !id_company) {
                response.status(400).json({ success: false, error: 'ID, longitude, latitude, name, and description are required' });
                return;
            }

            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const updatedPos: IPos | null = await updatePos({ id, longitude, latitude, name, description, id_company });

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

    deleteAllPOS: async (req: Request, res: Response) => {
        const allPos = await findAllPos()
        allPos.forEach(async (pos) => {
            await deletePos(pos?._id.toString());
        });
        return res.send({});
    },
};

export default PosController;