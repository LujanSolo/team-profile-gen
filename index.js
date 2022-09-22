const fs = require('fs')
const { prompt } = require('inquirer');
const { questions, Manager, Intern, Engineer, mgrQuestions } = require('./lib');
const genHTML = require('./src/generateHTML');

const { writeFile } = fs.promises  //*new hotness replacing writeFileSync
let teamMembers = [];

function beginBuild(){
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
  nextStep();
}) 
}

//*effectively built a loop between these two functions until they select "nope"
function nextStep(){
  prompt([{
    type: 'confirm',
    name: 'answer',
    message: 'Do you want to create another employee?'
  }])
  .then(response => {
    if(response.answer){
      return initQuestions();
    } else {
      const htmlText = genHTML(teamMembers)
      writeFile('dist/index.html', htmlText)
      .then(response =>{
        console.log("Job's done.")
      })
    }
  })
}

beginBuild();
