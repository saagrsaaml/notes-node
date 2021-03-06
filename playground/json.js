// var obj = {
//   name: 'Sagar'
// };
//
// converting js object into a string
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Sagar", "age": 25}';
// takes JSON and converts string back into its original form which can be an array or object
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
}

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString)

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof originalNoteString);
console.log(typeof note);
console.log(note.title);
