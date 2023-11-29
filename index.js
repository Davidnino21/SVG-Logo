const inquirer = require('inquirer');
const fs = require('fs');
const Svg = require('./lib/svg');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters.',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color keyword or a hexadecimal number.',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'choose shape',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color keyword or a hexadecimal number.',
        },
    ])

    .then((answers) => {
        const svgContent = generateSvg(answers);

        fs.writeFile('logo.svg', svgContent, (err) => {
            err ? console.log(err) : console.log('Successfully created logo.svg')
        })
    })

const generateSvg = ({ text, textColor, shape, shapeColor}) => {
    const svg = new Svg()
    svg.setTextElement(text, textColor)
    svg.setShapeElement(shape, shapeColor)
    return svg.render()
}









// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered