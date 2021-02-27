class Auction {
    auctions(req, res) {
        res.render('auction/auctions')
    }
}



module.exports = new Auction