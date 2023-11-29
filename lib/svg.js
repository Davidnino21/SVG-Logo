const { Circle, Triangle, Square } = require("./shapes");
const Text = require("./text");

class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement} ${this.textElement}</svg>`
    }
    setTextElement(text, color) {
        const logoText = new Text(text, color)
        this.textElement = logoText.render()
    }
    setShapeElement(shape, color) {
        switch (shape) {
            case 'triangle':
                const triangle = new Triangle()
                triangle.setColor(color)
                this.shapeElement = triangle.render()
                break;
            case 'circle':
                const circle = new Circle()
                circle.setColor(color)
                this.shapeElement = circle.render()
                break;
            case 'square':
                const square = new Square()
                square.setColor(color)
                this.shapeElement = square.render()
                break;
            default:
                break;
        }
    }
}

module.exports = Svg;