import { RoadItem } from '../models'
import { IRoadItem } from '../models/road_item';

export const findAllRoadItem = async (): Promise<any[]> => {
    try {
      const roadItems = await RoadItem.find()
        .populate({
          path: 'taskIds.id',
          model: 'Task',
        })
        .populate({
          path: 'posId',
          model: 'Pos',
        })
        .lean()
        .exec();
        const transformedRoadItems = transformRoadItems(roadItems);
  
      return transformedRoadItems;
    } catch (error) {
      console.error('Error finding all road items:', error.message);
      throw error;
    }
};

export const findOneRoadItem = async (roadItemId: string): Promise<any | null> => {
  try {
    const roadItem: any = await RoadItem.findById(roadItemId)
      .populate({
        path: 'taskIds.id',
        model: 'Task',
      })
      .populate({
        path: 'posId',
        model: 'Pos',
      })
      .lean()
      .exec();

    if (!roadItem) {
      return null;
    }

    const transformedRoadItems = transformRoadItems([roadItem])

    return transformedRoadItems[0];
  } catch (error) {
    console.error(`Error finding road item by ID ${roadItemId}:`, error.message);
    throw error;
  }
};

export const createRoadItem = async (roadItemData: IRoadItem): Promise<IRoadItem> => {
  try {
    const createdRoadItem = await RoadItem.create(roadItemData);
    return createdRoadItem;
  } catch (error) {
    console.error('Error creating road item:', error.message);
    throw error;
  }
};

// const updates: Partial<IRoadItem> = {
//     status: 'Completed',
//   };

export const updateRoadItem = async (roadItemId: string, updates: Partial<IRoadItem>): Promise<IRoadItem | null> => {
    try {
      const updatedRoadItem = await RoadItem.findByIdAndUpdate(roadItemId, updates, { new: true })
        .populate({
          path: 'taskIds',
          model: 'Task',
        })
        .populate({
          path: 'posId',
          model: 'Pos',
        })
        .exec();
  
      return updatedRoadItem;
    } catch (error) {
      console.error(`Error updating road item with ID ${roadItemId}:`, error.message);
      throw error;
    }
};

export const deleteRoadItem = async (roadItemId: string): Promise<any> => {
    try {
      const deletedRoadItem = await RoadItem.findByIdAndDelete(roadItemId);
      return deleteRoadItem
    } catch (error) {
      console.error(`Error deleting road item with ID ${roadItemId}:`, error.message);
      throw error;
    }
};

const transformRoadItems = (roadItems: any[]): any[] => {
  return roadItems.map((roadItem: any) => ({
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
  }));
};
