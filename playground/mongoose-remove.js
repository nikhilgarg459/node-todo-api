const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

//Todo.remove({})     // will remove all the documents
//won;t get doc back
Todo.remove({         

}).then((result)=>{
    console.log(result);
});

// wiill get docs back
Todo.findOneAndRemove({_id:'59555da3bda37639526fd990'}).then((todo)=>{
    console.log(todo);
});
 //will return docc

Todo.findByIdAndRemove('59555da3bda37639526fd990').then((todo)=>{
    console.log(todo);
}); 


