"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var sockets_1 = __importDefault(require("./sockets"));
var db_1 = require("./db");
(0, db_1.initDb)();
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', routes_1.default);
var httpServer = (0, http_1.createServer)(app);
(0, sockets_1.default)(httpServer);
var PORT = process.env.PORT || 4000;
httpServer.listen({ port: PORT }, function () {
    console.log("httpServer ready at http://localhost:".concat(PORT));
});
