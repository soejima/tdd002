const quadratic = require('./quadratic');

test("quadratic value for x=0 is c", () => {
    expect(quadratic(0)).toBe(0);
    expect(quadratic(2)).toBe(4);
    expect(quadratic(-1)).toBe(1);
});