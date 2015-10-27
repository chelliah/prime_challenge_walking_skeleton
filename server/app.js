/**
 * Created by aronthomas on 10/26/15.
 */
var express = require("express");
var app = express();

var bodyParser = require('body-parser');

var path = require('path');
app.use(express.static(path.join(__dirname,'./public')));

var index = require('./routes/index');


var server = app.listen(3000,function(){
    var port = server.address().port;
    console.log("Listening on port: ", port);
});

app.use(bodyParser.json());
app.use('/', index);


module.exports = app;