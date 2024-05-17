const mathOperations = require('./calculadora');
 
describe("Calculator tests", () => {
 test('adding 1 + 2 should return 3', () => {
   // arrange and act
   var result = mathOperations.sum(1,2)
 
   // assert
   expect(result).toBe(3);
 });
 
 test("subtracting 2 from 10 should return 8", () => {
   // arrange and act
   var result = mathOperations.diff(10,2)
 
   // assert
   expect(result).toBe(8);
 });
 
 test("multiplying 2 and 8 should return 16", () => {
   // arrange and act
   var result = mathOperations.product(2,8)
 
   // assert
   expect(result).toBe(16);
 });
test("Division de 4 y 2 devuelve 2", () => {
    var result = mathOperations.div(4,2)
    expect(result).toBe(2);
});
test("Resto de 10 y 5 devuelve 0", () => {
    var result = mathOperations.restoDiv(10,5)
    expect(result).toBe(0);
});
 });
