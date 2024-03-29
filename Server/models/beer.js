const { DataTypes } = require('sequelize');
const db = require('./database');
const brewery = require('./brewery');
const Style = require('./style');
const Color = require('./color');

const DEF_IMG_PATH = `${process.env.BASE_URL}/img/beers/default.png`;

const Beer = db.define('Beer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    breweryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: brewery.Brewery,
            key: 'id',
        },
    },
    styleID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Style,
            key: 'id',
        },
    },
    colorID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Color,
            key: 'id',
        },
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    abv: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false,
    },
    ibu: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    img: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: DEF_IMG_PATH,
    },
    description: {
        type: DataTypes.STRING(1024),
        allowNull: true,
    },
}, {
    tableName: 'Beers',
    timestamps: false,
});

module.exports = Beer;
