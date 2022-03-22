"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TableRepo_1 = __importDefault(require("../table/TableRepo"));
var GameController_1 = __importDefault(require("../game/GameController"));
exports.default = (function (io, socket) {
    var playerReady = function (tableName) {
        var table = TableRepo_1.default.getTable(tableName);
        if (table) {
            var player = table.getPlayer(socket);
            if (player) {
                player.setIsReady(true);
            }
            GameController_1.default.emit('player:ready', table);
        }
    };
    var playerFold = function (tableName, seatNumber) {
        var table = TableRepo_1.default.getTable(tableName);
        if (table) {
            var player = table.getPlayer(socket);
            if (player) {
                try {
                    player.fold(table);
                    GameController_1.default.emit('player:fold', player, table, seatNumber);
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
    };
    socket.on('player:ready', playerReady);
    socket.on('player:fold', playerFold);
});
