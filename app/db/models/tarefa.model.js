const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Tarefa = sequelize.define(name,{
    descricao: {
        type: DataTypes.TEXT
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'Criado_em'
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'Atualizado_em'
    }
},{
    sequelize,
    tableName: name
});

Tarefa.associate = (models) => {
    Tarefa.belongsTo(models.aluno, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'aluno'
    })

    Tarefa.belongsTo(models.grupo, {
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'grupo'
    })
}

module.exports = Tarefa;