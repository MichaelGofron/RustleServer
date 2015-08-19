var express = require('express');
var router = express.Router();
var db = require('../db/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendPhoto', function(req, res, next){
  // must set up a post to the database
  // must somehow link to the database where we can save some units in the db.
  console.log("req === ",req.body);
  db.runQuery("INSERT INTO comment (message) values ($1);", [req.body.photoText], function(result){
    console.log("result ==== ", result);
  });
  res.end("maybe photo");

});

// must be able to upload a photo
// when uploading a photo we to generate with s3 a storage place for our photo
// get that url and then upload the link, the location, and any caption into the table
// pass in UIImage, Caption, location
router.post('/uploadPhoto', function(req,res,next){
  console.log("req.body.keys === ", Object.keys(req.body));
  console.log("req.body === ", req.body);
  db.runQuery("INSERT INTO comment (message) values ($1);", ["Hello there"], function(result){
    console.log("result ==== ", result);
  });
  res.end();
});

module.exports = router;
