"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Seat = /** @class */ (function () {
    function Seat(seatNumber) {
        this.seatNumber = seatNumber;
    }
    Seat.prototype.addPlayer = function (player) {
        this.player = player;
    };
    return Seat;
}());
exports.default = Seat;
