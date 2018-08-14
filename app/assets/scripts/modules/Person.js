class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
  	this.favoriteColor = favColor;
	}
  
  greet() {
    console.log("Hi there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

// NOTE: Before ES6
// ----------------
// function Person(fullName, favColor) {
//   this.name = fullName;
//   this.favoriteColor = favColor;
//   this.greet = function() {
//     console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
//   }
// }

export default Person;

// Note: Before ES6
// module.exports = Person;