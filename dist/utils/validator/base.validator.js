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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseValidator = void 0;
const validatorjs_1 = __importDefault(require("validatorjs"));
class BaseValidator {
    constructor() {
        this.validate = (req, rules) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const data = Object.assign(Object.assign(Object.assign({}, req.body), req.query), req.params);
                const validator = new validatorjs_1.default(data, rules);
                validator.fails(() => {
                    reject(validator.errors);
                });
                validator.passes(() => {
                    resolve();
                });
            });
        });
    }
    rules() {
        return {};
    }
}
exports.BaseValidator = BaseValidator;
//# sourceMappingURL=base.validator.js.map