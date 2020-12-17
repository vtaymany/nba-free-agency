const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html')

const render = require('./lib/htmlRenderer')

const collectInputs = async (inputs = []) => {
  const prompts = [
    {
      type: 'input',
      name: 'name',
      message: 'Employee name',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Employee email',
    },
    {
      type: 'list',
      message: 'Employee role',
      name: 'role',
      choices: ['Engineer', 'Intern', 'Manager'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Github account',
      when: (answers) => answers.role === 'Engineer',
    },
    {
      type: 'input',
      name: 'school',
      message: 'School',
      when: (answers) => answers.role === 'Intern',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Office number',
      when: (answers) => answers.role === 'Manager',
    },
    {
      type: 'confirm',
      name: 'again',
      message: 'Add another employee?',
      default: true,
    },
  ]

  const { again, ...answers } = await inquirer.prompt(prompts)
  const newInputs = [...inputs, answers]
  return again ? collectInputs(newInputs) : newInputs
}
const main = async () => {
  const inputs = await collectInputs()
  fs.writeFile('./output/team.html', render(inputs), (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
}

main()
