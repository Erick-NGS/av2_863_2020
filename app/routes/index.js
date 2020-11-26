const usuario = require('./usuario.routes');
const questao = require('./questao.routes');
const hardskill = require('./hardskill.routes');
const alunoHardSkills = require('./aluno_hardskills.routes');
const tarefa = require('./tarefa.routes');
const aluno = require('./aluno.routes');

module.exports = app => {
    app.use('/api/usuario', usuario);
    app.use('/api/questao', questao);
    app.use('/api/hardskill', hardskill);
    app.use('/api/aluno_hardskills', alunoHardSkills);
    app.use('/api/tarefa', tarefa);
    app.use('/api/aluno', aluno);
}