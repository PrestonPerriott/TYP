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
            token = '' ///Some tokenize funtion 
            newlySavedUser.accessToken = User.updateToken(token)
            let returnedUser = User.stripToJSON(newlySavedUser)
            return res.send(returnedUser)
        }


    },

    loginUser: async function(req, res, next) {
    
    },

    
    comparePassword: async function(req, res, next) {
    
    }
    
}

async function validateRegistrationInput(req, res, next) {

    console.log('Validating input...')
    const {name, email, password} = req.body
    var existingEmail = ''
    var validationErrors
    var genError = new Error()

    if (name && email && password && (req.checkBody('email', 'A Valid email address in needed').isEmail())) {

        try {
            existingEmail = await User.getUserFromEmail(email)
        } catch (err) {
            console.log('There was an error connecting to the DB')
            return next(err)
        }

        ///Only going to validate email, no usernames
        if (existingEmail != null) {
            genError.message = email + ' Already exists in our system.'
            console.log(genError.message)
            return next(genError)
        }
        
        validationErrors = req.validationErrors()
        if (validationErrors) {
            var err
            for (err in validationErrors) {
                let msg = validationErrors[err]["msg"]
                genError.message += '\n' + msg
            }
            console.log('Found these validation errors: ' + genError.message)
            return next(genError)
            } else {
                ///Actually create user, or return true that validation happened
                return true
            }

    }

}