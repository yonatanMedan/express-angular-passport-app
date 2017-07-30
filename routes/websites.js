var express = require('express');
var router = express.Router();
const data = require('./data.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(data);
});
router.get('/:id',function(req,res,next){
  var website = data.find(function(elm){
    return elm.id == req.params.id;
  });
  console.log(website);

  res.json(website);
});

module.exports = router;
