const inquirer = require("inquirer");
const Manager = require("./LIB/Manager");
const Engineer = require("./LIB/Engineer");
const Intern = require("./LIB/Intern");
const render = require("./src/page-template");
const fs = require("fs");
const teamMembers = {
  manager: null,
  engineers: [],
  intern: [],
};

const idArray = [];

function buildTeam() {
  fs.writeFile("/dist/team.html", render(teamMembers), (err) => {
    if (err) {
      console.log(err);
    }
  });
}



const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "manager",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character";
        },
      },
      {
        type: "input",
        name: "manager2",
        message: "What is the managers Employee ID?",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            return true;
          }
          return "Please enter a positive number greater than 0";
        },
      },
      {
        type: "input",
        name: "manager3",
        message: "What is the managers email address?",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/);
          if (pass) {
            return true;
          }
          return "Please enter a valid email";
        },
      },
      {
        type: "input",
        name: "manager4",
        message: "What is the managers office number?",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            return true;
          }
          return "Please enter a positive number greater than 0";
        },
      },
    ])
    .then((manAnswers) => {
      const manager = new Manager(
        manAnswers.manager,
        manAnswers.manager2,
        manAnswers.manager3,
        manAnswers.manager4
      );
      console.log(manager);
      teamMembers.manager = manager;
      idArray.push(manAnswers.manager2);
      createTeam();
    });
};

function createTeam() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Which team member would you like to add?',
      choices: [
        'Engineer',
        'Intern',
        'I do not want to add any more'
      ]
    }
  ]).then((answers) => {
    switch (answers.choice) {
      case 'Engineer':
        promptEngineer()
        break
      case 'Intern':
        promptIntern()
        break
        default:
          buildTeam();
    }
  })
}

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
      const engineer = new Engineer(
        enginAnswers.engineer,
        enginAnswers.engineer2,
        enginAnswers.engineer3,
        enginAnswers.engineer4
      );
      teamMembers.engineers.push(manager);
      idArray.push(enginAnswers.engineer2)
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
        choices: ["intern", "engineer"],
      },
    ])
    .then(function (questionAfterAnswers) {});
};
//need to ask questions after manager prompt
//then give list for intern or engineer
//from list entry prompt next questions
//need to store answers in variable
//ask another questions if yes then run function that is another questions for person needed
const init = () => {
  promptManager();
};
init();
