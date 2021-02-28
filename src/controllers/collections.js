const collections = require('../database/models/Collections')
const db = require('../database/conn/sql')

class Collections {
    register(req, res) {
        collections.create(req.body)
            .then(() => {
                req.flash('success_msg', 'Seja bem vindo!')
                res.redirect('/')
            })
            .catch((err) => {
                console.log(err)
                req.flash('error_msg', 'Preencha os campos corretamente e tente novamente!')
                res.redirect('/')
            })
    }
    schedule(req, res) {
        let sql = `SELECT * FROM collections;`
        db.query(sql, (err, schedule) => {
            res.render('schedule/schedule', { schedule })
        })
    }
}


module.exports = new Collections
