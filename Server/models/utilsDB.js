const utilsDB = {};

utilsDB.createAssociations = () => {
    // eslint-disable-next-line global-require
    const beer = require('./beer');
    // eslint-disable-next-line global-require
    const style = require('./style');
    // eslint-disable-next-line global-require
    const color = require('./color');
    // eslint-disable-next-line global-require
    const brewery = require('./brewery');

    // Beer --> Brewery
    beer.Beer.belongsTo(brewery.Brewery, {
        foreignKey: 'breweryID',
        as: 'brewery',
    });
    brewery.Brewery.hasMany(beer.Beer, {
        foreignKey: 'breweryID',
        as: 'beers',
    });

    // Beer --> Style
    beer.Beer.belongsTo(style.Style, {
        foreignKey: 'styleID',
        as: 'style',
    });
    style.Style.hasMany(beer.Beer, {
        foreignKey: 'styleID',
        as: 'beers',
    });

    // Beer --> Color
    beer.Beer.belongsTo(color.Color, {
        foreignKey: 'colorID',
        as: 'color',
    });
    color.Color.hasMany(beer.Beer, {
        foreignKey: 'colorID',
        as: 'beers',
    });
};

module.exports = utilsDB;
