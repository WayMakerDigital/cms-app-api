const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'sequelize_database_dev',
    'postgres',
    'password',
    {
        dialect: 'postgres',
        host: 'localhost',
    }
);
module.exports = sequelize;