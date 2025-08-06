const { add } = require('../utils/math.utils');
describe('Math Utils function -> add', () => {
    test('add two numbers->',()=>{
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
        expect(add(-5, -5)).toBe(-10);
    })
})

const { subtract } = require('../utils/math.utils');
describe('Math Utils function -> subtract', () => {
    test('subtract two numbers->',()=>{
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(-1, -1)).toBe(0);
        expect(subtract(0, 0)).toBe(0);
        expect(subtract(-5, -3)).toBe(-2);
    })
})

const { multiply } = require('../utils/math.utils');
describe('Math Utils function -> multiply', () => {
    test('multiply two numbers->',()=>{
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-1, 1)).toBe(-1);
        expect(multiply(0, 5)).toBe(0);
        expect(multiply(-5, -5)).toBe(25);
    })
})

const { divide } = require('../utils/math.utils');
describe('Math Utils function -> divide', () => {
    test('divide two numbers->',()=>{
        expect(divide(6, 3)).toBe(2);
        expect(divide(-6, -3)).toBe(2);
        expect(divide(0, 5)).toBe(0);
        expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
    })
})



