"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "christopher",
    password: "yalbano2",
    host: "localhost",
    database: "heroes_villians",
    port: 5432,
});
exports.default = pool;
