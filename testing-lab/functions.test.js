const { returnTwo, greeting, add, subtract, multiply, divide } = require('./functions.js');

test('returnTwo should return 2', () => {
   const two = returnTwo();
   expect(two).toEqual(2);
});

test('greeting should return "Hello James."', () => {
   expect(greeting('James')).toBe("Hello James.");
});

test('greeting should return "Hello Jill."', () => {
   expect(greeting('Jill')).toBe("Hello Jill.");
});


describe('Math Functions', () => {
// Assertions for add
   test('Should return 3', () => {
      expect(add(1, 2)).toEqual(3);
   });
   
   test('Should return 14', () => {
      expect(add(5, 9)).toEqual(14);
   });

// Assertions for subtract
   test('Should return 5', () => {
      expect(subtract(7, 2)).toEqual(5);
});

// Assertions for multiply
   test('Should return 55', () => {
      expect(multiply(11, 5)).toEqual(55);
   });

// Assertions for divide
   test('Should return 3', () => {
      expect(divide(21, 7)).toEqual(3);
   });
});



