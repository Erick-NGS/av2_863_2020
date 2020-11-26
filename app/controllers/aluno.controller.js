const models = require('../db/models');

//GET (SELECT)//

//index GET ALL
exports.index = async () => {
    const res = await models.aluno.findAll({
        include: ['tarefas']
    });
    return res;
}

//show GET ID
exports.show = async (id) => {
    const res = await models.aluno.findByPk(id,{
        include: ['tarefas']
    });
    return res;
}



//POST (INSERT)//

//store POST aluno
exports.store = async (aluno) => {
    const res = await models.aluno.create(aluno, {
        include: ['tarefas']
    });
    return res;
}


//PUT (UPDATE)//

//update PUT aluno,ID
exports.update = async (aluno, id) => {
    const res = await models.aluno.update(aluno, {
        where: { id: id }
    })

    return res;
}


//DELETE (DELETE)//

//destroy DELETE ID
exports.destroy = async (id) => {
    const res = await models.aluno.destroy({
        where: { id: id }
    });

    return res;
}