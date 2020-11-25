const models = require('../db/models');

//GET (SELECT)//

//index GET ALL
exports.index = async () => {
    const res = await models.tarefa.findAll({
        include: ['aluno', 'grupo']
    });
    return res;
}

//show GET ID
exports.show = async (id) => {
    const res = await models.tarefa.findByPk(id, {
        include: ['aluno', 'grupo']
    });
    return res;
}



//POST (INSERT)//

//store POST tarefa
exports.store = async (tarefa) => {
    const res = await models.tarefa.create(tarefa);
    return res;
}


//PUT (UPDATE)//

//update PUT tarefa,ID
exports.update = async (tarefa, id) => {
    const res = await models.tarefa.update(tarefa, {
        where: { id: id }
    })

    return res;
}


//DELETE (DELETE)//

//destroy DELETE ID
exports.destroy = async (id) => {
    const res = await models.tarefa.destroy({
        where: { id: id }
    });

    return res;
}