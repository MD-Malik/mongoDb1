const mongoose = require('mongoose');

class mongo {
    
    constructor() {
        this.createMongoConnection();
    }

    createMongoConnection() {
        // mongoose.connect(`localMongoLink`)  // local mongodb connection
        mongoose.connect(`mongoAtlasLink`)

        mongoose.connection.once('open', () => {
            console.log("MongoDB is connected");
        })
        mongoose.connection.on('error', () => {
            console.log("Error occured in mongoDB connection");
        })
    }
}

module.exports = mongo;
