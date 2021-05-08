import { Request, Response, NextFunction } from 'express';
export declare class Shoe {
    _model: any;
    constructor(norm: any);
    updateShoe(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteShoe(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createShoe(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllShoes(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getShoeById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
