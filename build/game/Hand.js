"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hand = /** @class */ (function () {
    function Hand(deck) {
        this.deck = deck;
    }
    Hand.prototype.drawCard = function () {
        return this.deck.pop;
    };
    return Hand;
}());
exports.default = Hand;
