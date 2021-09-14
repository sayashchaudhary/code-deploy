"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../../controllers/auth.controller");
exports.router = express_1.Router();
exports.router.post('/register', auth_controller_1.signUp);
exports.router.post('/login', auth_controller_1.login);
//# sourceMappingURL=auth.route.js.map