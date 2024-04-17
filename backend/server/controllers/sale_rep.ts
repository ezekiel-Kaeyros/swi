import { Request, Response} from 'express';
import { createSaleRep, deleteSaleRep, getAllSaleRep, getSaleRepById, updateSaleRep } from '../db';


const SaleRepController = {
  getSaleRep: async (req: Request, res: Response)=> {
    const { id } = req.params;
    const saleRep = await getSaleRepById(id);
    return res.send(saleRep);
  },
  getAllSaleRep: async (req: Request, res: Response)=> {
    const salesRep = await getAllSaleRep();
    return res.send(salesRep);
  },

  createSaleRep: async (req: Request, res: Response)=> {
    const saleRep = await createSaleRep(req.body);
    return res.send(saleRep);
  },

  updateSaleRep: async (req: Request, res: Response)=> {
    const fieldsToUpdate= req.body
    const saleRep = await updateSaleRep(req.params.id, fieldsToUpdate);
    return res.send(saleRep);
  },

  deleteSaleRep: async (req: Request, res: Response) => {
    const saleRepId= req.params.id
    const saleRep = await deleteSaleRep(saleRepId);
    return res.send(saleRep);
  },

 
};

export default SaleRepController;
