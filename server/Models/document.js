'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var DocumentSchema = mongoose.Schema({

    filename: {
        type: String,
        required: true
    },

    created: {
        type: Date,
        default: Date.now,
        required: true
    }, 

    type: {
        type: String,
        required: true
    }, 

    comments: [
        {
         author: { 
            type: Schema.Types.ObjectId,
            ref: 'User'
                }, 
        text: String
        }
    ],

    fileID: {
        type: String,
        required: true
    }
})

DocumentSchema.methods.comment = function (comment) {
    this.comment.push(comment)
    return this.save()
}

DocumentSchema.methods.changeName = function (newName) {
    this.filename = newName
    return this.save()
}

var Document = module.exports = mongoose.model('Document', DocumentSchema)