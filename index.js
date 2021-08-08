const express = require('express')
const app=express()
const bodyParser = require('body-parser');

const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/locventDb", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ,  X-Auth-Token");
    next();

  });

  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json())

app.use('/api/news',require('./api/v1/news'))

app.use('/api/user', require("./api/v1/user"))

const port = process.env.PORT||3000;

app.listen(port,()=> console.log("listening on port 3000"))
//todo 

