const { Light, Lights } = require('./index.js');

test('light starts off', () => {
	const light = new Light();

	expect(light.on).toBe(false);
});

test('grid starts with lights off', () => {
	const newLight1 = new Light();
	const newLight2 = new Light();
	const grid = [[newLight1], [newLight2]];

	expect(newLight1.on).toBe(false);
	expect(newLight2.on).toBe(false);
});

test('grid of lights starts with lights off', () => {
	const across = 3;
	const down = 2;
	const lights = new Lights(across, down);

	expect(lights.grid.length).toBe(across);
	expect(lights.grid[0].length).toBe(down);

	for (let i = 0; i < lights.grid.length; i++) {
		for (let j = 0; j < lights.grid[i].length; j++) {
			expect(lights.grid[i][j].on).toBe(false);
		}
	}
});
