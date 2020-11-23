const models = require('../db/models');

//GET (SELECT)//

//index GET ALL
exports.index = async () => {
    const res = await models.hardskill.findAll();
    return res;
}

//show GET ID
exports.show = async (id) => {
    const res = await models.hardskill.findByPk(id);
    return res;
}



//POST (INSERT)//

//store POST hardskill
exports.store = async (hardskill) => {
    const res = await models.hardskill.create(hardskill);
    return res;
}


//PUT (UPDATE)//

//update PUT hardskill,ID
exports.update = async (hardskill, id) => {
    const res = await models.hardskill.update(hardskill, {
        where: { id: id }
    })

    return res;
}


//DELETE (DELETE)//

//destroy DELETE ID
exports.destroy = async (id) => {
    const res = await models.hardskill.destroy({
        where: { id: id }
    });

    return res;
}