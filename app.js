console.log("Starting app.js");

// require from core modules

const fs = require('fs');
const os = require('os');

// require from node modules
const _ = require('lodash');

// require from own files
const notes = require('./notes.js');

// check if value passed is string
console.log(_.isString(true));
console.log(_.isString('sagar'));

// remove duplicate values in an array
var filteredArray = _.uniq(['sagar', 1, 'sagar', 1, 2, 3, 4]);
console.log(filteredArray);


// var user = os.userInfo();

// fs.appendFile('greetings.txt', 'Hello World!!', function(err) {
//   if(err){
//     console.log('error');
//   }
// });

// OR
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);

// var res = notes.addNote();
//
// var result = notes.add(2,3)
//
// console.log(res);
// console.log(`Result: ${result}`);
