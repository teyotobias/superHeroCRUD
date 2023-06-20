var express = require('express');
var router = express.Router();
const superheroCtrl = require('../controllers/superheros');


// GET for /superheros
router.get('/', superheroCtrl.index)

// GET route for /new
router.get('/new', superheroCtrl.new);

router.get('/:id', superheroCtrl.show);

//POST route for/superheros
router.post('/', superheroCtrl.create);


router.delete('/:id', superheroCtrl.delete);

//edit

//update


//update
// show


module.exports = router;
