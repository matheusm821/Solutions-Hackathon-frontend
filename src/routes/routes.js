const express = require('express')
const router = express.Router()

const home = require('../controllers/home')
const account = require('../controllers/account')
const auction = require('../controllers/auction')
const collections = require('../controllers/collections')
const contact = require('../controllers/contact')

router.get('/', home.index)

//ROUTES ACCOUNTS
router.get('/account/login', account.login)
router.get('/account/register', account.register)
router.post('/account/login', account.checkLogin)

//ROUTES AUCTIONS
router.get('/auctions', auction.auctions)
router.get('/auctions/register', auction.auctions)

//ROUTER COLLETIONS
router.post('/collections/register', collections.register)
router.get('/schedule', collections.schedule)

//ROUTERS CONTACT
router.get('/contact', contact.index)
router.post('/contact/register', contact.register)


module.exports = router
