const inquirer = require("inquirer");
const Employee = require("./LIB/Employee");

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
    .then(function (answers) {
      const person = new Employee(answers.manager, answers.manager2, answers.manager3, answers.manager4)
      console.log(person);
    });
};
//ask another questions if yes then run function that is another questions for person needed
const init = () => {
  promptManager();
};
init();
