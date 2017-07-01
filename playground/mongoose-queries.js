const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '69555da3bda37639526fd990';

if(!ObjectID.isValid(id)){
    console.log('Invalid Id');
}

Todo.find({
    _id: id // Mongoose convert it to object id
}).then((todos)=>{
    console.log('todos',todos);
}).catch((err)=>{
    console.log(err);
});

Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log('todo',todo);
}).catch((err)=>{
    console.log(err);
});

Todo.findById(id).then((todo)=>{
    if(!todo)
        return console.log("id not founcd");
    console.log('todo by id',todo);
}).catch((err)=>{
    console.log(err);
});

