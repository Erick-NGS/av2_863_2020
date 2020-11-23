const models = require('../db/models');

//GET (SELECT)//

//index GET ALL
exports.index = async () => {
    const res = await models.questao.findAll({
        include: ['usuario']
    });
    return res;
}

//show GET ID
exports.show = async (id) => {
    const res = await models.questao.findByPk(id, {
        include: ['usuario']
    });
    return res;
}



//POST (INSERT)//

//store POST questao
exports.store = async (questao) => {
    const res = await models.questao.create(questao);
    return res;
}


//PUT (UPDATE)//

//update PUT questao,ID
exports.update = async (questao, id) => {
    const res = await models.questao.update(questao, {
        where: { id: id }
    })

    return res;
}


//DELETE (DELETE)//

//destroy DELETE ID
exports.destroy = async (id) => {
    const res = await models.questao.destroy({
        where: { id: id }
    });

    return res;
}