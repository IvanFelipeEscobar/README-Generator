// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `What is the title of the project`,
        name: `title`
    },
    {
        type: `input`,
        message: `Provide a short description of the project`,
        name: `description`
    },
    {
        type: `input`,
        message: `Provide installation instructions if any`,
        name: `install`
    },
    {
        type: `input`,
        message: `Provide information for the usage of project`,
        name: `usage`
    },
    {
        type: `input`,
        message: `Provide contribution guidelines`,
        name: `contribution`
    },
    {
        type: `input`,
        message: `Provide test instructions if any`,
        name: `test`
    },
    { 
        type: `list`,
        message: `Choose a license for your project.`,
        choices: [`GNU AGPLv3`, `Mozilla Public License 2.0`, `Apache License 2.0`, `MIT License`, `N/A`],
        name: `license`
    },
    {
        type: `input`,
        message: `Provide GitHub user name`,
        name: `github`
    },
    {
        type: `input`,
        message: `Provide and email`,
        name: `email`
    }
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
