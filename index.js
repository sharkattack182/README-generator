var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
      message: "Please enter a description of your project.",
      name: "description"
    },
    {
        type: "input",
      message: "Please add installation instructions.", 
      name: "installation"
    },
    {
        type: "input",
        message: "Please add Usage Instructions",
        name: "usage"
    },
    {
        type: "list",
        message: "Please choose licenseing.",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "Please add instructions for contributions.",
        name: "contributing"
    },
    {
        type: "input",
        message: "Please add testing instructions here.",
        name: "test"
    },
    {
        type: "input",
        message: "Please add a method to contact you with any questions.",
        name: "questions"
    },

]).then(answers => {

    let title = answers.title;
    let description = answers.description;
    let installation = answers.installation;
    let usage = answers.usage;
    let license = answers.license;
    let contributing = answers.contributing;
    let test = answers.test;
    let questions = answers.questions;
    let email = answers.email;
    let username = answers.username;


 var stringAnswers = `
 # ${title}

 ${description}
 
 ## Table of Contents
 * [Installation](#Installation)
 * [Usage](#Usage)
 * [License](#License)
 * [Contributing](#Contributing)
 * [Tests](#Tests)
 * [Questions](#Questions)
 
 
 ## Installation
 
 > ${installation}
 
 
 ## Usage
 
 > ${usage}
 
 
 ## License
 [${license}]  This project is covered by the ${license} license
 
 ## Contributing
 ${contributing}
 
 ## Tests
 ${test}

 ## Questions
 for any questions visit my GitHub [${username}](https://github.com/${username}).
 or email me at ${email}.
 `

   
    fs.writeFile("README.md", stringAnswers, err => {
        if (err) {
            return console.log(err);
        }
    })
})


// so the idea is to take each item and isoalte it such as 
// var title = answers.title then stringify it and add a # 
// then add it all to a string im guessing and run that where 
// readMe is in the writeFile function.