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
        choices: ['MIT', 'Apache', 'BSD', 'ISC', 'GPL'],
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
1. [Description] (#descr)
2. [Installation] (#inst)
3. [Usage] (#usage)
4. [Contributing] (#cont)
5. [Tests] (#test)
6. [Licenses] (#lice)
7. [Questions] (#ques)
    
    
### <a name="descr">Description: ${responses.Description}</a>
    
### <a name="inst">Installation: ${responses.Installation}</a>
     
### <a name="usage">Usage: ${responses.Usage}</a>
    
### <a name="cont">Contributing: ${responses.Contributing}</a>
    
### <a name="test">Tests: ${responses.Tests}</a>
    
##### <a name="lice">License: ${responses.License}</a>
    
##### <a name="ques">Questions: contact me on GitHub @ ${responses.GitHub} or by Email at ${responses.Email}</a>
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
