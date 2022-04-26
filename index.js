const http = require('http')
const app = require('./Routes/movies') 
const connectToDB = require('./DBConnection/mongoDb');
const PORT = 9008;

http.createServer(app).listen(PORT, () => {
    new connectToDB();
    // new connectToMySQL();    this is the new connection for mysql database;
    console.log(`Server is running on port no ${PORT}`)
});

//database assignment collection movies documents {},{},{},{} 500..    mongodb atlas