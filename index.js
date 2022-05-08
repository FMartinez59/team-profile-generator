const inquirer = require("inquirer");
const Employee = require("./LIB/Employee");
const Manager = require("./LIB/Manager");
const Engineer = require("./LIB/Engineer");
const Intern = require("./LIB/Intern");

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "manager",
        message: "What is your Mangers Name",
      },
      {
        type: "input",
        name: "manager2",
        message: "What is the managers Employee ID?",
      },
      {
        type: "input",
        name: "manager3",
        message: "What is the managers email address?",
      },
      {
        type: "input",
        name: "manager4",
        message: "What is the managers office number?",
      },
    ])
    .then(function (manAnswers) {
      const person = new Manager(
        manAnswers.manager,
        manAnswers.manager2,
        manAnswers.manager3,
        manAnswers.manager4
      );
      console.log(person);
    });
};

const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineer",
        message: "What is your Engineers name?",
      },
      {
        type: "input",
        name: "engineer2",
        message: "What is the Engineers Employee ID?",
      },
      {
        type: "input",
        name: "engineer3",
        message: "What is the Engineers email?",
      },
      {
        type: "input",
        name: "engineer4",
        message: "What is the Engineers GitHub username?",
      },
    ])
    .then(function (enginAnswers) {
      const person = new Engineer(
        enginAnswers.engineer,
        enginAnswers.engineer2,
        enginAnswers.engineer3,
        enginAnswers.engineer4
      );
      console.log(person);
    });
};

const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "intern",
        message: "What is your intern's name?",
      },
      {
        type: "input",
        name: "intern2",
        message: "What is the interns Employee ID?",
      },
      {
        type: "input",
        name: "intern3",
        message: "What is the interns email?",
      },
      {
        type: "input",
        name: "intern4",
        message: "Where does the intern go to school?",
      },
    ])
    .then(function (internAnswers) {
      const person = new Intern(
        internAnswers.intern,
        internAnswers.intern2,
        internAnswers.intern3,
        internAnswers.intern4
      );
      console.log(person);
    });
};

const questionAfter = () => {
  return inquirer
  .prompt([
    {
      type: "list",
      name: "newWorker",
      message: "Who would you like to add?",
      choices: ["intern", "engineer"]
    }
  ])
  .then(function (questionAfterAnswers) {
    
  })
}
//need to ask questions after manager prompt
//then give list for intern or engineer 
//from list entry prompt next questions
//need to store answers in variable
//ask another questions if yes then run function that is another questions for person needed
const init = () => {
  promptManager();

};
init();
