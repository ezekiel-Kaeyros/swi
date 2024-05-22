import { Response } from "express";
import { ErrorCodes } from "../constants";
import jwt from 'jsonwebtoken';

let secret: string= 'swivy-app'

export const extractCompanyFromToken = (req: any, res: Response) => {
    const token = req.headers['authorization'].split(' ')[1];
    if (!token) {
      return res.status(ErrorCodes.Un_Authorized).send('Access Denied. No token provided.');
    }
    const decoded = jwt.verify(token, secret);
    return decoded;
}; 