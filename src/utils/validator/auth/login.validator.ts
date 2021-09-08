import { BaseValidator } from "../base.validator";

export class LoginValidator extends BaseValidator {
  rules() {
    return {
      "email": "required|email",
      "password": "required|string"
    };
  }
}
