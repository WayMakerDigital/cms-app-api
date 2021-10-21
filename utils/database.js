const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'sequelize_database_dev',
    'postgres',
    'Nagito1',
    {
        dialect: 'postgres',
        host: 'localhost',
    }
);
module.exports = sequelize;