const db = require('../conn/sequelize')

const Companys = db.define('companys', {
    companyName: {
        type: db.Sequelize.STRING,
    },
    CEP: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    typeCompany: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },

})



module.exports = Companys
