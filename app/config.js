var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;

db.once('open', function(){
  console.log('Mongodb running');
});

// db.on('error', console.err.bind(console, ''));

module.exports = db;
