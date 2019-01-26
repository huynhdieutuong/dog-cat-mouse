function Mouse(name, color) {
	this.name = name;
	this.color = color;
}

var mickey = new Mouse('mickey', 'black');
console.log(mickey);

module.exports = Mouse;