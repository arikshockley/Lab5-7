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
class Bottom {
    constructor(norm) {
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
    updateBottom(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bottomCtrl = model.controller;
            let resp = yield bottomCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    deleteBottom(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bottomCtrl = model.controller;
            let resp = yield bottomCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    createBottom(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let bottomCtrl = model.controller;
            let resp = yield bottomCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getAllBottoms(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let bottomCtrl = model.controller;
            let resp = yield bottomCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getBottomById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let bottomCtrl = model.controller;
            let resp = yield bottomCtrl.get(req, null, null);
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
exports.Bottom = Bottom;
