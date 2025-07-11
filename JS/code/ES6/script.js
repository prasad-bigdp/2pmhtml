//rest
function sum (a,x,y, ...b)
{
    console.log(a,b)
}
sum(4, 5, 6, 7, 8, 9);

let [a, c, x, ...b] = ["raj", "shekhar", "john", 1, 2, 3]
//spread operator
let arr = [4, 5, 6];
let p = [2, ...[4, 5, 6], 9]; //[2,4,5,6,9]

a = [5, 4, 6];
let [q, r, s] = a;
let obj={
    name: "prasad",
    age:55
}
let { age } = obj; //let age =obj.age
console.log(age);
function add (a, b)
{
    console.log(a+b)
}
export {add,sum,p} // named export

export default obj
 //default export


