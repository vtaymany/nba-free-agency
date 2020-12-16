// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

//Extends employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber
  }
  //Returns managers's office number
  getOfficeNumber() {
    return this.officeNumber
  }
  //Returns manager's role
  getRole() {
    return 'Manager'
  }
}

module.exports = Manager
