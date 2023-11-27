const { Triangle, Circle, Square } = require('./shapes')

describe('Shapes', () => {
    test('Triangle renders correctly', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
    
    test('Circle renders correctly', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" stroke="red" fill="blue" stroke-width="5"/>');
    })

    test('Square renders correctly', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="10" y="10" width="30" height="30" stroke="black" fill="blue" stroke-width="5"/>');
    })
})
