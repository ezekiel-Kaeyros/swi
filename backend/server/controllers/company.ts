import { Request, Response } from 'express';
import { getCompanyById, getCompanys,updateCompany, addCompany, deleteCompany} from '../db';

const CompanyController = {
  companyOne: async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const company = await getCompanyById(id);
    return res.send(company);
  },
  getCompanys: async (req: Request, res: Response): Promise<any> => {
    const companyList = await getCompanys();
    return res.send(companyList);
  },

  createCompany: async (req: Request, res: Response): Promise<any> => {
    const { name } = req.body;
    const company = await addCompany(name);
    return res.send(company);
  },

  updateCompany: async (req: Request, res: Response): Promise<any> => {
    const fieldsToUpdate= req.body
    
    const company = await updateCompany(req.params.id, fieldsToUpdate);
    return res.send(company);
  },

  deleteCompany: async (req: Request, res: Response): Promise<any> => {
    
    const companyId= req.params.id
    const company = await deleteCompany(companyId);
    return res.send(company);
  },

 
};

export default CompanyController;
