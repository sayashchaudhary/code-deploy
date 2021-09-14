"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV_DATABASE = exports.ENV_PASSWORD = exports.ENV_USERNAME = exports.ENV_HOSTNAME = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
exports.PORT = process.env.PORT;
exports.ENV_HOSTNAME = process.env.HOST;
exports.ENV_USERNAME = process.env.USERNAME;
exports.ENV_PASSWORD = process.env.PASSWORD;
exports.ENV_DATABASE = process.env.DATABSE;
//# sourceMappingURL=secrets.util.js.map