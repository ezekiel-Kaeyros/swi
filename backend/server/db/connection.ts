import mongoose, { ConnectOptions } from 'mongoose';


export const initDb = async (): Promise<any> => {
    let database_url = 'mongodb+srv://eric2mballus:tititata85@cluster0.e1pkdu7.mongodb.net/swivy_db'
    // let database_url = 'mongodb://localhost:27017/swivy_db'
  try {
    const db = await mongoose.connect(database_url, {
    } as ConnectOptions);
    console.log('DB connected');
    return db;
  } catch (error) {
    console.error('DB connection failed', error);
    process.exit(1);
  }
};
