const { DataTypes } = require('sequelize');
const db = require('./database');

const style = {};

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

style.getStyleById = (id) => Style.findByPk(id);

style.getAllStyles = () => Style.findAll();

style.createStyle = (name, description) => Style.create({
    name,
    description,
});

style.updateStyle = (id, newData) => Style.update(newData, {
    where: {
        id,
    },
});

style.deleteStyle = (id) => Style.destroy({
    where: {
        id,
    },
});

style.Style = Style;

module.exports = style;
