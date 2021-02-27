const mysql = require('mysql2')
require('dotenv').config()



const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: '3306' || process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
})



module.exports = connection