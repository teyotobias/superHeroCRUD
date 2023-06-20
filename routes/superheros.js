var express = require('express');
var router = express.Router();
const superheroCtrl = require('../controllers/superheros');


// GET for /superheros
router.get('/', superheroCtrl.index)

//POST route for/superheros
router.post('/', superheroCtrl.create);

// GET route for /new
router.get('/new', superheroCtrl.new);


module.exports = router;
