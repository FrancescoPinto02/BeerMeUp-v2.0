const { DataTypes } = require('sequelize');
const db = require('./database');

const Color = db.define('Color', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    tableName: 'Colors',
    timestamps: false,
});

module.exports = Color;
