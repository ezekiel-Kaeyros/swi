import { Task } from '../models';
import { ITask } from '../models/task';


export const findAllTask = async (): Promise<ITask[]> => {
    try {
      const task = await Task.find();
      return task;
    } catch (error) {
      console.error('Error finding all task:', error.message);
      throw error;
    }
};

export const findOneTask = async (id: string): Promise<ITask | null> => {
    try {
      const query = { _id: id };
      const task = await Task.findById(query);
      return task;
    } catch (error) {
      console.error('Error finding task:', error.message);
      throw error;
    }
};

export const createTask = async (taskData: ITask): Promise<any> => {
    try {
      const task = await Task.create(taskData);
      return task;
    } catch (error) {
      console.error('Erreur lors de la création de la task :', error.message);
      throw error;
    }
};

export const updateTask = async (taskData: ITask): Promise<any> => {
    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: taskData.id },
            {
            title: taskData.title,
            description: taskData.description,
            },
            { new: true }
        );
    
        if (!updatedTask) {
            throw new Error('La task avec l\'ID fourni n\'a pas été trouvée.');
        }
    
        return updatedTask;
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la task :', error.message);
      throw error;
    }
};

export const deleteTask = async (id: string): Promise<any> => {
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        return deletedTask;
    } catch (error) {
        console.error('Error deleting task:', error.message);
        throw error;
    }
};