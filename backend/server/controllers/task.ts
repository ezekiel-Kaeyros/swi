import { Request, Response } from 'express';
import { findAllTask, createTask, updateTask, deleteTask, findOneTask } from "../db/task";
import mongoose from 'mongoose';
import { ITask } from '../models/task';

const TaskController = {
    getTask: async (request: Request, response: Response): Promise<void> => {
        try {
            const task: ITask[] = await findAllTask();
            response.send(task);
        } catch (error) {
            console.error('Error fetching all task:', error.message);
            response.status(500).send(error);
        }
    },

    getOneTask: async (request: Request, response: Response): Promise<void> => {
        try {
            const { id } = request.params;

            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const task: ITask | null = await findOneTask(id);

            if (task) {
                response.json({ success: true, data: task });
            } else {
                response.status(404).json({ success: false, error: 'Task not found' });
            }
        } catch (error) {
            console.error('Error fetching one task:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    },

    saveTask: async (request: Request, response: Response): Promise<void> => {
        try {
            const { title, description }: ITask = request.body;

            if ( !title ) {
                response.status(400).json({ success: false, error: 'All fields are required' });
                return;
            }

            const newTask: ITask = await createTask({title, description} as ITask);
            response.status(201).json({ success: true, data: newTask });
        } catch (error) {
            console.error('Error creating Task:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    },

    modifyTask: async (request: Request, response: Response): Promise<void> => {
        try {
            const { id, title, description }: ITask = request.body;

            if (!id || !title ) {
                response.status(400).json({ success: false, error: 'ID, title, and description are required' });
                return;
            }

            // Check if the provided ID is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(id)) {
                response.status(400).json({ success: false, error: 'Invalid ID format' });
                return;
            }

            const updatedTask: ITask | null = await updateTask({ id, title, description } as ITask);

            if (updatedTask) {
                response.json({ success: true, data: updatedTask });
            } else {
                response.status(404).json({ success: false, error: 'Task not found' });
            }
        } catch (error) {
            console.error('Error updating task:', error.message);
            response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    },

    deleteTask: async (request: Request, response: Response): Promise<void> => {
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

            const deletedTask: ITask | null = await deleteTask(id);
        
            if (deletedTask) {
                response.json({ success: true, data: deletedTask });
            } else {
                response.status(404).json({ success: false, error: 'Task not found' });
            }
        } catch (error) {
          console.error('Error deleting task:', error.message);
          response.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    },
};

export default TaskController;