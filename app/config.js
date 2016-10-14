var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shortly');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB '));
db.once('open', function() {
  console.log('Connected to MongoDB and running!');
});

module.exports = db;
