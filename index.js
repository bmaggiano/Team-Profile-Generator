const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee')
const inquirer = require('inquirer');
const fs = require('fs')

const managerPrompt = [
    {
        name: "name",
        message: "What is the manager's name?"
    },
    {
        name: "id",
        message: "What is the manager's id?"
    },
    {
        name: "email",
        message: "What is the manager's email?"
    },
    {
        name: "number",
        message: "What is the manager's office number?"
    },
    {
        type: "list",
        name: "add",
        message: "Would you like to add to your team?",
        choices: ["Engineer", "Intern", "No, finish building my team"]
    }
]

const engineerPrompt = [
    {
        name: "name",
        message: "What is the engineer's name?"
    },
    {
        name: "id",
        message: "What is the engineer's id?"
    },
    {
        name: "email",
        message: "What is the engineer's email?"
    },
    {
        name: "github",
        message: "What is your engineer's github username?"
    },
    {
        type: "list",
        name: "saveEng",
        message: "Would you like save this memeber?",
        choices: ["Yes", "No"]
    },
    {
        type: "list",
        name: "add",
        message: "Would you like to add to your team?",
        choices: ["Engineer", "Intern", "No, finish building my team"]
    }
];

const internPrompt = [
    {
        name: "name",
        message: "What is the interns's name?"
    },
    {
        name: "id",
        message: "What is the interns's id?"
    },
    {
        name: "email",
        message: "What is the interns's email?"
    },
    {
        name: "school",
        message: "What is your inters's school?"
    },
    {
        type: "list",
        name: "saveInt",
        message: "Would you like save this memeber?",
        choices: ["Yes", "No"]
    },
    {
        type: "list",
        name: "add",
        message: "Would you like to add to your team?",
        choices: ["Engineer", "Intern", "No, finish building my team"]
    }
];

function managerQuestion() {
    const prompt = inquirer.createPromptModule()
    prompt(managerPrompt)
    .then((data) => {
    const newManager = new Manager(data.name, data.id, data.email, data.number);
    managerArr.push(newManager)
    console.log(managerArr)
    
        switch (data.add) {
            case "Engineer":
                engineerQuestion();
                break;
                case "Intern":
                internQuestion();
                break;
                case "No, finish building my team":
                    return;
                }
            })
        }
        
managerQuestion()
const managerArr = []
const engineerArr = []
const internArr = []

const engineerQuestion = function engineerQuestion() {

const prompt = inquirer.createPromptModule()
prompt(engineerPrompt)
.then((data) => {
    switch (data.saveEng) {
        case "Yes":
            const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
            engineerArr.push(newEngineer)
            console.log(engineerArr)
            break;
        case "No":
            return;
    }
    switch (data.add) {
        case "Engineer":
                engineerQuestion();
                break;
            case "Intern":
                internQuestion();
                break;
            case "No, finish building my team":
                //need to add refernce to function that writes the HTML file
                fs.appendFile('index.html', generateHTML(), (err) =>
                err ? console.error(err) : console.log('Commit logged!'));
                return;
            }
})
}

const internQuestion = function internQuestion() {
    const prompt = inquirer.createPromptModule()
    prompt(internPrompt)
    .then((data) => {
            switch (data.saveInt) {
                case "Yes":
                    const newIntern = new Intern(data.name, data.id, data.email, data.school);
                    internArr.push(newIntern)
                    console.log(internArr)
                    break;
                case "No":
                    return;
            }
            switch (data.add) {
                case "Engineer":
                        engineerQuestion();
                        break;
                    case "Intern":
                        internQuestion();
                        break;
                    case "No, finish building my team":
                        //need to add refernce to function that writes the HTML file
                        fs.appendFile('./dist/index.html', generateHTML(), (err) =>
                        err ? console.error(err) : console.log('Commit logged!')
                      );
                        return;
                    }
    })
}

const generateHTML = () => {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>

  <header>
    <h1>MY TEAM</h1>
  </header>

<main class="flex row justify-content-center my-5">
    <div class="card" style="width: 22rem;">
        <div class="card-body">
          <h5 class="card-title">Manager: ${managerArr[0].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">ID: ${managerArr[0].id}</h6>
          <a href"#" class="card-text">${managerArr[0].number}</a><br>
          <a href="mailto:${managerArr[0].email}" class="card-link">Email: ${managerArr[0].email}</a>
        </div>
      </div>

      <div class="card" style="width: 22rem;">
        <div class="card-body">
          <h5 class="card-title">Engineer: ${engineerArr[0].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">ID: ${engineerArr[0].id}</h6>
          <a href="https://github.com/${engineerArr[0].github}" class="card-text">Click here for Github profile!</a><br>
          <a href="mailto:${managerArr[0].email}" class="card-link">Email: ${engineerArr[0].email}</a>
        </div>
      </div>

      <div class="card" style="width: 22rem;">
        <div class="card-body">
          <h5 class="card-title">Engineer: ${engineerArr[1].name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">ID: ${engineerArr[1].id}</h6>
          <a href="https://github.com/${engineerArr[1].github}" class="card-text">Click here for Github profile!</a><br>
          <a href="mailto:${managerArr[0].email}" class="card-link">Email: ${engineerArr[1].email}</a>
        </div>
      </div>

      <div class="card" style="width: 22rem;">
      <div class="card-body">
        <h5 class="card-title">${internArr[0].name}: Intern</h5>
        <h6 class="card-subtitle mb-2 text-muted">ID: ${internArr[0].id}</h6>
        <p class="card-text">School: ${internArr[0].school}</p>
        <a href="mailto:${internArr[0].email}" class="card-link">Email: ${internArr[0].email}</a>
      </div>
    </div>
      <div class="card" style="width: 22rem;">
      <div class="card-body">
        <h5 class="card-title">${internArr[1].name}: Intern</h5>
        <h6 class="card-subtitle mb-2 text-muted">ID: ${internArr[1].id}</h6>
        <p class="card-text">School: ${internArr[1].school}</p>
        <a href="mailto:${internArr[1].email}" class="card-link">Email: ${internArr[1].email}</a>
      </div>
    </div>
</main>    


</body>
</html>`
}