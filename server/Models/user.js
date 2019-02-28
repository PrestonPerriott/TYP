'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')


var UserSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    company: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now,
        required: true
    },

    accessToken: {
        type: String,
        default: ''
    },

    uploadedDocs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Document'
        }
    ]
})

UserSchema.methods.updateName = function (newName) {
    this.name = newName
    return this.save()
}

UserSchema.methods.updateEmail = function (newEmail) {
    this.email = newEmail
    return this.save()
}

UserSchema.methods.updatePassword = function (newPass) {
    ///TODO: Going to have to rehash
    this.password = newPass
    return this.save()
}

UserSchema.methods.updateCompnay = function (newComp) {
    this.company = newComp
    return this.save()
}

UserSchema.methods.updateToken = async function (token) {
    this.accessToken = token
    return this.save()
}

UserSchema.methods.getUserFromEmail = async function (email) {
    var search = {email : email}
    var foundUser = null
    foundUser = await User.findOne(search)
    return foundUser
}

UserSchema.methods.saltAndSave = async function (user) {
    let encrypt = await bcrypt.genSalt(10)
    let hash = await bcrypt.hash(user.password, encrypt)
    user.password = hash
    let newUser = await user.save()
    return newUser
}

UserSchema.methods.stripToJSON = async function (user) {
    var obj = user.toObject()
    await delete obj['password']
    return obj
}



var User = module.exports = mongoose.model('User', UserSchema)
