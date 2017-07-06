const { ObjectID } = require('mongodb');
const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [
    {
        _id: userOneId,
        email: 'nikhil@abc.com',
        password: '12345677',
        tokens: [
            {
                access: 'auth',
                token: jwt.sign({ _id: userOneId.toHexString(), access:'auth' }, 'abc123').toString()
            }
        ]
    },
    {
        _id: userTwoId,
        email: 'niedkhil@abc.com',
        password: '1e2345677'
    }
];

const todos = [
    {
        _id: new ObjectID(),
        text: 'First test todo'
    },
    {
        _id: new ObjectID(),
        text: 'Second test todo',
        completed: true,
        completedAt: 333
    }
];

const populateTodos = (done) => {
    Todo.remove({})
        .then(() => {
            return Todo.insertMany(todos);
        }).then(() => {
            done();
        })
};

const populateUsers = (done) => {
    User.remove({})
        .then(() => {
            var userOne = new User(users[0]).save();
            var userTwo = new User(users[1]).save();

            return Promise.all([userOne, userTwo])
        }).then(() => done());
}

module.exports = { todos, populateTodos, users, populateUsers };