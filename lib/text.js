class Text {
    constructor(text, color) {
        this.text = text,
        this.color = color
    }
    render(){
        return `<text x="50%" y="50%" dominate-baseline="middle" fill="${this.colr}">${this.text}</text>`
    }
}

module.exports = Text;