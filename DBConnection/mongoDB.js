const mongoose = require('mongoose');

class mongo {
    
    constructor() {
        this.createMongoConnection();
    }

    createMongoConnection() {
        // mongoose.connect(`mongodb://shahrukh:2012@localhost:27017/assignment`)  // local mongodb connection
        mongoose.connect(`mongodb+srv://shahrukh:2012@cluster0.ndx7a.mongodb.net/assignment?retryWrites=true&w=majority`)

        mongoose.connection.once('open', () => {
            console.log("MongoDB is connected");
        })
        mongoose.connection.on('error', () => {
            console.log("Error occured in mongoDB connection");
        })
    }
}

module.exports = mongo;