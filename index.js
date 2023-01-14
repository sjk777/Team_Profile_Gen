const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

inquirer
  .prompt({
    type: "list",
    name: "task",
    message: "Select type of Employee to add",
    choices: ["Manager", "Engineer", "Intern", "Done"],
  })
  .then((answer) => console.log(answer));

//find out what time of employee they want
// driect them to ask what question depending on role
//
