const helloWorld = require("./hello_world");

test('return "Hello, World!" period', () => {
    expect(helloWorld()).toBe("Hello, World!");
});