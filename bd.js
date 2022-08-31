const Sequelize = require('sequelize');

const sequelize = new Sequelize("", "", "", {
    host: 'localhost',
    dialect: 'mssql'})

module.exports = sequelize;