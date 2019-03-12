'use strict'

var express = require('express')
var router = express.Router()
const uploader = require('../MiddleWare/document-upload')
const Document = require('../Models/document')

///Get a user
router.get('/:id', async function(req, res, next){
    
})

/// Get a users profile -> Should consist of their company and their documents 
router.get('/profile/:id', async function (req, res, next) {
    ///Cliking into a users documents will reroute to documents endpoint
})

/// Get all of a users documents
router.get('/documents/:id', async function (req, res, next){

})

/// Gets a specific users documents comments 
router.get('/documents/comments/:id', async function (req, res, next) {
    ///Cliking into a users documents will reroute to documents endpoint
})


///Post a comment on a public document
router.post('/documents/comments/:id', async function(req, res, next){
    
}) 

///Following a user if we want to add that capability
router.post('/follow', async function (req, res, next){

})

///Upload a doc
router.post('/upload', uploader.upload.any() ,async function(req, res, next){
    
    console.log('The object is : ' + req.file)
    res.json({file: req.file})
    // const doc = new Document({

    // })
}) 


module.exports = router
