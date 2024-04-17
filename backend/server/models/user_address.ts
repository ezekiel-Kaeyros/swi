import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

const UserAddressSchema = new Schema(
  {
    user_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    street_line_1: {
      type: String,
      trim: true,
    },
    street_line_2: {
        type: String,
        trim: true,
      },
    state: {
      type: String,
      trim: true,
    },
    zip_code: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    department: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export interface IUserAddress extends Document {
  user_id: string;
  street_line_1?: string;
  street_line_2?: string;
  state?: string;
  city?: string;
  zip_code?: string;
  country?: string;
  department?: string;
}

export default mongoose.model<IUserAddress>('UserAddress', UserAddressSchema);
