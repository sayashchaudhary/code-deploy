"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=error.handler.js.map