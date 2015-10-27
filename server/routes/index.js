/**
 * Created by aronthomas on 10/26/15.
 */
var express = require('express');
var router = express.Router();

var path = require('path');

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/basic_walking_skeleton');

var Cat = mongoose.model('Cat', {name:String});

router.post('/add',function(req,res,next){
    var kitty = new Cat({name: req.body.name});
    kitty.save(function(err){
        if(err)console.log('meow %s', err);
        res.send(kitty.toJSON());
        next();
    });
});

router.get('/cats',function(req,res,next){
    return Cat.find({}).exec(function(err,cats){
        if(err)throw new Error(err);
        res.send(JSON.stringify(cats));
        next();
    });
});

router.get('/', function(req, res, next){
    console.log("The console is logging");
    //var file = req.params[0] || 'views/index.html';
    //res.sendFile(path.join(__dirname,'../public',file));
    res.sendFile(path.join(__dirname,'../public/views/index.html'));
    //next();
});

module.exports = router;

