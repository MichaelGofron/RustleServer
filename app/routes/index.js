var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendPhoto', function(req, res, next){
  // must set up a post to the database
  // must somehow link to the database where we can save some units in the db.
  res.end("maybe photo");
});

module.exports = router;
