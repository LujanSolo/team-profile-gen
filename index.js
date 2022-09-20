// GIVEN a command-line application that accepts user input
const { prompt } = require('inquirer');
const { questions } = require('./lib');

prompt(questions)

