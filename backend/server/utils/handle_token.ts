import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import {ErrorCodes} from '../constants/ErrorCodes';

let secret: string= 'swivy-app'

export const createToken = (user: any) => {
    return jwt.sign({ user: { userId: user._id, email: user.email } }, 'swivy-app', { expiresIn: '1h' });
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, secret);
}

export const isAuthenticate = (req: any, res: Response, next: any) => {
  next()
  
    // const token = req.headers['authorization'].split(' ')[1];
    // if (!token) {
    //   return res.status(ErrorCodes.Un_Authorized).send('Access Denied. No token provided.');
    // }
  
    // try {
    //   const decoded = jwt.verify(token, secret);
    //   req.user = decoded;
    //   next();
    // } catch (error) {
    //   return res.status(ErrorCodes.Bad_Request).send('Invalid Token.');
    // }
  };