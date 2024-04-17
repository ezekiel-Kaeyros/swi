// @ts-nocheck
import { Company} from '../models';


export const getCompanyById = async (id: string): Promise<any> => {
  const query = { _id: id };

  const company = await Company.findOne(query)
  return company;
};

export const getCompanys = async (): Promise<any> => {
      const companys = Company.find({});
      return companys;
    };

export const addCompany = async (
  name: string,
): Promise<any> => {
  const company = await Company.create({
    name,
  });
  return company;
};

export const updateCompany = async (id: string, body: any): Promise<any> => {
  const company = await Company.findOneAndUpdate({ _id: id }, body, { new: true })
  return company;
};

export const deleteCompany = async (id: string): Promise<any> => {
 
  
  const company = await Company.findByIdAndDelete(id)
  
  return company;
};
