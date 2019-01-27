var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var tom = new Cat();
var jerry = new Mouse('jerry', 'yellow');
var pun = new Dog('pun');

try {
	tom.eat(pun);
} catch(error) {
	console.log('Error while cat eating a dog');
}


console.log(tom);