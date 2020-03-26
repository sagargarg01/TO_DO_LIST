const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/TODOLIST_Dev');

// acquire the connection to check if it is successfull
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

//up and running then print the message
db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;

