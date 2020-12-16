// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
  }
  //Returns employee's name
  getName() {
    return this.name
  }
  //Returns employee's id
  getId() {
    return this.id
  }
  //Returns employee's email
  getEmail() {
    return this.email
  }
  //Returns employee's role
  getRole() {
    return 'Employee'
  }
}

module.exports = Employee
