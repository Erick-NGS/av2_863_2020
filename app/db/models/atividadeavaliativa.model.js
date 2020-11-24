const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const AtividadeAvaliativa = sequelize.define(name, {
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
}, {
    sequelize,
    tableName: name
});

AtividadeAvaliativa.associate = (models) => {
    AtividadeAvaliativa.belongsTo(models.turma, {
        foreignKey: {
            name: 'id_turma'
        },
        as: 'turma'
    })

    AtividadeAvaliativa.hasMany(models.grupo, {
        foreignKey: {
            name: 'id_atividadeavaliativa'
        },
        as:'grupos'
    })
}


module.exports = AtividadeAvaliativa;

