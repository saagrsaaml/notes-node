console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

var user = os.userInfo();

// fs.appendFile('greetings.txt', 'Hello World!!', function(err) {
//   if(err){
//     console.log('error');
//   }
// });

// OR
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);

var res = notes.addNote();

var result = notes.add(2,3)

console.log(res);
console.log(`Result: ${result}`);
