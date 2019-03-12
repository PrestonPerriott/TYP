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
    ],

    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

    following: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
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

UserSchema.methods.getUserFromID = async function (id) {
    var search = {id: id}
    var user = null
    user = await User.findById(search)
    return user
} 

UserSchema.methods.comparePasswords = async function (candidatePassword, password) {
    ///Gonna utilize bcrypt for hashing/dehashing -> Should look into limitations of bcrypt
    let comparison = await bcrypt.compare(candidatePassword, password)
    return comparison ///Will return true or false in promise form
}

UserSchema.methods.saltAndSave = async function (user) {
    let encrypt = await bcrypt.genSalt(10)
    let hash = await bcrypt.hash(user.password, encrypt)
    user.password = hash
    let newUser = await user.save()
    return newUser
}

UserSchema.methods.follow = async function (user_id) {
    if (this.following.indexOf(user_id) === -1 ) { ///indeof method returns the first index at which a given element can be found in the array
        this.following.push(user_id)
    }
    return this.save()
}

UserSchema.methods.addFollower = async function (follower) {
    this.followers.push(follower)
}

UserSchema.methods.stripToJSON = async function (user) {
    var obj = user.toObject()
    await delete obj['password']
    return obj
}

var User = module.exports = mongoose.model('User', UserSchema)
