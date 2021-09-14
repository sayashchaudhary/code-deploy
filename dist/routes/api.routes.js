"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("./entities/auth.route");
exports.apiRoutes = express_1.default.Router();
exports.apiRoutes.use("/auth", auth_route_1.router);
//# sourceMappingURL=api.routes.js.map