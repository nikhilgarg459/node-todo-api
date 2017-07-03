// const { SHA256 } = require('crypto-js');

// var message = 'I am user number 3';

// var hash = SHA256(message).toString();

// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);

// var data = {
//     id: 4
// }

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash)
// {
//     console.log("Content was not changed");
// }
// else{
//     console.log("Content was changed"); 
// }

const jwt = require('jsonwebtoken');

var data = {
    id: 10
}

var token = jwt.sign(data, 'abc123');
console.log(token);

var decoded = jwt.verify(token,'abc123');

console.log("decoded ", decoded);