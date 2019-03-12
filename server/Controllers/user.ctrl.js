'use strict'

const User = require('../Models/user')
const Document = require('../Models/document')
var bcrypt = require('bcryptjs')

module.exports = {

    registerUser: async function(req, res, next) {
       
        var user = null
        console.log('Saving user...')
        const didPassValidation = await validateRegistrationInput(req, res, next)
        if (didPassValidation === true) {
            console.log('Creating user')
            var user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                company: req.body.company ? req.body.company : '',
                date: Date.now(),
                accessToken: '',
                uploadedDocs: '',
            })

            try {
                newlySavedUser = await User.saltAndSave(user)
            } catch (err) {
                return next(err)
            }

            var token = null
            token = '' ///Some tokenize funtion in Auth middleware
            newlySavedUser.accessToken = User.updateToken(token)
            let returnedUser = User.stripToJSON(newlySavedUser)
            return res.send(returnedUser)
        }
    },

    loginUser: async function(req, res, next) {
        
        var user = null
        console.log('Logging in User ' + req.body.email)
        user = validateLoginInput(req, res, next)
        if (user != null) {
            ///Login
            var token = null
            //token = Auth.tokenize()
            user.accessToken = token
            await user.save()
           // await user.stripToJSON()
           return res.send(user)
        }
    },
     
    getUser: async function(req, res, next) {
        ///For finding a list of users maybe?
    },

    getUserProfile: async function(req, res, next) {
        ///Would return user and associated docs 
    },

    getUserDocuments: async function(req, res, next) {

    },

    getUserDocument: async function(req, res, next) {

    },

    commentUserDocument: async function(req, res, next) {

    },

    follow

}

///TODO: Might be able to extract these out to an InputValidation middleware of some sort
async function validateRegistrationInput(req, res, next) {

    console.log('Validating registration input...')
    const {name, email, password} = req.body
    var existingUser = ''
    var validationErrors
    var genError = new Error()

    if (name && email && password && (req.checkBody('email', 'A Valid email address in needed').isEmail())) {

        validationErrors = req.validationErrors()
        if (validationErrors) {
            var err
            for (err in validationErrors) {
                let msg = validationErrors[err]["msg"]
                genError.message += '\n' + msg
            }
            console.log('Found these validation errors: ' + genError.message)
            return next(genError)
            } 

        try {
            existingUser = await User.getUserFromEmail(email)
        } catch (err) {
            console.log('There was an error connecting to the DB')
            return next(err)
        }

        ///Only going to validate email, no usernames
        if (existingUser != null) {
            genError.message = email + ' Already exists in our system.'
            console.log(genError.message)
            return next(genError)
        }
        return true
    } else {
        return false
    }
}

async function validateLoginInput (req, res, next) {

    console.log('Validating registration input...')
    const {email, password} = req.body
    var existingUser = ''
    var validationErrors
    var matched = false
    var genError = new Error()    

    if (email && password && (req.checkBody('email', 'A valid email address is required').isEmail())) { ///When posting to login, we don't expect there to be a nmae field

        validationErrors = req.validationErrors()
        if (validationErrors) {
            var err
            for (err in validationErrors) {
                let msg = validationErrors[err]["msg"]
                genError.message += '\n' + msg
            }
            console.log('Found these validation errors: ' + genError.message)
            return next(genError)
            }

        try {
            existingUser = await User.getUserFromEmail(email)
            ///Only going to validate email, no usernames
            if (existingUser != null) {
                matched = await User.comparePasswords(password, existingUser.password)
                if (matched) {
                    ///Should then either login or the valid user to do actual login op 
                    return next(existingUser)
                }
            }
        } catch (err) {
            console.log('There was an error connecting to the DB')
            return next(err)
        }
        return null
    } else {
        return null
    }

}