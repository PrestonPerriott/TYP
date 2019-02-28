'use strict'

var express = require('express')
var router = express.Router()
const uploader = require('../MiddleWare/document-upload')
const Document = require('../Models/document')

router.get('/', async function(req, res, next){
    
})

router.post('/', uploader.upload.any() ,async function(req, res, next){
    
    console.log('The object is : ' + req.file)
    res.json({file: req.file})
    // const doc = new Document({

    // })
}) 


module.exports = router
