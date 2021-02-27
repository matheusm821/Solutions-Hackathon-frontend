class Home {
    index(req, res) {
        res.render('home/home')
    }
}


module.exports = new Home