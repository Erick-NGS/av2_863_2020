const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const QuestaoDia = sequelize.define(name,{
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

QuestaoDia.associate = (models) => {
    QuestaoDia.belongsTo(models.aluno, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'aluno'
    })

    QuestaoDia.belongsTo(models.questao, {
        foreignKey: {
            name: 'id_questao'
        },
        as: 'questao'
    })
}

module.exports = QuestaoDia;