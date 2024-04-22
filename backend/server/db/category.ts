import { Category } from "../models";
import { ICategory } from "../models/category";


export const findAllCategory = async  (): Promise<ICategory[]> => {
    try{
        const Allcategory = await Category.find()
        .populate('trade_channel_id')
        .populate('id_company');
        return Allcategory
    }catch(error){
        console.log('Error finding all trade channel ', error.message)
        throw error
    }
}

export const findCategoryById = async (id:string):Promise<ICategory[]> => {
    try{
        const query = {_id: id};
        const category = await Category.findById(query)
        .populate('trade_channel_id')
        .populate('id_company');
        return category;
    }catch(error){
        console.log('Error finding trade channel')
        throw error;
    }
}


export const createCategroy =  async(categoryData: ICategory): Promise<ICategory[]> => {
    try{
        const category =  await Category.create(categoryData)
        return category
    }catch(error){
        console.log('Error creating trade channel', error.message)
        throw error
    }
}

export const updateCategroy =  async(categoryData: ICategory): Promise<ICategory> =>{
    try{
        const category = await Category.findByIdAndUpdate(
            {_id: categoryData.id },
            {
               ...categoryData
            },
            {new: true}  
        )
        if (!category){
            throw new Error('La category  avec l\'ID fourni n\'a pas été trouvée.')
        }
        return category;
    }catch(error){
        console.log('Error updating category ', error.message)
        throw error
    }

}

export const deleteCategory =  async(id:string): Promise<any> => {
    try{
        const deleteCategory = await Category.findByIdAndDelete(id)
        return deleteCategory
    }catch(error){
        console.log('Error deleting category:' ,error.message);
        throw error
    }
}