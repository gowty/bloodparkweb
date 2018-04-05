const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const mongoose = require("mongoose");

// connect mongodb
mongoose.connect("mongodb://localhost/auth")

// app setup
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({type:"*/*"}));
app.use(bodyParser.urlencoded({ extended: true   }));
router(app);

// server setup
const port = process.env.PORT || 65000;

// const server = http.createServer(app);

// server.listen(port);
// console.log("aaaaaa");

app.listen(port,function(){
  console.log("server running on port : ",port)
});
