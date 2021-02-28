const { enviarEmail } = require('../helpers/email')
class Contact {
    index(req, res) {
        res.render('contact/contact')
    }
    register(req, res) {
        const { email, name, telephone, msg } = req.body
        enviarEmail(email, name, telephone, msg)
        req.flash('success_msg', 'Menssagem enviada com sucesso!')
        res.redirect('/')
    }
}


module.exports = new Contact
