import { Request, Response, NextFunction } from 'express';
export declare class Bottom {
    _model: any;
    constructor(norm: any);
    updateBottom(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteBottom(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createBottom(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllBottoms(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getBottomById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
