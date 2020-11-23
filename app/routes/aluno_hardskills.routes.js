module.exports = (() => {
    const aluno_hardskillsController = require('../controllers/aluno_hardskills.controller');

    var router = require('express').Router();

    router.post("/:id",async (req,res) => {
        const aluno_hardskills = await aluno_hardskillsController.store(req.body, req.params.id);
        res.json(aluno_hardskills);
    })

    router.delete("/:id",async (req,res) => {
        const aluno_hardskills = await aluno_hardskillsController.destroy(req.body, req.params.id);
        res.json(aluno_hardskills);
    })

    return router;


})()