// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'list',
    message: 'What is your project burrito?',
    name: 'list',
    choices: ["yes", "no", "taco"]
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
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
    writeToFile('README.md',`# ${data.title}`)
  })
}

// Function call to initialize app
init();
