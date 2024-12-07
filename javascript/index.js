const instructions = require('./instructions.json');

class Light {
	constructor() {
		this.on = false;
	}
}

class Lights {
	constructor(across, down) {
		this.across = across;
		this.down = down;
		this.grid = Array(across).fill(Array(down).fill(new Light));

	}
}
module.exports = { Light, Lights };
