var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/quotes');

mongoose.connection.on('error', function(err){});

var QoutesSchema = new mongoose.Schema({
  name: String,
  quote: String,
  created_at: { type: Date, default: Date.now }
})

QoutesSchema.path('name').required(true, 'Name cannot be blank');
QoutesSchema.path('quote').required(true, 'Quote cannot be blank');

var Quotes = mongoose.model('Quotes', QoutesSchema)

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var route = require('./routes/index.js')(app, Quotes);

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})
