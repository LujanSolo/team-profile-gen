
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

const questions = [
  {
    type: 'list',
    name: 'newEmp',
    message: 'What type of employee would you like to add?',
    choices: ["Engineer", "Intern", "EXIT"]
  }
];

const intQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the employee\'s name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the employee\'s id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the employee\'s email address?',
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
    message: 'What is the employee\'s name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the employee\'s id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the employee\'s email address?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the Engineer\'s github username?',
    when: ({ newEmp }) => newEmp === "Engineer"
  }
]

module.exports = { questions, mgrQuestions, intQuestions, engQuestions };