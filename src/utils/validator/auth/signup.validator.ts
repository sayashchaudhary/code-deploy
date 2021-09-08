import {BaseValidator} from "../base.validator";

export class SignupValidator extends BaseValidator {
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
