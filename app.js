console.log("Starting app.js");

const fs = require('fs');

const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
const command = process.argv[2];

console.log('Command: ', command);
console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  console.log('Listing all notes.')
} else if (command === 'read') {
  console.log('Fetching note.')
} else if (command === 'remove') {
  console.log('Removing note.')
} else {
  console.log('Command not recognized.')
}
