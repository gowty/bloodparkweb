const passport = require("passport");
const User = require("../models/usermodel");
const config = require("../config");
const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

function validateEmail(email) {
  var x = email;
  var atpos = x.indexOf('@');
  var dotpos = x.lastIndexOf('.');
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    return false;
  } else {
    return true;
  }
}

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
}
 
const localOption = { usernameField:"email" }

const localLogin = new LocalStrategy(localOption,function(email,password,done){
   if(validateEmail(email)==true){
    User.findOne({email:email},function(err,user){
      if(err){return done(err)}
      if(!user){return done(null,false)}
 
      user.comparePassword(password, function(err,isMatch){
        if(err){ return done(null) }
        if(!isMatch){ return done(null,false)}
 
        return done(null, user)
      })
 
    })
   }else{
    User.findOne({username:email},function(err,user){
      if(err){return done(err)}
      if(!user){return done(null,false)}
 
      user.comparePassword(password, function(err,isMatch){
        if(err){ return done(null) }
        if(!isMatch){ return done(null,false)}
 
        return done(null, user)
      })
 
    })
   }
   
})

const jwtLogin = new jwtStrategy(jwtOptions, function(payload, done){

  User.findById(payload.sub,function(err,user){
    if(err){ return done(err,false)}
    if(user){
      return done(null,user)
    }else{
      return done(null,false)
    }
  })

})

passport.use("jwt",jwtLogin);
passport.use("local",localLogin);
