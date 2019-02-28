'use strict'

const multer = require('multer');
const GridStorage = require('multer-gridfs-storage');
const url = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME

const storage = new GridStorage({
    url: url,
    file: function (req, file) { ///While getting th eobject from the client, we want to parse it into a documnent object 
      if (file.mimetype === 'image/jpeg') {
          console.log('Image')
        return {
          bucketName: 'photos',
          filename: namingConvention(req, file)
        }
      } else if (file.mimetype === 'application/pdf') {
        console.log('PDF')
        return {
            bucketName: 'pdf',
            filename: namingConvention(req, file)
        }
      } else if (file.mimetype === 'application/msword') {
        console.log('Word Doc')
        console.log(file.mimetype)
       return{
            bucketName: 'word',
            filename: namingConvention(req, file)
        }
      } else {
          ///Handle unsupported filetype
          console.log('Our document file type is : ' + req.mimetype)
      }
    }
  })

  function namingConvention(req, file) {
      var name = ''
      name = req.body.fileName + '_' + file.mimetype + '_' + Date.now()
      console.log('Our document name is : ' + name)
      return name
  }

  module.exports.upload = multer({ storage })