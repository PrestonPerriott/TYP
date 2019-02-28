'use strict'

var express = require('express')
var router = express.Router()

router.get('/', async function(req, res, next){
    res.json({'message': 'hi'})
})

module.exports = router
