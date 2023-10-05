const { sequelize, Sequelize } = require('sequelize');
const { dbUser, dbPassword, dbHost, dbPort, dbName } = require('./../config/config');
const setupModels = require ('../db')

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);

const URI = `mysql://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

const sequelize = new Sequelize(URI, {
    dialect: 'mysql',
    logging: false,
});

setupModels(sequelize);

module.exports(sequelize);