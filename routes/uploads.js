'use strict';

let express = require('express');
let router = express.Router();

let fs = require('fs');
let path = require('path');
let fse = require('fs-extra');

let multer  = require('multer');
let uploadDir = './public/uploads';
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fse.ensureDirSync(uploadDir);
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

let upload = multer({ storage: storage });

/* GET home page. */
router.post('/image', upload.single('file'), (req, res, next) => {

  let filePath = req.file.path;
  console.log(req.body);
  console.log(req.file);

});


module.exports = router;