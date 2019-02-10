var cols = 100;
var rows = 100;
var grid = new Array(cols);

var openSet = [];
var closedSet = [];
var start;
var end;

var w, h;
var path = [];

function removeFromArray(arr, elt) {
	for(let i = arr.length - 1; i >= 0; i--) {
		if(arr[i] == elt) {
			arr.splice(i, 1);
		}
	}
}

function heuristic(a, b) {
	var d = abs(a.i - b.i) + abs(a.j - b.j);
	// var d = dist(a.i, a.j, b.i, b.j);
	return d;
}

function setup() {
	createCanvas(800, 750);
	background(0);

	w = width/cols;
	h = height/rows;

	for(let i = 0; i < cols; i++) {
		grid[i] = new Array(rows);
	}

	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < cols; j++) {
			grid[i][j] = new Spot(i, j);
		}
	}

	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < cols; j++) {
			grid[i][j].addNeighbors(grid);
		}
	}

	start = grid[0][0];
	end = grid[cols-1][cols-4];

	openSet.push(start);
}

function draw() {
	if(openSet.length > 0) {

		var winner = 0;
		for(let i = 0; i < openSet.length; i++) {
			if(openSet[i].f < openSet[winner].f) {
				winner = i;
			}
		}
		var current = openSet[winner];

		if(openSet[winner] === end) {

			noLoop();
			console.log("D O N E");
		}

		removeFromArray(openSet, current);
		closedSet.push(current);

		var neighbours = current.neighbors;
		for(let i = 0; i < neighbours.length; i++) {
			var neighbour = neighbours[i];
			if(!closedSet.includes(neighbour)) {
				var tempG = current.g + 1;

				if(openSet.includes(neighbour)) {
					if(tempG < neighbour.g) {
						neighbour.g = tempG;
					}
				} else {
					neighbour.g = tempG;
					openSet.push(neighbour);
				}

				neighbour.h = heuristic(neighbour, end);
				neighbour.f = neighbour.g + neighbour.h;
				neighbour.previous = current;
			}
		}


	} else {
		// NO PATH
	}

	for(let i = 0; i < cols; i++) {
		for(let j = 0; j < cols; j++) {
			grid[i][j].show(color(255));
		}
	}

	for(let i = 0; i < openSet.length; i++) {
		openSet[i].show(color(0, 255, 0));
		// console.log(openSet[i])
	}

	for(let i = 0; i < closedSet.length; i++) {
		closedSet[i].show(color(255, 0, 0));
		// console.log(fill(color(255, 0, 0)))
	}

	var temp = current;
	path.push(temp)
	while(temp.previous) {
		path.push(temp.previous);
		temp = temp.previous;
	}

	for(let i = 0; i < path.length; i++) {
		path[i].show(color(0, 0, 255));
	}

}

