var localStrategy = require("passport-local").Strategy;

//load model
var User = require("../models/user.js");
const conf = {
  usernameField:'email',
  passwortdField:'password',
  passReqToCallback:true
};
module.exports = function(passport){

  passport.serializeUser(function(user,done){
    done(null,user.id);
  });

  passport.deserializeUser(function(id,done){
    var user = User.findById(id,function(err,user) {
      done(err,user);
    });
  });

  passport.use("local-signup",new localStrategy(conf,function(req,email,password,done){
    process.nextTick(function(){
      User.findOne({'local.email':email},function(err,user) {
          if(err){
            return done(err);
          }
          if(user){
            return done(null,false,req.flash('signupMessage','that email is all ready taken.'));
          }else{
            var newUser = new User();
            newUser.local.email = email;
            newUser.local.password = newUser.generateHash(password);

            newUser.save(function(err){
              if(err){
                throw err;
              }
              return done(null,newUser);
            });
          }
      });
    });
  }));
  passport.use("local-login",new localStrategy(conf,function(req,email,password,done) {
    User.findOne({"local.email":email},function(err,user){
      if(err){
        return done(err);
      }
      if(!user){
        return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
      }
      if(!user.validPassword(password)){
        return done(null,false, req.flash('loginMessage',"Oops! Wrong Password"));
      }

      return done(null,user);
    });
  }));
};
