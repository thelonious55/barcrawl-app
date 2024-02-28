const express = require('express')
const router = express.Router()
const barsCtrl = require('../controllers/bars')

router.post('/crawls/:id/bars', barsCtrl.create)

router.delete('/bars/:id', barsCtrl.delete)

module.exports = router