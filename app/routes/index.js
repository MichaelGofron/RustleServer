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

module.exports = router;
