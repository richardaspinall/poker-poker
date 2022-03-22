"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line no-undef
var dealer_js_1 = require("./dealer.js");
var socket = io('/');
var seatNumber;
var tableNumber = 'table1';
socket.emit('table:view', tableNumber);
document.querySelectorAll('.seat').forEach(function (seat) {
    seat.addEventListener('click', function () {
        socket.emit('table:join', tableNumber, this.id);
        seatNumber = this.id;
    });
});
document.getElementById('fold-action').addEventListener('click', function () {
    socket.emit('player:fold', tableNumber, seatNumber);
});
document.getElementById('ready-action').addEventListener('click', function () {
    socket.emit('player:ready', tableNumber);
});
socket.on('table:join', function (event) {
    var seat = document.getElementById(event.seat);
    seat.innerHTML = "\n  <div class=\"player\">\n      <div class=\"head\"></div>\n      <div class=\"body\"></div>\n  </div>\n  <div class=\"hole-cards\">\n      <div class=\"card-1\"></div>\n      <div class=\"card-2\"></div>\n  </div>\n  ";
});
socket.on('cards', function (holeCards, playerSeatNumbers) {
    dealer_js_1.dealCards(seatNumber, holeCards, playerSeatNumbers);
});
socket.on('player:fold', function (event) {
    document.getElementById(event.seat).innerHTML = "\n  <div class=\"player\">\n      <div class=\"head\"></div>\n      <div class=\"body\"></div>\n  </div>\n  <div class=\"hole-cards\">\n      <div class=\"card-1\"></div>\n      <div class=\"card-2\"></div>\n  </div>\n  ";
});
socket.on('error', function () {
    console.log('ERROR');
});
