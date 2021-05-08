"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Top {
    constructor(norm) {
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
    updateTop(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let topCtrl = model.controller;
            let resp = yield topCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    deleteTop(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let topCtrl = model.controller;
            let resp = yield topCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createTop(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let topCtrl = model.controller;
            let resp = yield topCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getAllTops(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let topCtrl = model.controller;
            let resp = yield topCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getTopById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let topCtrl = model.controller;
            let resp = yield topCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Top = Top;
