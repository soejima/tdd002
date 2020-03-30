const combination = require('./combination.js');

test("combinação de 2 elementos 1 a 1 é igual a 2", () => {
    expect(combination(2,1)).toBe(2);
});

test("combinação de 2 elementos 2 a 2 é igual a 1", () => {
    expect(combination(2,2)).toBe(1);
});

test("combinação de 3 elementos 1 a 1 é igual a 3", () => {
    expect(combination(2,2)).toBe(1);
});

test("combinação de 3 elementos 2 a 2 é igual a 3", () => {
    expect(combination(3,2)).toBe(3);
});