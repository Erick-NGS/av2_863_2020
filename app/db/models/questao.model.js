const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const Questao = sequelize.define(name,{
    descricao: {
        type: DataTypes.TEXT
    },
    resposta: {
        type: DataTypes.TEXT
    },
    correta: {
        type: DataTypes.BOOLEAN,
        defaultValue:false,
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

Questao.associate = (models) => {
    Questao.belongsTo(models.usuario, {
        foreignKey: {
            name: 'id_usuario'
        },
        as: 'usuario'
    })

        Questao.belongsTo(models.hardskill, {
            foreignKey: {
                name: 'id_hardskill'
            },
            as: 'hardskill'
        })
}

module.exports = Questao;