const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Grupo = sequelize.define(name, {
    numeroGrupo: {
        type: DataTypes.STRING(4)
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'Criado_em'
    }
}, {
    sequelize,
    tableName: name
});

Grupo.associate = (models) => {
    Grupo.belongsTo(models.turma, {
        foreignKey: {
            name: 'id_turma'
        },
        as: 'turma'
    })

    Grupo.belongsTo(models.atividadeavaliativa, {
        foreignKey: {
            name: 'id_atividadeavaliativa'
        },
        as: 'atividadeavaliativa'
    })

    Grupo.hasMany(models.avaliacao360, {
        foreignKey: {
            name: 'id_grupo'
        },
        as:'avaliacoes360'
    })
}


module.exports = Grupo;