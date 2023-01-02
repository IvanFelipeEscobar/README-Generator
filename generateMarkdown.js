// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  if (license === `N/A`){
    return ` `;
  } else {
  switch (license) {
    case `GNU AGPLv3`:
      badge = { name: `GNU+AGPLv3`, color: `orange` };
      break;
    case `Mozilla Public License 2.0`:
      badge = { name: `Mozilla+2.0`, color: `yellow` };
      break;
    case `Apache License 2.0`:
      badge = { name: `Apache+2.0`, color: `green` };
      break;
    case `MIT License`:
      badge = { name: `MIT`, color: `red` };
      break;
  }

  return `https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color}`; //io generates badge based on user input, in this case display message is rendered from input and color added in object
}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let path;
  if (license === `N/A`){
    return ` `
  } else {
  
  switch (license) {
    case `GNU AGPLv3`:
      path = `agpl-3.0`;
      break;
    case `Mozilla Public License 2.0`:
      path = `mpl-2.0`;
      break;
    case `Apache License 2.0`:
      path = `apache-2.0`;
      break;
    case `MIT License`:
      path = `mit`;
      break;
  }

  return `https://choosealicense.com/licenses/${path}/`;
}}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license)
  let licenseUrl = renderLicenseLink(data.license)
  let result = (
`# ${data.title}
\n![${data.license}](${licenseBadge})
\n## Table of Contents
\n* [Description](#Description)
\n* [Installation](#Installation)
\n* [Usage](Usage)
\n* [Contributing](#Contributing)
\n* [Tests](#Tests)
\n* [License](#License)
\n* [Questions](#Questions)
\n## Description
\n${data.description}
\n## Installation
\n${data.install}
\n## Usage
\n${data.usage}
\n## Contributing
\n${data.contribution}
\n## Tests
\n${data.test}
\n## License
\nThis project is licensed under the ${data.license} - see the [${data.license}](${licenseUrl}) page.
\n## Questions
\n[Github Profile](https://github.com/${data.github})
\nIf you have any additional question just email - ${data.email}
`)


  return result ;
}

module.exports = generateMarkdown;
