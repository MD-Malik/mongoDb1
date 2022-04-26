const mongoose = require('mongoose');

const movies = new mongoose.Schema({ 
    "movie_name" : { type: String, required: true},
    "release_year" : { type: Number, required: true },
    "genre": { type:String, required: true},
    "lead_actor":{type: String, required:true},
    "lead_actress":{type: String, required: true},
    "imdb":{type:Number, required:true}
})

module.exports = mongoose.model('movies',movies)

// {"id":1,"movie_name":"Gena","release_year":1992,"genre":"Sibylla","lead_actor":"Angy","lead_actress":"Willyt","imdb":10}