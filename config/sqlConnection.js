const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 100,
    port: 2306,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

module.exports = pool;