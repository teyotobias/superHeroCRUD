const Superhero = require('../models/superhero');

module.exports = {
    new: newSuperhero,
    create,
    index
}


async function index(req, res) {
    const superherosAll = await Superhero.find({})
    res.render('superheros/index', {
        superheros: superherosAll
    })
}

function newSuperhero(req, res) {
    res.render('superheros/new', {errorMsg: ''});
}

async function create(req, res) {
    try {
        await Superhero.create(req.body);
        res.redirect('/superheros')
    }
    catch (err) {
        res.render('superheros/new', {errorMsg: err.message});
    }
}