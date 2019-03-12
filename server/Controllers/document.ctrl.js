'use strict'

const User = require('../Models/user')
const Document = require('../Models/document')

module.exports = {
    ///TODO: Add logic
    addPublicDocument: async function (req, res, next) {
///Might want to force only logged in users to be able to add documents to public docs
    },

    commentPublicDocument: async function (req, res, next) {

    }, 

    deletePublicDocument: async function (req, res, next) {
///Might want only owner of public doc to be able to delete it
    },

    getPublicDocument: async function (req, res, next) {

    }, 

    getAllPublicDocuments: async function (req, res, next) {

    }

}