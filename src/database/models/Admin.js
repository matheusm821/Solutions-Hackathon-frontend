const db = require('../conn/sequelize')

const Admin = db.define('admin', {
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
        allowNull: false,
        unique: true
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    telephone: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    superuser: {
        type: db.Sequelize.BOOLEAN,
        defaultValue: false,
    },

})



module.exports = Admin
