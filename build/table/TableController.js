"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SocketServer_1 = __importDefault(require("../SocketServer"));
var GameController_1 = __importDefault(require("../game/GameController"));
var Player_1 = __importDefault(require("../player/Player"));
var TableRepo_1 = __importDefault(require("./TableRepo"));
exports.default = (function (io, socket) {
    var tableView = function (tableName) {
        socket.join(tableName);
    };
    var tableJoin = function (tableName, seatNumber) {
        var table = TableRepo_1.default.getTable(tableName);
        if (table) {
            table.addPlayer(seatNumber, new Player_1.default(socket, false));
            SocketServer_1.default.emitToTable('table:join', tableName, { seat: seatNumber });
            GameController_1.default.emit('table:join', table);
        }
    };
    socket.on('table:view', tableView);
    socket.on('table:join', tableJoin);
});
