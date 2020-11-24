const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Avaliacao360 = sequelize.define(name, {
    descricao: {
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

Avaliacao360.associate = (models) => {
    Avaliacao360.belongsTo(models.atividadeavaliativa, {
        foreignKey: {
            name: 'id_atividadeavaliativa'
        },
        as: 'atividadeavaliativa'
    })

    Avaliacao360.belongsTo(models.grupo, {
        foreignKey: {
            name: 'id_grupo'
        },
        as:'grupo'
    })
}


module.exports = Avaliacao360;

