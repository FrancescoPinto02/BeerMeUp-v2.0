const beerService = require('../../services/beer');
const utils = require('../../models/utils');

const beerController = {};

beerController.GetAll = async (req, res) => {
    try {
        const beers = await beerService.getAll();
        res.render('test', { beers: utils.convertToPlain(beers) });
    } catch (error) {
        res.render('error', {error: error.message});
    }
};

module.exports = beerController;
