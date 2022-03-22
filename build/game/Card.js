"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Suits;
(function (Suits) {
    Suits[Suits["SPADES"] = 0] = "SPADES";
    Suits[Suits["HEARTS"] = 1] = "HEARTS";
    Suits[Suits["DIAMONDS"] = 2] = "DIAMONDS";
    Suits[Suits["CLUBS"] = 3] = "CLUBS";
})(Suits || (Suits = {}));
var Rank;
(function (Rank) {
    Rank[Rank["TWO"] = 2] = "TWO";
    Rank[Rank["THREE"] = 3] = "THREE";
    Rank[Rank["FOUR"] = 4] = "FOUR";
    Rank[Rank["FIVE"] = 5] = "FIVE";
    Rank[Rank["SIX"] = 6] = "SIX";
    Rank[Rank["SEVEN"] = 7] = "SEVEN";
    Rank[Rank["EIGHT"] = 8] = "EIGHT";
    Rank[Rank["NINE"] = 9] = "NINE";
    Rank[Rank["TEN"] = 10] = "TEN";
    Rank[Rank["JACK"] = 11] = "JACK";
    Rank[Rank["QUEEN"] = 12] = "QUEEN";
    Rank[Rank["KING"] = 13] = "KING";
    Rank[Rank["ACE"] = 14] = "ACE";
})(Rank || (Rank = {}));
var Card = /** @class */ (function () {
    function Card() {
        this.suit = Suits.CLUBS;
        this.rank = Rank['ACE'];
    }
    Card.prototype.getSuit = function () {
        return Suits[0];
    };
    Card.prototype.getSuitName = function () {
        return this.suit;
    };
    Card.prototype.getRank = function () {
        return this.rank;
    };
    return Card;
}());
exports.default = Card;
