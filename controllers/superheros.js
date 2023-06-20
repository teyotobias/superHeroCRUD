const Superhero = require('../models/superhero');

module.exports = {
    index,
    show,
    new: newSuperhero,
    create,
    delete: deleteSuperhero,
    edit,
}

async function edit(req,res) {
    const superhero = await Superhero.findById(req.params.id);
    res.render('superheros/edit', {
        title: 'Edit-To-Do',
        superhero
    });
}

async function show(req, res) {
    const selectedSuper = await Superhero.findById(req.params.id);
    res.render('superheros/show', {
        superhero: selectedSuper
    });
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

async function deleteSuperhero(req,res) {
    try {
        const superhero = await Superhero.findByIdAndDelete(req.params.id);
        if(!superhero) {
            return res.status(404).send('No superhero found with this id');
        } else {
            console.log(superhero);
            return res.redirect('/superheros');
        }
    } catch(err) {
        console.log(err);
        return res.status(500).send('Server error');
    }
}

