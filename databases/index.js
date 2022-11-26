const mongoose = require('mongoose');
const {dbHost, dbPass, dbName, dbPort, dbUser, mongoUri} = require('../app/config');

const database = 
        mongoUri || `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`;



mongoose.connect(database, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
const db = mongoose.connection;

// mongodb+srv://dandan:<password>@be.d2u423b.mongodb.net/?retryWrites=true&w=majority

module.exports = db;