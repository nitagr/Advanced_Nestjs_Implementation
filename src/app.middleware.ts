import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  constructor(){}
  async use(req: Request, res: Response, next: NextFunction){
    console.log('INside Middleware')
    next();
 }
}