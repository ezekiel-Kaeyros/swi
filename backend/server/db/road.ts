import { Road } from '../models'
import { IRoad } from '../models/road';

export const findAllRoad = async (): Promise<any[]> => {
    try {
        const roads = await Road.find()
        .populate({
            path: 'roadItems',
            model: 'road_items',
            populate: [
                {
                  path: 'taskIds.id',
                  model: 'Task',
                },
                {
                  path: 'posId',
                  model: 'Pos',
                },
            ],
        })
        .populate({
            path: 'saleRep',
            model: 'User',
        })
        .lean()
        .exec();

        const transformedRoads = transformRoads(roads);

        return transformedRoads;
    } catch (error) {
        console.error('Error finding all road:', error.message);
        throw error;
    }
};

export const findOneRoad = async (id: string): Promise<any> => {
    try {
        const road = await Road.findById(id)
        .populate({
            path: 'roadItems',
            model: 'road_items',
            populate: [
                {
                  path: 'taskIds.id',
                  model: 'Task',
                },
                {
                  path: 'posId',
                  model: 'Pos',
                },
            ],
        })
        .populate({
            path: 'saleRep',
            model: 'User',
        })
        .lean()
        .exec();

        const transformedRoad = transformRoads([road]);
  
        return transformedRoad[0];
    } catch (error) {
        console.error('Error finding all road:', error.message);
        throw error;
    }
};

export const createRoad = async (roadItemData: IRoad): Promise<IRoad> => {
    try {
      const createdRoad = await Road.create(roadItemData);
      return createdRoad;
    } catch (error) {
      console.error('Error creating road:', error.message);
      throw error;
    }
};

const transformRoads = (roads: any[]): any[] => {
    return roads.map((road: any) => {
      return {
        ...road,
        roadItems: road.roadItems.map((roadItem: any) => ({
          ...roadItem,
          tasks: roadItem.taskIds.map(({ id, status, _id }: {id: any, status: string, _id: string}) => ({
            ...id,
            status,
            _id,
            id: undefined,
          })),
          pos: roadItem.posId,
          taskIds: undefined,
          posId: undefined,
        })),
        saleRep: road.saleRep, // Assume que saleRep ne nécessite pas de transformation
      };
    });
};