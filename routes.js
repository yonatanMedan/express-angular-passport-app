var index = require('./routes/index');
var users = require('./routes/users');
var isLoggedIn = require('./helper/isLoggedIn.js');
var express = require('express');
var path = require('path');
var websites = require('./routes/websites');

module.exports = function(app,passport){

   app.use('/', index(passport));
   app.use('/app',isLoggedIn,express.static(path.join(__dirname, 'public')));
   app.get('/app/*',isLoggedIn, function(req, res){
     res.render("app.ejs");
   });
   app.use('/user',isLoggedIn, users);
   app.use('/websites',isLoggedIn,websites);



};
