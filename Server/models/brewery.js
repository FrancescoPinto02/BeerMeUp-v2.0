const { DataTypes } = require('sequelize');
const db = require('./database');

const Brewery = db.define('Brewery',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    location: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    website: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    nationality: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    description: {
        type: DataTypes.STRING(1024),
        allowNull: true
    }
},{
    tableName: 'Breweries',
    timestamps: false
});

module.exports = Brewery;