// @ts-nocheck
import { SaleRep } from '../models';

export const getSaleRepByEmail = async (email: string) => {
  const saleRep = await SaleRep.findOne({ email });
  return saleRep;
};

export const getSaleRepById = async (id: string) => {
  const query = { _id: id };

  const saleRep = await SaleRep.findOne(query)
    .select('-password')
    .populate('reportingManager')

  return saleRep;
};

export const saleRepResetPasswordToken = async (saleRepId: string, token: string) => {
  const saleRep = await SaleRep.findOneAndUpdate({ _id: saleRepId }, { resetPasswordToken: token });
  return saleRep;
};

export const createSaleRep = async (body) => {
  const saleRep = await SaleRep.create(body);
  return saleRep;
};

export const getAllSaleRep = async (
  
) => {
  const salesRep = SaleRep.find({})
  .populate('reportingManager')
  return salesRep;
};

export const updateSaleRep = async (id: string, fieldsToUpdate: any) => {
  const saleRep  = await SaleRep.findOneAndUpdate({ _id: id }, { ...fieldsToUpdate }, { new: true })
  return saleRep;
};

export const deleteSaleRep = async (id: string) => {
  // const saleRep = await SaleRep.findByIdAndRemove(id);
  const saleRep = await SaleRep.findByIdAndDelete(id);
  return saleRep;
};
