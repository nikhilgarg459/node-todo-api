var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const port = process.env.PORT || 3000; 

var app = express();

app.use(bodyParser.json());
app.post('/todos', (req,res)=>{
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>res.status(200).send(doc)).catch(err=>res.status(400).send(err));

});

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});









