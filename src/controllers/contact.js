const { enviarEmail } = require('../helpers/email')
const contacts = require('../database/models/Contact')
class Contact {
    index(req, res) {
        res.render('contact/contact')
    }
    register(req, res) {
        const { email, name, telephone, msg } = req.body
        contacts.create({
            email: email,
            name: name,
            telephone: telephone,
            msg: msg
        })
            .then(() => {
                req.flash('success_msg', 'Menssagem enviada com sucesso!')
                res.redirect('/contact')
            })
            .catch((err) => {
                console.log(err)
            })
        enviarEmail(email, name, telephone, msg)

    }
}


module.exports = new Contact
