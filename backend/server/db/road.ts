import { Road } from '../models'
import { IRoad } from '../models/road';

export const findAllRoad = async (): Promise<any[]> => {
    try {
        const roads = await Road.find()
        // .populate({
        //     path: 'roadItems',
        //     model: 'road_items',
        //     populate: [
        //         {
        //           path: 'taskIds.id',
        //           model: 'ActivitieItem',
        //         },
        //         {
        //           path: 'posId',
        //           model: 'Pos',
        //         },
        //     ],
        // })
        // .populate({
        //     path: 'saleRep',
        //     model: 'SaleRep',
        // })
        .populate('activities_items')
        .populate('pos')
        .populate('saleRep')
        .lean()
        .exec();

        // const transformedRoads = transformRoads(roads);

        return roads;
    } catch (error) {
        console.error('Error finding all road:', error.message);
        throw error;
    }
};

export const findOneRoad = async (id: string): Promise<any> => {
    try {
        const road = await Road.findById(id)
        // .populate({
        //   path: 'roadItems',
        //   model: 'road_items',
        //   populate: [
        //       {
        //         path: 'taskIds.id',
        //         model: 'ActivitieItem',
        //       },
        //       {
        //         path: 'posId',
        //         model: 'Pos',
        //       },
        //   ],
        // })
        // .populate({
        //     path: 'saleRep',
        //     model: 'SaleRep',
        // })
        .populate('activities_items')
        .populate('pos')
        .populate('saleRep')
        .lean()
        .exec();

        // const transformedRoad = transformRoads([road]);
        // return transformedRoad[0];
        return road
    } catch (error) {
        console.error('Error finding all road:', error.message);
        throw error;
    }
};

export const findRoadBySaleRep = async (saleRepId: string): Promise<any> => {
  try {
    console.log('hello  hello');
    const road = await Road.find({saleRep: saleRepId})
   
    
      .populate({
          path: 'activities_items',
          model: 'ActivitieItem',
          populate: [
              {
                path: 'channelClusters',
                model: 'ChannelCluster',
              },
              {
                path: 'tradeChannels',
                model: 'TradeChannel',
              },
              {
                path: 'categories',
                model: 'Category',
              },
              {
                path: 'activitie',
                model: 'Activities',
              },
          ],
      })
      .populate('pos')
      .populate('saleRep')
      .lean()
      .exec();

      // const transformedRoad = transformRoads([road]);

      return road
  } catch (error) {
      console.error('Error finding all road:', error.message);
      throw error;
  }
};

export const createRoad = async (roadData: IRoad): Promise<IRoad> => {
    try {
      const createdRoad = await Road.create(roadData);
      return createdRoad;
    } catch (error) {
      console.error('Error creating road:', error.message);
      throw error;
    }
};

export const updateRoad =  async(roadId: string, roadData: Partial<IRoad>): Promise<any> =>{
  try{
    const updatedRoad = await Road.findByIdAndUpdate(roadId, roadData, { new: true })
    .populate({
      path: 'roadItems',
      model: 'road_items',
    })
    .populate({
      path: 'saleRep',
      model: 'SaleRep',
    })
    // .populate({
    //   path: 'posId',
    //   model: 'Pos',
    // })
    .exec();

    return updatedRoad

  } catch(error){
      console.log('Error updating route ', error.message)
      throw error
  }

}

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


export const deleteRoad =  async(roadData: any): Promise<any> =>{
  try{
      const deleteActivity = await Road.findByIdAndDelete(
          {_id: roadData }
      )
      if (!deleteActivity){
          throw new Error('L\'activité  avec l\'ID fourni n\'a pas été trouvée.')
      }
      return deleteActivity;
  }catch(error){
      console.log('Error deleting activity ', error.message)
      throw error
  }
}