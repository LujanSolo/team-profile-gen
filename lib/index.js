const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
const { addEmployee, mgrQuestions, intQuestions, engQuestions } = require('./questions');

module.exports = { Manager, Intern, Engineer, addEmployee, mgrQuestions, intQuestions, engQuestions };