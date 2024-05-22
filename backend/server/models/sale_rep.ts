import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';

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

    password: {
      type: String,
      default: false,
    }, 
    reportingManager: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ], 
    id_company: [{type: Schema.Types.String, ref: 'Company'} ],
    startDate: {
      type: Date,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    }, 
    contact: {
      type: Number,
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
  password: string; 
  job?: string;
  departement?: string; 
  contact?: number; 
  reportingManager?: any;
  startDate?: string;
  status?: string; 
  id_company?: string; 
  isValidPassword: (password: string) => Promise<boolean>;
}

SaleRepSchema.pre<ISaleRep>('save', async function (next) {
  if (this.password) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }
  next();
});

SaleRepSchema.methods.isValidPassword = async function (password: string) {
  const salesRep = this as ISaleRep;
  const compare = await bcrypt.compare(password, salesRep.password);

  return compare;
};


export default mongoose.model<ISaleRep>('SaleRep', SaleRepSchema);
