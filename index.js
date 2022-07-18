// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Write a description for your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: "How did you perform the required installations for your project?",
    name: 'installation'
  },
  {
    type: 'input',
    message: "Describe how your aplication/project could be used.",
    name: 'usage'
  },
  {
    type: 'input',
    message: "Describe what other contributions to your project there were.",
    name: 'contribution'
  },
  {
    type: 'input',
    message: "Describe how to run the tests utilized in your project.",
    name: 'tests'
  },
  {
    type: 'list',
    message: "Choose a license for your project.",
    choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License'],
    name: 'license'
  },
];

// TODO: Create a function to write README file
/*function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
  
    console.log("Your README.md file has been created")
});
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.table(data)
    writeToFile('README.md', data.title);
  })
}*/

function init () {inquirer
  .prompt(questions)
  .then((response) => 
       fs.writeFile('README.MD', generateMarkdown(response), (err) =>
       err ? console.log(err) : console.log('success')
       ) 
)};

// Function call to initialize app
init();
