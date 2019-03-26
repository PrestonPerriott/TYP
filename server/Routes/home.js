'use strict'

var express = require('express')
var router = express.Router()

router.get('/', async function(req, res, next){
    res.json({'message': req.originalUrl})
})

router.get('/app', async function(req, res, next){
next()
})

module.exports = router
