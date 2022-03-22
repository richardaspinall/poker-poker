"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_1 = require("socket.io");
var PlayerController_1 = __importDefault(require("./player/PlayerController"));
var TableController_1 = __importDefault(require("./table/TableController"));
var SocketServer = /** @class */ (function () {
    function SocketServer() {
    }
    SocketServer.getInstance = function () {
        return SocketServer.io;
    };
    SocketServer.initialize = function (httpServer) {
        var _this = this;
        if (!this.io) {
            this.io = new socket_io_1.Server(httpServer, {
            /* options */
            });
            var onConnection = function (socket) {
                TableController_1.default(_this.io, socket);
                PlayerController_1.default(_this.io, socket);
            };
            this.io.on('connection', onConnection);
        }
        else {
            throw Error('Server already initialized');
        }
    };
    SocketServer.emitToTable = function (event, tableName, args) {
        this.io.to(tableName).emit(event, args);
    };
    return SocketServer;
}());
exports.default = SocketServer;
