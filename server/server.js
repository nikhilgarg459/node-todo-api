var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text:'Cook Dinner'
});

var otherTodo = new Todo({
    text: '  Other   ',
    completedAt: 12
});



// otherTodo.save().then(doc=>console.log(doc)).catch(err=>console.log(err));


var User = new mongoose.model('User',{
    email:{
        type: String,
        minLength: 1,
        required: true,
        trim: true
    }
});
