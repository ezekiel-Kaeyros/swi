"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticate = exports.verifyToken = exports.createToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var ErrorCodes_1 = require("../constants/ErrorCodes");
var secret = 'swivy-app';
var createToken = function (user) {
    return jsonwebtoken_1.default.sign({ user: { userId: user._id, email: user.email } }, 'swivy-app', { expiresIn: '1h' });
};
exports.createToken = createToken;
var verifyToken = function (token) {
    return jsonwebtoken_1.default.verify(token, secret);
};
exports.verifyToken = verifyToken;
var isAuthenticate = function (req, res, next) {
    var token = req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.status(ErrorCodes_1.ErrorCodes.Un_Authorized).send('Access Denied. No token provided.');
    }
    try {
        var decoded = jsonwebtoken_1.default.verify(token, secret);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(ErrorCodes_1.ErrorCodes.Bad_Request).send('Invalid Token.');
    }
};
exports.isAuthenticate = isAuthenticate;
