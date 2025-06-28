let obj = {
	name: "prasad",
	age: 3443,
	run: function () {
		console.log(this.name+"running")
	},
}
console.log(obj.name, obj['name']);
obj.run();
obj.phno = 55555;
console.log(obj)
console.log(obj.address); //undefined
console.log(Object.keys(obj))
console.log(Object.values(obj))
obj.run();
//seal and freeze
// Object.seal(obj);
// obj.x = 20;
// console.log(obj)
Object.freeze(obj);
obj.name = 20;
console.log(obj)


let a = 3, b = 2;
// arithematic
console.log(a + b, a - b, a * b, a / b, a % b, a ** b) //5 1 6 1.5 1 9
// logical
console.log(a > b && a > 0, a > b || a > 10, !(a > 0)); //true true false
//relational
console.log(a > b, a < b, a == b, 2 == '2', 2 === '2', 2 != '2', 2 !== '2');
// increment and decrement
a = 3, b = 2;
console.log(++a, a++, --a, a--);//4 4 4 4
let c = (a > b) ? a : b; //ternary
console.log(c);









