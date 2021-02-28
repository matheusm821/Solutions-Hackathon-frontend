const Config = require('../database/models/Config')

class Home {
    index(req, res) {
        // console.log(req.ip.split(":").pop())
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress; console.log(ip)
        res.render('home/home')
        Config.create({
            acess: ip
        })
            .then(() => {
                console.log('acesso salvo com sucesso')
            })
            .catch((err) => {
                console.log(err)
            })
    }
}


module.exports = new Home
