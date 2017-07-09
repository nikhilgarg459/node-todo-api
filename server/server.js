require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

var { mongoose } = require('./db/mongoose');
var index = require('./routes/index');
var users = require('./routes/users');
var todos = require('./routes/todos');

// var { Todo } = require('./models/todo');
// var { User } = require('./models/user');
// var { authenticate } = require('./middleware/authenticate');
//const { ObjectID } = require('mongodb');


const port = process.env.PORT;

var app = express();

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);

    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log("Unable to append to log file");
        }
    });
    next();
});

app.use(bodyParser.json());

app.use('/', index);
app.use('/todos', todos)
app.use('/users', users);

//catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = { app };









