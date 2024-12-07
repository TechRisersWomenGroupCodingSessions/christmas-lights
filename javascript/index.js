const instructions = require('./instructions.json');

class Light {
	constructor() {
		this.on = false;
	}
}

class Grid {
	constructor(across, down) {
		this.across = across;
		this.down = down;
		this.lights = Array.from();
	}
}
module.exports = { Light, Grid };
