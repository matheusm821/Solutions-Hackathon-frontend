const db = require('../conn/sequelize')

const Config = db.define('config', {
    acess: {
        type: db.Sequelize.STRING,
    },

})



module.exports = Config
