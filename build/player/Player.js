"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(socket, isReady) {
        this.holeCards = {};
        this.socket = socket;
        this.isReady = isReady;
    }
    Player.prototype.setIsReady = function (isReady) {
        this.isReady = isReady;
    };
    Player.prototype.setHoleCards = function (holeCards) {
        this.holeCards = holeCards;
    };
    Player.prototype.fold = function (table) {
        if (table.actingPlayer == this) {
            this.holeCards = {};
        }
        else {
            throw Error('Not your turn');
        }
    };
    Player.prototype.call = function (table) {
        console.log('Player calls');
    };
    Player.prototype.raise = function (table, amount) {
        console.log('Player raise');
    };
    return Player;
}());
exports.default = Player;
