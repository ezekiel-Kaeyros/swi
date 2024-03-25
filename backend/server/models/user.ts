import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';
import { UserRole } from '../constants/types';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    role: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Role',
      },
    ],
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
  email: string;
  password: string;
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

export default mongoose.model<IUser>('User', UserSchema);
