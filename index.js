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



const inquirer = require('inquirer')

const manager = [
    {
        name: "manager",
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
        name: "officeNumber",
        message: "What is the manager's office number?"
    },
    {
        type: "list",
        name: "add",
        message: "Would you like to add to your team?",
        choices: ["Engineer", "Intern", "No, finish building my team"]
    }
]

const engineer = [
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
        name: "add",
        message: "Would you like to add to your team?",
        choices: ["Engineer", "Intern", "No, finish building my team"]
    }
];

const intern = [
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
        name: "add",
        message: "Would you like to add to your team?",
        choices: ["Engineer", "Intern", "No, finish building my team"]
    }
];


// Create a function to initialize app

function managerQuestion() {
    const prompt = inquirer.createPromptModule()
    prompt(manager)
    .then((data) => {
        switch (data.add) {
            case "Engineer":
                engineerQuestion();
                return;
            case "Intern":
                internQuestion();
                return
            case "No, finish building my team":
                //need to add refernce to function that writes the HTML file
                return
        }
    })
}

const engineerQuestion = function engineerQuestion() {
    const prompt = inquirer.createPromptModule()
    prompt(engineer)
    .then((data) => {
        switch (data.add) {
            case "Engineer":
                engineerQuestion();
                return;
            case "Intern":
                internQuestion();
                return
            case "No, finish building my team":
                //need to add refernce to function that writes the HTML file
                return
        }
    })
}

const internQuestion = function internQuestion() {
    const prompt = inquirer.createPromptModule()
    prompt(intern)
    .then((data) => {
        switch (data.add) {
            case "Engineer":
                engineerQuestion();
                return;
            case "Intern":
                internQuestion();
                return
            case "No, finish building my team":
                //need to add refernce to function that writes the HTML file
                return
        }
    })
}

managerQuestion()



// function init() {
//     const prompt = inquirer.createPromptModule()
//     prompt(questions)
//     .then((data) => {
//         fs.appendFile('README.md', generateMarkdown(data), (err) =>
//         err ? console.error(err) : console.log('Commit logged!')
//       );
//     }) 
// }

// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.

// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`
