import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UserVadlidationMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) { 
        const { authorization } = req.headers
        
        if(!authorization){
            return res.status(403).send("Error: you are not authorized to post data.")
        }
        if(authorization === '123'){
            next(); 
        }else{
            return res.status(403).send("Errorr: you are not authorized.")
        } 
    }
}