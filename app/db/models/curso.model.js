const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Curso = sequelize.define(name, {
    nome: {
        type: DataTypes.STRING(50)
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'Criado_em'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'Atualizado_em'
    }
}, {
    sequelize,
    tableName: name
});

Curso.associate = (models) => {
    Curso.belongsToMany(models.turma, {
        through: 'turma_curso',
        timestamps: false,
        foreignKey: {
            name: 'id_curso'
        },
        as: 'turmas'
    })

    Curso.hasMany(models.aluno, {
        foreignKey: {
            name: 'id_curso'
        },
        as:'alunos'
    })
}


module.exports = Curso;