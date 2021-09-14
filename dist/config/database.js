"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
module.exports = {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABSE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
};
//# sourceMappingURL=database.js.map