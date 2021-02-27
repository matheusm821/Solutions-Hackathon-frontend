const collections = require('../database/models/Collections')


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
}


module.exports = new Collections
