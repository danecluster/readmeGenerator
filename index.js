// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const path= require('path')
const fs=require('fs')
const generateMarkdown=require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your ReadMe?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your ReadMe.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Leave your email if you like to contribute.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this app used?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any testing frameworks?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Does this app contain a Github license?',
        choices: ['MIT','BSD 3', 'GPL 3.0', 'none']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log({...answers})
    writeToFile('readMe.md',generateMarkdown({...answers}))
  })
  .catch((error) => {
    console.error(error)
  });
}

// Function call to initialize app
init();
