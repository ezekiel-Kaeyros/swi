import { NextFunction, Request, Response } from 'express';
import {
  getSaleRepByEmail,
} from '../db';
import { ErrorCodes} from '../constants';
import {createToken} from '../utils';

const SalesRepAuthController = {

  login: async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;
    let salesRep = await getSaleRepByEmail(email);
 
    if (!salesRep) {
        return res
        .status(ErrorCodes.Bad_Request)
        .send('Your email and password combination does not match an account.');
    }
    const validate = await salesRep.isValidPassword(password); 
    if (!validate) { 
        return res
        .status(ErrorCodes.Bad_Request)
        .send('Your email and password combination does not match an account.');
    }
    const token= createToken(salesRep)

    return res.send({salesRep,token});
  
  },

  logout: async (req: Request, res: Response): Promise<any> => {
    return res.send('You have been successfully logged out.');
  },
  forgotPassword: async (req: Request, res: Response): Promise<any> => {
 
  },
  resetPassword: async (req: Request, res: Response): Promise<any> => {
   
  },
};

export default SalesRepAuthController;
