import { Request, Response, NextFunction } from 'express';


export class Bottom {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      length: { type: String, maxlength: 24 },
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
    }, 'A table to store bottom info',
    [
      {
        route: '/get-all-bottoms',
        method: 'POST',
        callback: this.getAllBottoms,
        requireToken: true,
      },
      {
        route: '/get-bottom-by-id/:id',
        method: 'POST',
        callback: this.getBottomById,
        requireToken: true,
      },
      {
        route: '/create-bottom',
        method: 'POST',
        callback: this.createBottom,
        requireToken: true,
      },
      {
        route: '/update-bottom/id/:id',
        method: 'PUT',
        callback: this.updateBottom,
        requireToken: true,
      },
      {
        route: '/delete-bottom/id/:id',
        method: 'PUT',
        callback: this.deleteBottom,
        requireToken: true,
      }
    ]
    ];
  }

  updateBottom(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let bottomCtrl = model.controller;
      let resp = await bottomCtrl.update(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  deleteBottom(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let bottomCtrl = model.controller;
      let resp = await bottomCtrl.remove(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  createBottom(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      let bottomCtrl = model.controller;
      let resp = await bottomCtrl.insert(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }

  getAllBottoms(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ['*']
      }
      let bottomCtrl = model.controller;
      let resp = await bottomCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
    }
  }
  getBottomById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
        get: ['*'],
        where: {
          id: req.params.id
        }
      }
      let bottomCtrl = model.controller;
      let resp = await bottomCtrl.get(req, null, null);
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