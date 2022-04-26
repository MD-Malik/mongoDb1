const express = require('express');
const app = express();
const movieController = require('../Controller/movies')
const bodyParser = require('body-parser')
// const { engine } = require('express-handlebars')

app.use(bodyParser.json());

// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');

// app.get('/')

// app.get('/file/:name', movieController.getFile)

app.post('/movie', movieController.createMovie)

app.get('/', movieController.allMovies);

app.get('/movie/:movieId', movieController.getMovie)

app.put('/movie/:movieId', movieController.updateMovie)

app.delete('/movie/:movieId', movieController.deleteMovie)


module.exports = app;