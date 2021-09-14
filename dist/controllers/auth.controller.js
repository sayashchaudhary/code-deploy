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
exports.login = exports.signUp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signup_validator_1 = require("../utils/validator/auth/signup.validator");
const login_validator_1 = require("../utils/validator/auth/login.validator");
const auth_service_1 = require("../services/entities/auth.service");
const error_handler_1 = require("../handlers/error.handler");
exports.signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const validator = new signup_validator_1.SignupValidator();
    try {
        yield validator.validate(req, validator.rules());
    }
    catch (e) {
        return res.status(422).json({
            message: e.errors
        });
    }
    try {
        const newUser = yield auth_service_1.authService.signUp(req.body);
        res.json({
            data: newUser
        });
    }
    catch (e) {
        throw new error_handler_1.ErrorHandler(e, 422);
    }
});
exports.login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const validator = new login_validator_1.LoginValidator();
    try {
        yield validator.validate(req, validator.rules());
    }
    catch (e) {
        return res.status(422).json({
            message: e.errors
        });
    }
    try {
        const user = yield auth_service_1.authService.login(req.body.email, req.body.password);
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
            name: user.name,
            email: user.email
        }, "secret");
        res.json({
            data: user,
            token: token
        });
    }
    catch (e) {
        throw new error_handler_1.ErrorHandler('User not exist', 400);
    }
});
//# sourceMappingURL=auth.controller.js.map