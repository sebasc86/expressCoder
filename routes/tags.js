var express = require('express');
var router = express.Router();
const data = require('../users.json')



/* GET tags listing. */
router.get('/', function(req, res, next) {
  res.json(data);
});

/* GET tags listing. */
router.get('/:id', function(req, res, next) {
    if(data[req.params.id] ){
      return res.json(data[req.params.id])
    } else {
      return res.status('404').end()
    }
  
});





module.exports = router;