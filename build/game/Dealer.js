"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dealer = /** @class */ (function () {
    function Dealer() {
    }
    Dealer.deal = function (hand, table) {
        var seats = table.seats;
        var playerSeatNumbers = [];
        seats.forEach(function (seat) {
            if (seat.player && seat.player.isReady) {
                playerSeatNumbers.push(seat.seatNumber);
            }
        });
        var players = table.getAllPlayers();
        players.forEach(function (player) {
            player.setHoleCards({
                card1: hand.deck[Math.floor(Math.random() * 12)],
                card2: hand.deck[Math.floor(Math.random() * 12)],
            });
            player.socket.emit('cards', player.holeCards, playerSeatNumbers);
        });
    };
    return Dealer;
}());
exports.default = Dealer;
