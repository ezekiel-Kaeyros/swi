import { Pos } from '../models';
import { IPos } from '../models/pos';


export const findAllPos = async (): Promise<IPos[]> => {
    try {
      const pos = await Pos.find();
      return pos;
    } catch (error) {
      console.error('Error finding all pos:', error.message);
      throw error;
    }
};

export const findOnePos = async (id: string): Promise<IPos | null> => {
    try {
      const query = { _id: id };
      const pos = await Pos.findById(query);
      return pos;  
    } catch (error) {
      console.error('Error finding pos:', error.message);
      throw error;
    }
};

export const createPos = async (posData: IPos): Promise<any> => {
    try {
      const pos = await Pos.create(posData);
      return pos;
    } catch (error) {
      console.error('Erreur lors de la création de la pos :', error.message);
      throw error;
    }
};

export const updatePos = async (posData: IPos): Promise<any> => {
    try {
      const updatedPos = await
      Pos.findOneAndUpdate({ _id: posData.id}, { ...posData }, { new: true })
  
      if (!updatedPos) {
        throw new Error('La pos avec l\'ID fourni n\'a pas été trouvée.');
      }
  
      return updatedPos;
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la pos :', error.message);
      throw error;
    }
};

export const deletePos = async (id: string): Promise<any> => {
    try {
      const deletedPos = await Pos.findByIdAndDelete(id);
  
      return deletedPos;
    } catch (error) {
      console.error('Error deleting pos:', error.message);
      throw error;
    }
};