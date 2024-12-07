const instructions = require('./instructions.json');

class Light {
	constructor() {
		this.on = false;
	}

	switchOn(){
	    this.on = true;
	}
}

class Lights {
	constructor(across, down) {
		this.across = across;
		this.down = down;
		this.grid = Array(across).fill(Array(down).fill(new Light));

	}

	switchOn(startingPostition, endPosition){
	    const startX = startingPostition[0]
	    const startY = startingPostition[1]
	    const endX = endPosition[0]
	    const endY = endPosition[1]

	    for (let i = startX; i <= endX; i++){
	        for (let j = startY; j <= endY; j++){
	            this.grid[i][j].switchOn()
	        }
	    }

	}
}
module.exports = { Light, Lights };
