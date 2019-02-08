var squares = []

function setup() {
	createCanvas(800, 600);
	background(100);
	drawGrid(20, 19);
}

function draw() {
	 for(let i = 0; i < squares.length; i++) {
	 	squares[i].show();
	 }
}

function drawGrid(x, y) {
	fill(255);
	for(let i = 0; i < x; i++) {
		for(let j = 0; j < y; j++) {
			squares.push(new Square(0 + (i * 31), 0 + (j * 31), 30));
		}
	}

	for(let i = 0; i < squares.length; i++) {
		squares[i].show();
	}
}

function mouseClicked() {
	for(let i = 0; i < squares.length; i++) {
	 	squares[i].clicked();
	}
	// let square = null;
	// for(let i = 0; i < squares.length; i++) {
	// 	if(mouseX <= squares[i].x + squares[i].size && mouseX >= squares[i].x) {
	// 		square = squares[i]
	// 		console.log(square);
	// 		if(square.state == 0) {
	// 			square.state = 1;
	// 		}
	// 	}
	// }
}