'use strict'

var express = require('express')
var router = express.Router()
const Document = require('../Models/document')
const User = require('../Models/user')


///Get all the public documents
router.get('/', async function (req, res, next) {
    
})

///Get a public document
router.get('/:id', async function(req, res, next){
    
})

/// Gets a public documents comments 
router.get('/comments/:id', async function (req, res, next) {
    ///Cliking into a users documents will reroute to documents endpoint
})


///Post a comment on a public document
router.post('/comments/:id', async function(req, res, next){
    
}) 


module.exports = router
