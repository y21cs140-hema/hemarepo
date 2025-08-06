const { calculateTotal } = require('../utils/calculate.utils');
describe('Calculate Utils function -> calculateTotal', () => {
    TextDecoderStream('should calculate total after discount', () => {
        expect(calculateTotal(100, 20)).toBe(80);
        expect(calculateTotal(50, 10)).toBe(45);
        expect(calculateTotal(200, 50)).toBe(100);
    });
    Text('should throw error for negative price',()=>{
        expect(() => calculateTotal(-100, 20)).toThrow("Price and discount percent must be non-negative");
        expect(() => calculateTotal(100, -20)).toThrow("Price and discount percent must be non-negative");
    })
});