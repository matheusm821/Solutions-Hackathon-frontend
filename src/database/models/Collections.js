const db = require('../conn/sequelize')

const Collections = db.define('collections', {
    typeCompany:{
        type: db.Sequelize.STRING,
    },
    company: {
        //CHAVE ESTRANGEIRA DE COMPANYS.ID
        type: db.Sequelize.STRING,
    },
    name: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    username: {
        type: db.Sequelize.STRING,
    },
    document: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    CEP: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: db.Sequelize.DATE,
        allowNull: false
    },
    hrInit: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    hrFim: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

})



module.exports = Collections
