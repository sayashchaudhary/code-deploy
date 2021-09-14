"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_service_1 = require("./services/db.service");
const api_routes_1 = require("./routes/api.routes");
const app = express_1.default();
const Port = process.env.PORT || 3000;
db_service_1.dbService;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
//My Routes
app.use(api_routes_1.apiRoutes);
app.get('/', (req, res) => {
    res.json('Testing Route');
});
//Setting localhost Port
app.listen(Port, () => {
    console.log(`Server is running on ${Port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map