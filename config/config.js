require('dotenv').config();

const { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME,  DB_PORT} = process.env

const config = {
    port: PORT,
    dbPassword: DB_PASSWORD,
    dbUser: DB_USER,
    dbName: DB_NAME,
    dbPort: DB_PORT,
    dbHost: DB_HOST
};

module.exports = config;