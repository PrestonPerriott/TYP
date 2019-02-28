'use strict'

var express = require('express')
var router = express.Router()

router.use('/api/home', require('./home'))
router.use('/api/process', require('./process'))
router.use('/api/profile', require('./profile'))
router.use('/api/services', require('./services'))
router.use('/api/contact-us', require('./contact-us'))

module.exports = router