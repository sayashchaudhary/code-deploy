"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidator = void 0;
const base_validator_1 = require("../base.validator");
class LoginValidator extends base_validator_1.BaseValidator {
    rules() {
        return {
            "email": "required|email",
            "password": "required|string"
        };
    }
}
exports.LoginValidator = LoginValidator;
//# sourceMappingURL=login.validator.js.map