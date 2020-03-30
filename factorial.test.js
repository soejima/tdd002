const factorial = require('./factorial')

test("fatorial de 0 e de 1 é 1", () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
});

test("fatorial de 2 é 2", () => {
    expect(factorial(2)).toBe(2);
});

test("fatorial de 5 é 120", () => {
    expect(factorial(5)).toBe(120);
});