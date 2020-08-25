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
      message: "Please add installation instructions.", 
      name: "installation"
    },
    {
        type: "input",
        message: "Please add Usage Instructions",
        name: "Usage"
    },
    {
        type: "input",
        message: "Add any licensing here.",
        name: "license"
    },
    {
        type: "input",
        message: "Please add instructions for contributions.",
        name: "constributing"
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

    let readMe = JSON.stringify(answers);
    return console.log(readMe);
    // fs.writeFile("README.md", readMe, err => {
    //     if (err) {
    //         return console.log(err);
    //     }
    // })
})


// so the idea is to take each item and isoalte it such as 
// var title = answers.title then stringify it and add a # 
// then add it all to a string im guessing and run that where 
// readMe is in the writeFile function.