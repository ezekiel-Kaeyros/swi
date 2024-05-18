// @ts-nocheck
import { User } from '../models';


export const getUserByEmail = async (email: string) => {
  const user = await User.findOne({ email });
  return user;
};

export const getUserById = async (id: string) => {
  const query = { _id: id };

  const user = await User.findOne(query)
    .select('-password')
    .populate('role')
    .populate('address_id')

  return user;
};

export const getUserByEmail = async (email: string) => {
  const user = await User.findOne({ email }) as User
  return user;
};

export const getUserByUsername = async (username: string) => {
  const user = await User.findOne({ username }) 
  .select('-password')
  .populate('role')
  return user;
};

export const updateUserResetPasswordToken = async (userId: string, token: string) => {
  const user = await User.findOneAndUpdate({ _id: userId }, { resetPasswordToken: token });
  return user;
};

export const createUser = async (body) => {
  
  // has password
  // const salt = await bcryptjs.genSalt(10); 
  // const hashedPassword = await bcryptjs.hash(password, salt); 

  // const resultedBody = {
  //   ...body, 
    
  // }
  const user = await User.create(body);
  return user;
};

export const getUsers = async (
  
) => {
  const users = User.find({})
  .select('-password')
  .populate('role')
  .sort({ createdAt: 'desc' });
  return users;
};

export const countUsers = async () => {
  const total = await User.countDocuments({});
  const verified = await User.countDocuments({ emailVerified: true });
  return { total, verified };
};

export const updateUser = async (id: string, fieldsToUpdate: any) => {
  const user  = await User.findOneAndUpdate({ _id: id }, { ...fieldsToUpdate }, { new: true }) as User
  return user;
};

export const deleteUser = async (id: string) => {
  // const user = await User.findByIdAndRemove(id);
  const user = await User.findByIdAndDelete(id);
  return user;
};
