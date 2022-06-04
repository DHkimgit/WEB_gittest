let person = {
	name : 'lee',
	gender : 'male',
	sayHello : function () {
		console.log('Hi my name is' + this.name);
	}
};

console.log(typeof person);
console.log(person);

person.sayHello();