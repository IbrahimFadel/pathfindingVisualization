function Square(x, y, size) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.state = 0;
	this.rect = null;
	this.col = color(255, 255, 255);

	this.show = function() {
		fill(this.col);
		this.rect = rect(this.x, this.y, this.size, this.size);
	}

	this.clicked = function() {
		if(mouseX <= this.x + this.size && mouseX >= this.x && mouseY <= this.y + this.size && mouseY >= this.y) {
			if(this.state == 0) {
				this.state = 1;
				this.col = color(0);
			} else if(this.state == 1) {
				this.col = color(255);
				this.state = 0;
			}
		}
	}

	this.setStart = function() {
		if(mouseX <= this.x + this.size && mouseX >= this.x && mouseY <= this.y + this.size && mouseY >= this.y) {
			if(this.state == 0 || this.state == 1) {
				this.col = color(0, 255, 0);
				this.state = 2;
			} else if(this.state == 2) {
				this.col = color(255);
				this.state = 0;
			}
		}
	}

	this.setEnd = function() {
		if(mouseX <= this.x + this.size && mouseX >= this.x && mouseY <= this.y + this.size && mouseY >= this.y) {
			if(this.state == 0 || this.state == 1 || this.state == 2) {
				this.col = color(255, 0, 0);
				this.state = 3;
			} else if(this.state == 3) {
				this.col = color(255);
				this.state = 0;
			}
		}
	}


	// this.update = function() {
	// 	if(this.state == 1) {
	// 		//this.rect.remove();
	// 		this.col = color(0);
	// 		console.log(this.rect)
	// 	}
	// }
}