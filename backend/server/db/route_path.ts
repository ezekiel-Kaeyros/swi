
// import { routPathSchema } from '../models/route_path';
import route_path, { IPath } from "../models/route_path";


export const findAllPaths = async  (): Promise<any[]> => {
    try{
        const paths = await route_path.find()
        .populate({
            path: 'saleRep', 
            populate: 'reportingManager'
        })
        .populate('pointOfSales')
        .populate({
            path: 'activitieItems',
            populate: "channelClusters tradeChannels categories",
        });
        return paths
    }catch(error){
        console.log('Error finding all activities Items', error.message)
        throw error
    }
}


export const findPathById = async (id:string):Promise<IPath[]> => {
    try{
        const query = {_id: id};
        const route = await route_path.findById(query)
        .populate({
            path: 'saleRep', 
            populate: 'reportingManager'
        })
        .populate('pointOfSales')
        .populate({
            path: 'activitieItems',
            populate: "channelClusters tradeChannels categories",
        });
        return route;
    }catch(error){
        console.log('Error finding route')
        throw error;
    }
}

export const createPath =  async(pathData: IPath): Promise<any> => {
    try{
        const routePath =  await route_path.create(pathData)
        return routePath
    }catch(error){
        console.log('Error creating route', error.message)
        throw error
    }
}

export const updatePath =  async(pathData: any): Promise<IPath> =>{
    try{
        const updatePathAction = await route_path.findByIdAndUpdate(
            {_id: pathData.id },
            {
                saleRep: pathData.saleRep,
                pointOfSales: pathData.pointOfSales,
                activitieItems: pathData.activitieItems
            },
            {new: true}  
        )
        if (!updatePathAction){
            throw new Error('La route  avec l\'ID fourni n\'a pas été trouvée.')
        }
        return updatePathAction;
    }catch(error){
        console.log('Error updating route ', error.message)
        throw error
    }

}

export const deleteRoutePath =  async(pathData: any): Promise<any> =>{

    try{
        const deleteRoute = await route_path.findByIdAndDelete(
            {_id: pathData }
        )
        if (!deleteRoute){
            throw new Error('La route  avec l\'ID fourni n\'a pas été trouvée.')
        }
        return deleteRoute;
    }catch(error){
        console.log('Error deleting route ', error.message)
        throw error
    }
}
