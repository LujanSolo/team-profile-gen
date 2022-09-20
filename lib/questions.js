const questions = [
  {
    type:'list',
    name: 'newEmp',
    message: 'What type of employee would you like to add?'
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the employee\'s name?',
    when: ({newEmp}) => newEmp
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the employee\'s id?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the employee\'s email address?'
  },
  {
    type: 'input',
    name: 'officeNumb',
    message: 'What is the office number?'
    // when: //only when it's the manager being created
  }
];

module.exports = questions;