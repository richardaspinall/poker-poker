"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dealer_1 = __importDefault(require("./Dealer"));
var Hand_1 = __importDefault(require("./Hand"));
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.newHand = function (table) {
        var players = table.getAllPlayers();
        var deck = ['AS', 'AD', 'AC', 'AH', 'KS', 'KD', 'KS', 'KC', 'QS', 'QH', 'QD', 'QC'];
        var hand = new Hand_1.default(deck);
        if (players) {
            Dealer_1.default.deal(hand, table);
        }
    };
    Game.endTurn = function (player, table) {
        var players = table.getAllPlayers();
        // Get all players and check if more than 1 player has cards, if not, end hand
        //
    };
    return Game;
}());
exports.default = Game;
