var express = require("express");
var app = express();

app.get('/',function(req,res){
  res.render(__dirname + "/index.jade");
  });

module.exports = app;