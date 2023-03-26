import { Pool } from "pg";

const pool = new Pool({
    user: "christopher",
    password: "yalbano2",
    host: "localhost",
    database: "heroes_villians",
    port: 5432,
});

export default pool;
