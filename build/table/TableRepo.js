"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Table_1 = __importDefault(require("./Table"));
var table1 = new Table_1.default('table1', 9);
var table2 = new Table_1.default('table2', 9);
var tables = [table1, table2];
function getTable(tableName) {
    for (var _i = 0, tables_1 = tables; _i < tables_1.length; _i++) {
        var table = tables_1[_i];
        if (table.tableName == tableName) {
            return table;
        }
    }
    return null;
}
exports.default = { getTable: getTable };
