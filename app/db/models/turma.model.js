const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Turma = sequelize.define(name, {
    codigo: {
        type: DataTypes.STRING(3)
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

Turma.associate = (models) => {
    Turma.belongsToMany(models.aluno, {
        through: 'aluno_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'alunos'
    })

    Turma.belongsToMany(models.professor, {
        through: 'professor_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'professores'
    })
    
    Turma.belongsTo(models.disciplina, {
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'disciplina'
    })

    Turma.belongsToMany(models.curso, {
        through: 'turma_curso',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'cursos'
    })

    Turma.belongsToMany(models.hardskill, {
        through: 'turma_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'hardskills'
    })
}


module.exports = Turma;