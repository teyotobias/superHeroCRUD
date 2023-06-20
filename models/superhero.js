const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Mongoose vocabulary: A property may also be referred to as a “path”.
const superheroSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ability: { 
        type: String, 
        required: true
    },
    nemesis: {
        type: String,
        required: true
    },
    strengthLevel: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    }
  });
module.exports = mongoose.model('Superhero', superheroSchema);