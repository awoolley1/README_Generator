// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')


// TODO: Create an array of questions for user input
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
        choices: ['MIT', 'Apache', 'v3'],
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
      }
   
  ]).then(function(responses){
    data = `
# Title: ${responses.Title}

###### Table of Contents:
1. Description: 
2. Installation: 
3. Usage: 
4. Contributing: 
5. Tests: 
6. Licenses: 
7. Questions


### Description: ${responses.Description}

### Installation: ${responses.Installation}
 
### Usage: ${responses.Usage}

### Contributing: ${responses.Contributing}

### Tests: ${responses.Tests}

##### License: ${responses.License}

##### Questions: contact me on GitHub @ ${responses.GitHub} or by Email @ ${responses.Email}
    `;

   fs.writeFile('README.md', data, function(error){
    if(error){
      console.log(error)
    }else{
      console.log("no error")
    }
   })
  })
  


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
