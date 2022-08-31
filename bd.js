const Sequelize = require('sequelize');
const dbConfig = require('../database.js');

const sequelize = new Sequelize(dbConfig);


module.exports = sequelize;