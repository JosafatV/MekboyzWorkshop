var express = require ('express');
var bodyParser = require ('body-parser');
var morgan = require ('morgan');
var config = require ('./config');
var mongoose = require('mongoose');
var app = express();

mongoose.connect(config.database);


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen (config.port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log ("Listenting on port 3001");
  }
});
