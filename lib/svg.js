class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg width="350" height="60" xmlns="http://www.w3.org/2000/svg">${this.shapeElement} ${this.textElement}</svg>`
    }
}

module.exports = Svg;