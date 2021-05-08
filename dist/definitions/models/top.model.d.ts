import { Request, Response, NextFunction } from 'express';
export declare class Top {
    _model: any;
    constructor(norm: any);
    updateTop(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteTop(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createTop(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllTops(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getTopById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
