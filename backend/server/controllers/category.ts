import { Request, Response, request } from "express";
import mongoose from "mongoose";
import { ICategory } from "../models/category";
import { createCategroy, deleteCategory, findAllCategory, findCategoryById, updateArrayCategories, updateCategroy } from "../db";

const CategoryController = {

    getCategory: async (request: Request, response: Response):Promise<void> => {

        try{
            const  category: ICategory[] = await findAllCategory();
            response.send(category)

        }catch(error){
            console.error('Error fetching all category', error.message);
            response.status(500).send(error);
        }
    },

    getOneCategory: async(request: Request, response: Response): Promise<void> =>{

        try{
            const {id} =  request.params;
        //Check if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)){
            response.status(400).json({success: false, error: 'Ivalid id format'})
            return;

        } 
        const category: ICategory[] | null = await findCategoryById(id);

        if (category){
            response.json(400).json({success: true, data: category})
        }else{
            response.status(404).json({success: false, error: 'Category not found'})
        }
        }catch(error){
            response.status(500).json({succes: false, error: 'Internal Server Error '})
        }
    },

    saveCategory: async(request: Request, response: Response): Promise<void> => {

        try{
            const { name, id_company,trade_chanel_id,description}: ICategory = request.body;

            if (!name || !id_company || !trade_chanel_id || !description) {
                response.status(400).json({ success: false, error: 'All fields are required' });
                return;
            }
            if (!trade_chanel_id) {
                throw new Error('Trade Channel not found with the provided ID');
            }
            const newCategory: any = await createCategroy({ name, id_company,trade_chanel_id, description});
            await updateArrayCategories({id: trade_chanel_id, categories_id: newCategory._id});

            response.status(201).json({ success: true, data: newCategory });
        }catch(error){
            console.error('Error creating category:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }    
    },

    updateCategroy: async(request: Request, response: Response): Promise<void> => {

        try{
            const { id } = request.params;
            const data: ICategory = request.body;
            
            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const category: ICategory | null = await updateCategroy(data);

            if (category) {
                response.json({ success: true, data: category });
            } else {
                response.status(404).json({ success: false, error: 'Trade channel not found' });
            }
        } catch (error) {

            console.error('Error updating trade channel:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
            
        }   
    },

    deleteCategory: async(request: Request, response: Response): Promise<void> => {

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

            const category: ICategory | null = await deleteCategory(id);

            if (category) {
                response.json({ success: true, data: category });
            }else {
            response.status(404).json({ success: false, error: 'Trade channel not found' });
             }
        }catch(error){
            console.error('Error deleting trade channel:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }


}

export default CategoryController;

