import { Request, Response, request } from "express";
import mongoose from "mongoose";
import { ICategory } from "../models/category";
import { createCategroy, deleteCategory, findAllCategory, findAllCategoryV, findCategoryById, updateAllCategroy, updateArrayCategories, updateCategroy } from "../db";
import { extractCompanyFromToken } from "../utils/extractCompanyToken";

const CategoryController = {

    getCategory: async (request: any, response: Response):Promise<void> => {

        try{
            // const token: any = extractCompanyFromToken (request, response)
            // const company_id = token?.user?.id_company[0]._id
            const company_id = request?.company_id
            const  category: ICategory[] = await findAllCategory();
            const categoryForCompany = category?.filter((sal: any) => {
                return sal?.id_company[0]?._id.toString() === company_id
            })            
            response.send(categoryForCompany)

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

    updateAllCategories: async(request: Request, response: Response): Promise<void> => {
        try{
            const allCategories = await findAllCategoryV (); 
            allCategories.forEach(async (element: ICategory) => {                
                const category: ICategory | null = await updateAllCategroy(element);
            });
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
    }, 

    deleteAllCategories: async (req: Request, res: Response) => {
        const allCategories = await findAllCategory()
        allCategories.forEach(async (category) => {
            await deleteCategory(category?._id.toString());
        });
        return res.send({});
    },


}

export default CategoryController;

