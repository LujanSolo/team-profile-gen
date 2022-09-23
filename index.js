const fs = require('fs')
const { prompt } = require('inquirer');
const { questions, Manager, Intern, Engineer, mgrQuestions, intQuestions, engQuestions } = require('./lib');
const genHTML = require('./src/generateHTML');

const { writeFile } = fs.promises  //*new hotness replacing writeFileSync
let teamMembers = [];

function beginBuild() {
  prompt(mgrQuestions)
    .then(response => {
      const mgrBody = new Manager(response.name, response.email, response.id, response.officeNumber)
      teamMembers.push(mgrBody);
      console.table(mgrBody);
      return nextStep();
    })
}

//*effectively built a loop between these two functions until they select "nope"
function nextStep() {
  prompt(questions)
    .then(response => {
      switch (response.newEmp) {
        case "Engineer":
          buildEng();
          break;
        case "Intern":
          buildInt();
          break;
        default:
          return writeFile('dist/index.html', genHTML(teamMembers), (err) => {
            console.error(err)
          })
            .then(response => {
              console.log("Job's done.")
            })

      }
    })
}

function buildEng() {
  prompt(engQuestions)
    .then(response => {
      const empEngineer = new Engineer(response.name, response.email, response.id, response.github)
      teamMembers.push(empEngineer);
      return nextStep();
    })
}

function buildInt() {
  prompt(intQuestions)
    .then(response => {
      const empIntern = new Intern(response.name, response.email, response.id, response.school)
      teamMembers.push(empIntern);
      return nextStep();
    })
}

beginBuild();

