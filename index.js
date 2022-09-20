// GIVEN a command-line application that accepts user input
const { prompt } = require('inquirer');
const { questions, Manager, Intern, Engineer } = require('./lib');
let teamMembers = [];

prompt(questions)
.then(response => {
  switch(response.newEmp){
    case "Manager":
      const empManager = new Manager(response.name, response.email, response.id, response.officeNumb)
      teamMembers.push(empManager);
      break; //*ensures that it won't keep searching for matches
    case "Engineer":
      const empEngineer = new Engineer(response.name, response.email, response.id, response.github)
      teamMembers.push(empEngineer);
      break;
    case "Intern":
      const empIntern = new Intern(response.name, response.email, response.id, response.school)
      teamMembers.push(empIntern);
      break;
  }
}) 

function nextStep(){
  prompt([{
    type: 'confirm',
    name: 'answer',
    message: 'Do you want to create another employee?'
  }])
}

