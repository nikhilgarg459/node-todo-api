var express = require('express');
var router = express.Router();
var { User } = require('./../models/user');
var { authenticate } = require('./..//middleware/authenticate');
const _ = require('lodash');
const { ObjectID } = require('mongodb');


router.post('/', (req, res) => {

    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        return res.header('x-auth', token).send(user);
    }).catch((err) => {
        return res.status(400).send(err);
    });
});


router.get('/me', authenticate, (req, res) => {
    return res.send(req.user);
});

router.post('/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            return res.header('x-auth', token).send(user);
        }).catch((e) => {
            return res.status(400).send();
        });
    }).catch((e) => {
        return res.status(400).send();
    });

});

router.delete('/me/token', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
        return res.status(200).send();
    }).catch((err) => {
        return res.status(400).send();
    });
});

module.exports = router;