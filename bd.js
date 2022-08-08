const Sequelize = require('sequelize');

const sequelize = new Sequelize("celke", "root", "123456", {
    host: 'localhost',
    dialect: 'mysql'