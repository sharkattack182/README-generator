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
        name: "usage"
    },
    {
        type: "input",
        message: "Add any licensing here.",
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

    let title = JSON.stringify(answers.title);
    let description = JSON.stringify(answers.description);
    let installation = JSON.stringify(answers.installation);
    let usage = JSON.stringify(answers.usage);
    let license = JSON.stringify(answers.license);
    let contributing = JSON.stringify(answers.contributing);
    let test = JSON.stringify(answers.test);
    let questions = JSON.stringify(answers.questions);

    
    return console.log(JSON.stringify(title + description + installation + usage + license + contributing + test + questions));
   
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