const Employee = require('./Employee');

class Intern extends Employee{
  constructor(name, id, email, school){
    super(name, id, email);
    this.school = school;
  };
//arrow function with implicit return built in
  getSchool = () => this.school;
  getRole = () => 'Intern';
}

module.exports = Intern;