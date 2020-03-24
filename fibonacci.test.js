const fibonacci = require("./fibonacci");

test('0-esim fibonacci is 0', () => {
    expect(fibonacci(0)).toBe(0);
});

test('1-esim fibonacci is 1', () => {
    expect(fibonacci(1)).toBe(1);
});

test('2-esim fibonacci is 1', () => {
    expect(fibonacci(2)).toBe(1);
});

test('3-esim fibonacci is 2', () => {
    expect(fibonacci(3)).toBe(2);
});

test('4-esim fibonacci is 3', () => {
    expect(fibonacci(4)).toBe(3);
});

test('5-esim fibonacci is 5', () => {
    expect(fibonacci(5)).toBe(5);
});

test('6-esim fibonacci is 8', () => {
    expect(fibonacci(6)).toBe(8);
});
