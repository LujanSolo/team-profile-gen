// GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateHTML = require


// WHEN I am prompted for my team members and their information

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address


// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab


// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description explaining the what, why, and how of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  {
    type: "list",
    name: "license",
    message: "What type of License would you like to use?",
    choices: ["Engineer", "Intern"] //? some kind of 
  },

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownOutput = generateMarkdown(answers);
      writeToFile("README.md", markdownOutput)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log('An error occurred.');
      } else {
        // Something else went wrong
        console.log('An error occurred.');
      }
    });
}

// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
//todo these will be type: list  

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated