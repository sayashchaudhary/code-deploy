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
exports.authService = exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../../models/user.model");
const error_handler_1 = require("../../handlers/error.handler");
class AuthService {
    static getInstance() {
        return new AuthService();
    }
    signUp(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.User.findOne({
                where: {
                    email: newUser.email
                }
            });
            if (!user) {
                const saveUser = yield user_model_1.User.create(Object.assign(Object.assign({}, newUser), { password: yield this.hashPassword(newUser.password) }));
                return {
                    id: saveUser.id,
                    role: saveUser.role,
                    name: saveUser.name,
                    email: saveUser.email,
                    phoneNumber: saveUser.phoneNumber
                };
            }
            else {
                throw new error_handler_1.ErrorHandler('User already exist', 400);
            }
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.User.findOne({
                where: {
                    email
                }
            });
            if (user) {
                const isPasswordCorrect = bcrypt_1.default.compare(password, user.password);
                if (isPasswordCorrect) {
                    return {
                        id: user.id,
                        role: user.role,
                        name: user.name,
                        email: user.email,
                        phoneNumber: user.phoneNumber
                    };
                }
                else {
                    throw new error_handler_1.ErrorHandler('Incorrect Password!', 400);
                }
            }
            else {
                throw new error_handler_1.ErrorHandler('User not found!', 400);
            }
        });
    }
    hashPassword(password) {
        return new Promise((resolve, reject) => {
            bcrypt_1.default.genSalt(10, (err, salt) => {
                if (!err) {
                    bcrypt_1.default.hash(password, salt, (err, hash) => {
                        if (err)
                            reject(err);
                        else
                            resolve(hash);
                    });
                }
            });
        });
    }
}
exports.AuthService = AuthService;
exports.authService = AuthService.getInstance();
//# sourceMappingURL=auth.service.js.map