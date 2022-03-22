"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var SocketServer_1 = __importDefault(require("./SocketServer"));
var app = express_1.default();
var httpServer = http_1.createServer(app);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
httpServer.listen(3000);
SocketServer_1.default.initialize(httpServer);
