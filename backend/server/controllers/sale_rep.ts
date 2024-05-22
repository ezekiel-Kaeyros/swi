import { Request, Response} from 'express';
import { createSaleRep, deleteSaleRep, getAllSaleRep, getSaleRepById, updateSaleRep } from '../db';
import { extractCompanyFromToken } from '../utils/extractCompanyToken';




const SaleRepController = {
  getSaleRep: async (req: Request, res: Response)=> {
    const { id } = req.params;
    const saleRep = await getSaleRepById(id);
    return res.send(saleRep);
  },
  // getAllSaleRep: async (req: Request, res: Response)=> {
  //   const salesRep = await getAllSaleRep();
  //   return res.send(salesRep);
  // },

  getAllSaleRep: async (req: any, res: Response)=> {
    // const token: any = extractCompanyFromToken (req, res)
    // const company_id = token?.user?.id_company[0]._id
    const company_id = req?.company_id
    const salesRep = await getAllSaleRep();
    const salesRepForCompany = salesRep?.filter((sal: any) => {
      return sal?.id_company[0] === company_id
    })
    return res.send(salesRepForCompany);
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

  deleteAllSalesRep: async (req: Request, res: Response) => {
    const allSalesRep = await getAllSaleRep()
    allSalesRep.forEach(async (salesR) => {
        await deleteSaleRep(salesR?.id.toString());
    });
    return res.send({});
  },
};

export default SaleRepController;
