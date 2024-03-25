"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var schemas_1 = __importDefault(require("./schemas"));
var supportedMethods = ["post", "put", "patch", "delete"];
var validationOptions = {
    abortEarly: false,
    allowUnknown: false,
    stripUnknown: false,
};
var schemaValidator = function (path, useJoiError) {
    if (useJoiError === void 0) { useJoiError = true; }
    var schema = schemas_1.default[path];
    if (!schema) {
        throw new Error("Schema not found for path: ".concat(path));
    }
    return function (req, res, next) {
        var method = req.method.toLowerCase();
        if (!supportedMethods.includes(method)) {
            return next();
        }
        var _a = schema.validate(req.body, validationOptions), error = _a.error, value = _a.value;
        if (error) {
            var customError = {
                status: "failed",
                error: "Invalid request. Please review request and try again.",
            };
            var joiError = {
                status: "failed",
                error: {
                    original: error._original,
                    details: error.details.map(function (_a) {
                        var message = _a.message, type = _a.type;
                        return ({
                            message: message.replace(/['"]/g, ""),
                            type: type,
                        });
                    }),
                },
            };
            return res.status(422).json(useJoiError ? joiError : customError);
        }
        // validation successful
        req.body = value;
        return next();
    };
};
exports.default = schemaValidator;
