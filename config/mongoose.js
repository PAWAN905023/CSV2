const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://py383872:6tBnIJ9SgC7vKQkG@cluster0.sds69fr.mongodb.net/CSV2?retryWrites=true&w=majority');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;