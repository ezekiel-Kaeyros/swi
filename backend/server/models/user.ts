import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';
import { UserRole } from '../constants/types';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    role: {
      type: String,
      trim: true,
    },
    address_id: {
      type: String,
      trim: true,
    },
    first_name: {
      type: String,
      trim: true,
    },
    email_confirm: {
    type: Boolean,
    default: false,
    },
    last_name: {
      type: String,
      trim: true,
    },
    contact: {
      type: Number,
      trim: true,
    },
    profile_picture: {
      type: String,
      trim: true,
    },
  
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    resetPasswordToken: String,
  },
  {
    timestamps: true,
  }
);

export interface IUser extends Document {
  role: string;
  address_id?: string;
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  contact?: Number;
  profile_picture?: string;
  email_confirm?: boolean;
  isValidPassword: (password: string) => Promise<boolean>;
}

UserSchema.pre<IUser>('save', async function (next) {
  if (this.password) {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
  }
  next();
});

UserSchema.methods.isValidPassword = async function (password: string) {
  const user = this as IUser;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};
UserSchema.methods.fullName = async function () {
  const user = this as IUser;
  return user?.first_name + ' ' + user?.last_name;
};

export default mongoose.model<IUser>('User', UserSchema);
