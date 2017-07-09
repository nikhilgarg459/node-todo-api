var express = require('express');
var app = express.Router();
var { authenticate } = require('./..//middleware/authenticate');
const _ = require('lodash');
app.get('/',(req, res, next)=>{
    res.send('Hello World!');
});

module.exports = app;