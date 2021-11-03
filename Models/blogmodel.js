const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
    'sequelize_database_dev',
    'postgres',
    'Nagito1',
    {
        dialect: 'postgres',
        host: 'localhost',
    }
);

class Blogs extends Model {}

Blogs.init({

    author: {
        type: DataTypes.STRING
    },
    title: {
        type: DataTypes.TEXT
    },
    summary: {
        type: DataTypes.TEXT
    },
    content: {
        type: DataTypes.TEXT
    },
    date: {
        type: DataTypes.DATE,
        default: Date.now
    },
    imageURL: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'Blogs'
});

module.exports = sequelize.models.Blogs