import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

const SaleRepSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    dateOfBirth: {
        type: String,
        trim: true,
      },
    gender: {
    type: String,
    trim: true,
    },
    country: {
    type: String,
    trim: true,
    },
    region: {
        type: String,
        trim: true,
      },
    city: {
    type: String,
    trim: true,
    },
    streetAddress: {
      type: String,
      trim: true,
    },
    job: {
      type: String,
      trim: true,
    },
    departement: {
    type: String,
    default: false,
    },
    reportingManager: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ], 
    startDate: {
      type: Date,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    },
  
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export interface ISaleRep extends Document {
  email: string;
  name:string;
  dateOfBirth?: string;
  gender?:string;
  country?: string;
  region: string;
  streetAddress: string;
  job?: string;
  departement?: string;
  reportingManager?: any;
  startDate?: string;
  status?: string;
}


export default mongoose.model<ISaleRep>('SaleRep', SaleRepSchema);
