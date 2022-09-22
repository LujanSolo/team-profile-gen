
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
    name: 'officeNumb',
    message: 'What is the office number?'
  },
]

const questions = [
  {
    type:'list',
    name: 'newEmp',
    message: 'What type of employee would you like to add?',
    choices: ["Manager", "Engineer", "Intern"]
  }, //* change this so we start with the manager per the readME rules
  {
    type: 'input',
    name: 'name',
    message: 'What is the employee\'s name?',
    
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
    message: 'What is the office number?',
    when: ({newEmp}) => newEmp === "Manager"
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the Engineer\'s github username?',
    when: ({newEmp}) => newEmp === "Engineer"
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is the name of the intern\'s school?',
    when: ({newEmp}) => newEmp === "Intern"
  }
];

module.exports = {questions, mgrQuestions};