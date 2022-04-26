const movieModel = require('../Model/movies')

function getFile(req, res, next){
    let name = req.params.name;
    console.log("getting file...");
    res.render('home', {Name: `${name}`, age: `${22}`})
}

async function createMovie(req, res, next){
    //insert data into mongoDb
    try {
        console.log("req.body", req.body);
        let movieDetail = req.body;
        let response = await movieModel.insertMany([movieDetail]);
        res.json(response);
    } catch (err) {
        res.send(err)
    }
}

async function allMovies(req, res, next){
    //fetch data from mongoDb
    try {
        console.log("fetching...");
        let response = await movieModel.find({}).limit(5);
        res.json(response)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function getMovie(req, res, next){
    let movieId = req.params.movieId;
    let response = await movieModel.find({_id: `${movieId}`});
    res.json(response);
    console.log(`Movie Name : ${response[0].movie_name}`)
}

async function updateMovie(req, res, next){
    let movieId = req.params.movieId;
    let movieDetail = req.body;
    let response = await movieModel.updateOne({_id: `${movieId}`},{$set: movieDetail})
    let response1 = await movieModel.find({_id: `${movieId}`})
    res.json(response1);
}

async function deleteMovie(req, res, next){
    let movieId = req.params.movieId;
    let response1 = await movieModel.find({_id: `${movieId}`});
    let response = await movieModel.deleteOne({_id: `${movieId}`});
    res.json(response1);
}

module.exports = {
    createMovie, allMovies, getMovie, updateMovie, deleteMovie, getFile
}