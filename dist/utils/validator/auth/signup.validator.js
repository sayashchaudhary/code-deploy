"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupValidator = void 0;
const base_validator_1 = require("../base.validator");
class SignupValidator extends base_validator_1.BaseValidator {
    rules() {
        return {
            "role": "required|string",
            "name": "required|string",
            "email": "required|email",
            "password": "required|string|min:6",
            "phoneNumber": "required|string|min:6"
        };
    }
}
exports.SignupValidator = SignupValidator;
//# sourceMappingURL=signup.validator.js.map