const authentication = require("./controllers/authentication");
const passportStrategy = require("./services/passport");
const passport = require("passport");
const User = require("./models/usermodel.js");
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const jwt = require("jsonwebtoken");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.use(express.static(path.join(__dirname, "html")));
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  // get routes
  app.get("/auth", requireAuth, function(req, res, next) {
    res.send(req.user);
  });

  app.get("/forgot-password/:token", function(req, res, next) {
    var decoded = jwt_decode(req.params.token);
    res.render("forgot-password", { token: req.params.token });
  });

  app.post("/setpassword/:token", function(req, res, next) {
    var token = req.params.token;
    jwt.verify(token, config.secret, function(err, decoded) {
      console.log("22222");
      if (err) {
        console.log(req.cookies.token);
        res.status(401).send({ message: "unauthorized" });
      } else {
        User.findById(decoded.sub, function(err, doc) {
          if (err) {
            return false;
          }
          if (new Date() <= decoded.iat + 900000) {
            res.send({ message: "link expired" });
          } else {
            doc.password = password;
            doc.save();
            res.send("/");
          }
        });
      }
    });
  });

  app.get("/logout", function(req, res, next) {
    req.logout();
    res.send({ loggedout: "loggedout" });
  });
  // post router
  // signup route
  app.post(
    "/create-forgot-password-link",
    authentication.createforgotpasswordlink
  );
  app.post("/signin", requireSignin, authentication.signin);
  app.post("/signup", authentication.signup);
};
