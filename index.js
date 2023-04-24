// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer 
.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can someone install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can someone use this project?',
    },
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'What technologies did you use?',
        choices: ['Javascript', 'CSS', 'Node.js', 'HTML'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can someone contribute to this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you have for the project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    
])
.then((answers) => {
    console.log(answers);

    const readMe = `# ${answers.title}

## Table of Contents:
    
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Questions](#questions)
- [License](#license)
    
## Description:
    
${answers.description}
    
## Technologies:
    
Project was created with:
    
1. ${answers.technologies[0]}
2. ${answers.technologies[1]}
3. ${answers.technologies[2]}
4. ${answers.technologies[3]}
    
## Installation:
    
${answers.installation}
       
## Usage: 

\`\`\`

${answers.usage}  

\`\`\`

## Contributions:
    
${answers.contributing}
    
## Questions:
    
Github: ${answers.github}
Email: ${answers.email}
    
## License: 
    
${answers.license}`

    fs.writeFile('readme.md', `${readMe}`, (err) => console.log('README logged!')
);
});

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

