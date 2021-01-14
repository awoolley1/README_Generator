// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')


// TODO: Create an array of questions for user input
//const questions = [];

inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the description of your application?',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Write installation instructions for your application',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Write usage instructions for your application',
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'What are contribution guidelines for your application?',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'What are test instructions for your application?',
      },
      {
        type: 'list',
        name: 'License',
        message: 'Select a license type?',
        choices: ['v1', 'v2', 'v3'],
      },
      {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
      },
   
  ])
  .then((data) => {
    const filename = ``;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
