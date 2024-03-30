const { DataTypes } = require('sequelize');
const db = require('./database');

const color = {};

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

color.getColorById = (id) => Color.findByPk(id);

color.getAllColors = () => Color.findAll();

color.createColor = (name) => Color.create({
    name,
});

color.updateColor = (id, newData) => Color.update(newData, {
    where: {
        id,
    },
});

color.deleteColor = (id) => Color.destroy({
    where: {
        id,
    },
});

color.Color = Color;

module.exports = color;
