"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var Game_1 = __importDefault(require("./Game"));
var SocketServer_1 = __importDefault(require("../SocketServer"));
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GameController;
}(events_1.EventEmitter));
var gameController = new GameController();
gameController.on('player:ready', function (table) {
    if (table.checkPlayersAreReady()) {
        Game_1.default.newHand(table);
    }
});
gameController.on('player:join', function (table) {
    if (table.checkPlayersAreReady()) {
        Game_1.default.newHand(table);
    }
});
gameController.on('player:fold', function (player, table, seatNumber) {
    // This logic should go in the Game class, and a TRY CATCH should be done here / error handling
    // For example: the player isn't the acting player
    SocketServer_1.default.emitToTable('player:fold', table.tableName, { seat: seatNumber });
    Game_1.default.endTurn(player, table);
});
exports.default = gameController;
