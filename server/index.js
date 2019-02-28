'use strict'

const express = require('express')
const validator = require('express-validator')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session =  require('express-session')
const passport = require('passport')
const dotenv = require('dotenv')
const cors = require('cors')
const helmet = require('helmet')
const Grid = require('gridfs-stream');
const cloudinary = require('cloudinary') /// For handling images and videos

var app = express()
dotenv.config({path: '../.env'})

// cloudinary.config({
//     cloud_name: '',
//     api_key: '',
//     api_secret: ''
// })

var url = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME
try {
    mongoose.connect(url, {
        //useMongoClient: true,
        useNewUrlParser: true
    })    
} catch (error) {
    ///TODO: Handle error
    console.log("Couldn't connect to DB")
}
var db = mongoose.connection
console.log('Connected to mongo db : ' + url)

///Initialize our stream
let gfs
db.once('open', function(){
    gfs = Grid(db.db, mongoose.mongo)
    gfs.collection('documents')
})

app.use(validator())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
//app.use(cookieParser)

//MKaing our db accessible to the router 
app.use(function(req, res, next) {
    req.db = db
    next()
})

app.use(session({
    secret: (process.env.secret || 'secret'),
    saveUninitialized: true,
    resave: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors())
app.use(helmet())

app.use(require('./Routes'))

/// Truthy vs Falsey values
/// If it has a value it is a truthy value
app.set('port', (process.env.PORT || 8080))
app.listen(app.get('port'), function() {
    console.log('App was started on port: ' + app.get('port'))
})

