const { DataTypes } = require('sequelize');
const db = require('./database');

const Style = db.define('Style', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(1024),
        allowNull: true,
    },
}, {
    tableName: 'Styles',
    timestamps: false,
});

module.exports = Style;
