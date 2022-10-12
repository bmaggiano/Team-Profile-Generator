// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager')
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


// Create a function to initialize app

function managerQuestion() {
    const prompt = inquirer.createPromptModule()
    prompt(managerPrompt)
    .then((data) => {
    const newManager = new Manager(data.name, data.id, data.email, data.number);
    arr.push(newManager)
    console.log(arr)
    
        switch (data.add) {
            case "Engineer":
                engineerQuestion();
                break;
                case "Intern":
                internQuestion();
                break;
                case "No, finish building my team":
                    //need to add refernce to function that writes the HTML file
                    return;
                }
            })
        }
        
managerQuestion()

const arr = []

const engineerQuestion = function engineerQuestion() {

const prompt = inquirer.createPromptModule()
prompt(engineerPrompt)
.then((data) => {
    switch (data.saveEng) {
        case "Yes":
            const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
            arr.push(newEngineer)
            console.log(arr)
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
                fs.appendFile('index.html', generateManager(), (err) =>
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
                    arr.push(newIntern)
                    console.log(arr)
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
                        fs.appendFile('index.html', generateManager(), (err) =>
                        err ? console.error(err) : console.log('Commit logged!')
                      );
                        return;
                    }
    })
}


const generateManager = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${arr[0].name}</h1>
        <h2>${arr[0].id}</h2>
        <h2>${arr[0].email}</h2>
        <h2>${arr[0].number}</h2>
    </body>
    </html>`
}