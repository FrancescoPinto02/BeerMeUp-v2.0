const { DataTypes } = require('sequelize');
const db = require('./database');

const brewery = {};

const Brewery = db.define('Brewery', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    website: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    nationality: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING(1024),
        allowNull: true,
    },
}, {
    tableName: 'Breweries',
    timestamps: false,
});

brewery.getBreweryById = (id) => Brewery.findByPk(id);

brewery.getAllBreweries = () => Brewery.findAll();

brewery.createBrewery = (name, location, website, nationality, description) => Brewery.create({
    name,
    location,
    website,
    nationality,
    description,
});

brewery.updateBrewery = (id, newData) => Brewery.update(newData, {
    where: {
        id,
    },
});

brewery.deleteBrewery = (id) => Brewery.destroy({
    where: {
        id,
    },
});

brewery.Brewery = Brewery;

module.exports = brewery;
