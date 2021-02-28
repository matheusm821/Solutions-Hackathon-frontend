const db = require('../conn/sequelize')

const Contacts = db.define('contacts', {
    email: {
        type: db.Sequelize.STRING,
    },
    name: {
        type: db.Sequelize.STRING,
    },
    telephone: {
        type: db.Sequelize.STRING,

    },
    msg: {
        type: db.Sequelize.TEXT,
    },

})



module.exports = Contacts
