// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

//Extends on employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
  }
  //Returns engineer's Github
  getGithub() {
    return this.github
  }
  //Returns engineers's role
  getRole() {
    return 'Engineer'
  }
}

module.exports = Engineer
