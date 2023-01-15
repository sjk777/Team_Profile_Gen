const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];

const templateHtml = require("./src/script.js");

const DIST_DIR = path.resolve(__dirname, "dist");

const outputPath = path.join(DIST_DIR, "teamProfile.html");

function addMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "what_member",
        message: "Add a manager, an engineer, an intern to create the team",
        choices: ["Manager", "Engineer", "Intern", "create the team"],
      },
    ])
    .then((answers) => {
      if (answers.what_member === "Manager") {
        addManager();
      } else if (answers.what_member === "Engineer") {
        addEngineer();
      } else if (answers.what_member === "Intern") {
        addIntern();
      } else {
        createFile();
      }
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the team manager?",
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID of the team manager?",
      },
      {
        type: "input",
        name: "email",
        message: "Email address of the team manager?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: `What is the office number of the team manager?`,
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      console.table(manager);
      teamMembers.push(manager);
      addMember();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the team engineer?",
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID of the team engineer?",
      },
      {
        type: "input",
        name: "email",
        message: "Email address of the team engineer?",
      },
      {
        type: "input",
        name: "gitHub",
        message: `What is the engineer's github profile name?`,
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.gitHub
      );
      console.table(engineer);
      teamMembers.push(engineer);
      addMember();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the team intern?",
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID of the team intern?",
      },
      {
        type: "input",
        name: "email",
        message: "Email address of the team intern?",
      },
      {
        type: "input",
        name: "school",
        message: `What school did the intern go to?`,
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      console.table(intern);
      teamMembers.push(intern);
      addMember();
    });
}

function createFile() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  } else {
    fs.writeFileSync(outputPath, templateHtml(teamMembers), "utf-8");
    console.log("HTML file created in the dist folder");
  }
}

function startApp() {
  addManager();
}

startApp();
