"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Seat_1 = __importDefault(require("./Seat"));
var Table = /** @class */ (function () {
    function Table(tableName, numSeats) {
        this.tableName = tableName;
        this.seats = [];
        for (var seatNumber = 1; seatNumber <= numSeats; seatNumber++) {
            this.seats.push(new Seat_1.default("seat-" + seatNumber));
        }
    }
    Table.prototype.setHand = function (hand) {
        this.hand = hand;
    };
    Table.prototype.getHand = function () {
        return this.hand;
    };
    Table.prototype.setActingPlayer = function (actingPlayer) {
        this.actingPlayer = actingPlayer;
    };
    Table.prototype.getActingPlayer = function () {
        return this.actingPlayer;
    };
    Table.prototype.addPlayer = function (seatNumber, player) {
        for (var _i = 0, _a = this.seats; _i < _a.length; _i++) {
            var seat = _a[_i];
            if (seat.seatNumber == seatNumber) {
                seat.addPlayer(player);
            }
        }
    };
    Table.prototype.getPlayer = function (socket) {
        var _a;
        for (var _i = 0, _b = this.seats; _i < _b.length; _i++) {
            var seat = _b[_i];
            if (((_a = seat.player) === null || _a === void 0 ? void 0 : _a.socket) == socket) {
                return seat.player;
            }
        }
        return null;
    };
    Table.prototype.getAllPlayers = function () {
        var players = [];
        this.seats.forEach(function (seat) {
            if (seat.player) {
                players.push(seat.player);
            }
        });
        return players;
    };
    Table.prototype.checkPlayersAreReady = function () {
        var players = this.getAllPlayers();
        var count = 0;
        if (players) {
            players.forEach(function (player) {
                if (player.isReady) {
                    count++;
                }
            });
        }
        if (count > 1) {
            return true;
        }
        return false;
    };
    return Table;
}());
exports.default = Table;
