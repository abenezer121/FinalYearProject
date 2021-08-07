const express = require('express')
const app=express()
const bodyParser = require('body-parser');

const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/locventDb", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/news',require('./api/v1/news'))

app.use('/api/user', require("./api/v1/user"))

const port = process.env.PORT||3000;

app.listen(port,()=> console.log("listening on port 3000"))
//todo 

