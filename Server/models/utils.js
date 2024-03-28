const utils = {};

//Converts Sequelize Complex Object into plain object
//(also works with arrays)
utils.convertToPlain = (obj) =>{
    if(Array.isArray(obj)){
        return obj.map(item => item.get({plain: true}));
    }
    else{
        return obj.get({ plain: true });
    }
}

module.exports = utils;