var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {},
    {},
    {},

]).then(answers => {

    let readMe = "";
    fs.writeFile("README.md", readMe, err => {
        if(err) {
            return console.log(err);
        }
    })
})