const { DataTypes } = require('sequelize');
const db = require('./database');

const Beer = db.define('Beer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    style: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
}, {
    tableName: 'Beers',
    timestamps: false
});

module.exports = Beer;
