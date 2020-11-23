const models = require('../db/models');

//GET (SELECT)//

//index GET ALL
exports.index = async () => {
    const res = await models.usuario.findAll({
        include: ['aluno']
    });
    return res;
}

//show GET ID
exports.show = async (id) => {
    const res = await models.usuario.findByPk(id);
    return res;
}



//POST (INSERT)//

//store POST usuario
exports.store = async (usuario) => {
    const res = await models.usuario.create(usuario, {
        include: ['aluno', 'questoes']
    });
    return res;
}


//PUT (UPDATE)//

//update PUT usuario,ID
exports.update = async (usuario, id) => {
    const res = await models.usuario.update(usuario, {
        where: { id: id }
    })

    return res;
}


//DELETE (DELETE)//

//destroy DELETE ID
exports.destroy = async (id) => {
    const res = await models.usuario.destroy({
        where: { id: id }
    });

    return res;
}