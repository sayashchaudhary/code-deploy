import Validator from "validatorjs"

export class BaseValidator {

  validate = async (req: any, rules: {}) => new Promise((resolve, reject) => {
    const data = { ...req.body, ...req.query, ...req.params };
    const validator = new Validator(data, rules);
    validator.fails(() => {
      reject(validator.errors);
    });
    validator.passes(() => {
      resolve();
    });
  });

  rules() {
    return {};
  }
}
