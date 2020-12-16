// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

//Extends employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school
  }
  //Returns intern's Github
  getSchool() {
    return this.school
  }
  //Returns interns's role
  getRole() {
    return 'Intern'
  }
}

module.exports = Intern
