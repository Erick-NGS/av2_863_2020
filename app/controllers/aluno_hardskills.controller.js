const models = require('../db/models');


//POST (INSERT)//

//store POST hardskill

let new_aluno_hardskill = [];

exports.store = async (obj, id_aluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: id_aluno }
    })

    for (let hs in obj.hardskills){
        let hardskill = obj.hardskills[hs];
        //console.log(hardskill);

        const [res] =  await models.hardskill.findOrCreate({
            where: hardskill
        })

        new_aluno_hardskill.push(res.id);
       // console.log(res);
    }

    aluno.addHardskill(new_aluno_hardskill);

    return true;
}


//DELETE (DELETE)//

//destroy DELETE ID
exports.destroy = async (obj, id_aluno) => {

    const aluno = await models.aluno.findOne({
        where: { id: id_aluno }
    })

    for (let hs in obj.hardskills){
        let hardskill = obj.hardskills[hs];
       // console.log(hardskill);

        const [res] =  await models.hardskill.findOrCreate({
            where: hardskill
        })

        new_aluno_hardskill.push(res.id);
       // console.log(res);
    }

    aluno.removeHardskill(new_aluno_hardskill);

    return true;

}