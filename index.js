// TODO: Include packages needed for this application
const inquirer = require('inquirer')
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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
