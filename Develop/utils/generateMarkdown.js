var licenseBadgeURL = ""
// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    switch (license) {
      case "MIT":
        licenseBadgeURL = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        break;
      case "Apache":
        licenseBadgeURL = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        break;
      case "BSD":
        licenseBadgeURL = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        break;
      case "ISC":
        licenseBadgeURL = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
        break;
      case "GPL":
        licenseBadgeURL = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        break;
      default:
          ""
    }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
renderLicenseBadge(responses.License);

  return `
# **Title: ${responses.Title}**

${licenseBadgeURL}
#### **Table of Contents:**
1. [*Description*](#description: "Jump to Description")
2. [*Installation*](#installation: "Jump to Installation")
3. [*Usage*](#usage: "Jump to Usage")
4. [*Contributing*](#contributing: "Jump to Contributing")
5. [*Tests*](#tests: "Jump to Tests")
6. [*Licenses*](#license: "Jump to Licenses")
7. [*Questions*](#questions: "Jump to Questions")
  
### **Description:**
${responses.Description}
  
### **Installation:**
${responses.Installation}
  
### **Usage:**
${responses.Usage}
  
### **Contributing:**
${responses.Contributing}
  
### **Tests:**
${responses.Tests}
  
### **License:**
${responses.License}
  
### **Questions:**
Contact me on GitHub @ ${responses.GitHub} or by Email at ${responses.Email}

`;
}

module.exports = generateMarkdown;
