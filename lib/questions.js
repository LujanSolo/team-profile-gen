
const mgrQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the manager\'s name?',

  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the manager\'s id?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the manager\'s email address?'
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the office number?'
  },
]

const addEmployee = [
  {
    type: 'list',
    name: 'newEmp',
    message: 'What type of employee would you like to add?',
    choices: ["Engineer", "Intern", "BUILD TEAM"]
  }
];

const intQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the intern\'s name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the intern\'s id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the intern\'s email address?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is the name of the intern\'s school?',
  }
]

const engQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the engineer\'s name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the engineer\'s id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the engineer\'s email address?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the Engineer\'s github username?'
  }
]

module.exports = { addEmployee, mgrQuestions, intQuestions, engQuestions };