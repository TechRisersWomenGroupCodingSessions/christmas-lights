const {Light} = require("./index.js");

test('light starts off', () => {
    const light = new Light();

    expect(light.on).toBe(false);
});