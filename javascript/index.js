const instructions = require('./instructions.json');

class Light {
	constructor() {
		this.on = false;
	}

	switchOn() {
		this.on = true;
	}
}

class Lights {
	constructor(across, down) {
		this.across = across;
		this.down = down;
		this.grid = Array(across).fill([]).map(row => Array(down).fill(new Light()).map(slot => new Light()));
	}

	printLights() {
		for (let i = 0; i < this.grid.length; i++) {
			for (let j = 0; j < this.grid[i].length; j++) {
				console.log(
					'in printlights function',
					`${i}, ${j}, ${this.grid[i][j].on}`
				);
			}
			// console.log(); // add a newline after each row
		}
	}

	switchOn(startingPostition, endPosition) {
		const startX = startingPostition[0];
		const startY = startingPostition[1];
		const endX = endPosition[0];
		const endY = endPosition[1];
		// console.log('before');
		// this.printLights();
		console.log(startX, startY, endX, endY);
		// console.log('is 2 1 on at start', this.grid[2][1].on);

		for (let i = startX; i <= endX; i++) {
			for (let j = startY; j <= endY; j++) {
				console.log('xx i, j', `${i} , ${j} , ${this.grid[i][j].on}`);
				this.grid[i][j].switchOn();
				this.printLights();
				// console.log('i, j', `${i} , ${j} , ${this.grid[i][j].on}`);
				// console.log('is 2 1 on', this.grid[2][1].on);
			}
		}
		console.log('after');
		this.printLights();
	}
}
module.exports = { Light, Lights };
