var $ = require('jquery');
import Person from './modules/Person';

// NOTE: Below line prior to ES6
// var Person = require('./modules/Person');

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes $0 in taxes.");
	}
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "green");
jane.greet();
jane.payTaxes();

$("h1").remove();
