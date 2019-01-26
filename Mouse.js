function Mouse(name, color) {
	this.name = name;
	this.color = color;
	this.dead = false;
}

Mouse.prototype.die = function() {
	this.dead = true;
}

var mickey = new Mouse('mickey', 'black');
console.log(mickey);

module.exports = Mouse;