var express = require('express');
var router = express.Router();
var isLoggedIn = require('../helper/isLoggedIn');
/* GET home page. */
module.exports = function(passport){
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });


    /* GET home page. */


    router.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    router.post('/login',passport.authenticate('local-login',{
      successRedirect:'/app',
      failureRedirect:'/login',
      failureFlash:true
    }));

    router.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    router.post('/signup',passport.authenticate('local-signup',{
      successRedirect:'/app',
      failureRedirect:'/signup',
      failureFlash:true
    }));

    router.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });
    // =====================================
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    return router;
};
