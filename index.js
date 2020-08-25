var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
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
      message: "What is your user name?", // need to figure out input type
      name: "table-of-contents"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },

]).then(answers => {

    let readMe = "";
    fs.writeFile("README.md", readMe, err => {
        if (err) {
            return console.log(err);
        }
    })
})


// Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions