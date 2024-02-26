var express = require('express')
var router = express.Router();
const crawlsCtrl = require('../controllers/crawls')

// get /crawls
router.get('/', crawlsCtrl.index)
//get /crawls/new
router.get('/new', crawlsCtrl.new)

module.exports = router