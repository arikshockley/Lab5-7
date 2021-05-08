import { Request, Response, NextFunction } from 'express';


export class Top {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      sleeve: { type: String, maxlength: 24 },
      color: { type: String, maxlength: 24 },
      pattern: { type: String, maxlength: 24 },
      occasion: { type: String, maxlength: 24 },
      season: { type: String, maxlength: 24 },
      user_id: {
        type: Number,
        key: 'foreign',
        references: { table: 'User', foreignKey: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store top info',
    [
      {
        route: '/get-all-tops',
        method: 'POST',
        callback: this.getAllTops,
        requireToken: true,
      },
      {
        route: '/get-top-by-id/:id',
        method: 'POST',
        callback: this.getTopById,
        requireToken: true,
      },
      {
        route: '/create-top',
        method: 'POST',
        callback: this.createTop,
        requireToken: true,
      },
      {
        route: '/update-top/id/:id',
        method: 'PUT',
        callback: this.updateTop,
        requireToken: true,
      },
      {
        route: '/delete-top/id/:id',
        method: 'PUT',
        callback: this.deleteTop,
        requireToken: true,
      }
    ]
    ];
  }

  updateTop(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let topCtrl = model.controller;
      let resp = await topCtrl.update(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  deleteTop(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let topCtrl = model.controller;
      let resp = await topCtrl.remove(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  createTop(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let topCtrl = model.controller;
      let resp = await topCtrl.insert(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  getAllTops(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ['*']
      }
      let topCtrl = model.controller;
      let resp = await topCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }
  getTopById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ['*'],
        where: {
          id: req.params.id
        }
      }
      let topCtrl = model.controller;
      let resp = await topCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

}