const fs = require('fs')
const { prompt } = require('inquirer');
const { questions, Manager, Intern, Engineer, mgrQuestions } = require('./lib');
const genHTML = require('./src/generateHTML');

const { writeFile } = fs.promises  //*new hotness replacing writeFileSync
let teamMembers = [];

function beginBuild() {
  prompt(mgrQuestions)
    .then(response => {
      const mgrBody = new Manager(response.name, response.email, response.id, response.officeNumb)
      teamMembers.push(mgrBody);
      console.table(mgrBody);
      nextStep();
    })
}

//*effectively built a loop between these two functions until they select "nope"
function nextStep() {
  prompt(questions)
    .then(response => {
      switch (response.newEmp) {
        case "Engineer":
          const empEngineer = new Engineer(response.name, response.email, response.id, response.github)
          teamMembers.push(empEngineer);
          nextStep();
          break;
        case "Intern":
          const empIntern = new Intern(response.name, response.email, response.id, response.school)
          teamMembers.push(empIntern);
          nextStep();
          break;
        case "none": //! AN ISSUE HERE - NONE STILL ASKS FOR NAME, ETC
          console.table(teamMembers)
          writeFile('dist/index.html', genHTML(teamMembers), (err) => {
            console.error(err)
          })
            .then(response => {
              console.log("Job's done.")
            })
          break;
      }
    })
}

beginBuild();

//*after push, re-init