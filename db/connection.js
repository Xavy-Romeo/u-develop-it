const mysql = require('mysql2');
require('dotenv').config();

// connect to database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  // Your MySQL username,
  user: process.env.DB_USER,
  // Your MySQL password
  password: process.env.DB_PASS,
  database: process.env.DB_DB
});

module.exports = db;