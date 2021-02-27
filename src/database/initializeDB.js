const bcrypt = require('bcrypt')

const admin = require('./models/Admin')
const companys = require('./models/Companys')

let TABLES = [admin, companys]

const createTable = () => {
    TABLES.forEach(element => {
        element.sync({ force: true })
            .then(() => console.log('CREATE TABLE IN SUCCESS!'))
            .catch((err) => console.log('Erro ao criar tabela: ' + err))
    })
}

const createAdmin = () => {
    const pwd = 'secret'
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(pwd, salt, (err, hash) => {
            if (err) {
                res.send('Erro ao criptogradar esta senha: ' + err)
            } else {
                const pass = hash
                admin.create({
                    name: 'administrator',
                    username: 'admin',
                    email:'admin@gmail.co,',
                    telephone: '99999999',
                    password: pass,
                    superuser: true
                }).then(() => {
                    console.log(' CREATED SUPERUSER')
                }).catch((err) => {
                    console.log(err)
                })
            }
        })
    })
}


module.exports = { createTable , createAdmin}


