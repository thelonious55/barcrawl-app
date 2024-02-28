var express = require('express')
var router = express.Router();
const crawlsCtrl = require('../controllers/crawls')

// get /crawls
router.get('/', crawlsCtrl.index)
//get /crawls/new
router.get('/new', crawlsCtrl.new)

router.get('/:id', crawlsCtrl.show)

router.post('/', crawlsCtrl.create)

router.get('/:id/edit', crawlsCtrl.edit)

router.put('/:id', crawlsCtrl.update)

module.exports = router