"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbService = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const secrets_util_1 = require("../utils/secrets.util");
const user_model_1 = require("../models/user.model");
class DBService {
    constructor() {
        this._sequelize = new sequelize_typescript_1.Sequelize({
            dialect: "mysql",
            host: secrets_util_1.ENV_HOSTNAME,
            database: secrets_util_1.ENV_DATABASE,
            username: secrets_util_1.ENV_USERNAME,
            password: secrets_util_1.ENV_PASSWORD,
            logging: true,
        });
        this._sequelize.addModels([
            user_model_1.User
        ]);
    }
    static getInstance() {
        return new DBService();
    }
    getSequelize() {
        return this._sequelize;
    }
    rawQuery(sql, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._sequelize.query(sql, options);
        });
    }
}
exports.dbService = DBService.getInstance();
//# sourceMappingURL=db.service.js.map