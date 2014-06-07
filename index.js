var express = require("express");
var app = express();

app.get('/',function(req,res){
  res.render(__dirname + "/index.jade");
  });
app.use(express.static(__dirname+'/static'));

module.exports = app;