// let x = 20;
// /* WAC to perform different operations as calculator */
// console.log("choose any one, 1. addition, 2. subtraction, 3. division, 4.multiplication ")
// let a = 20, b = 10;
// let ch = 5;
// switch (ch)
// {
//     case 1: console.log(a + b); break;
//     case 2: console.log(a - b); break;
//     case 3: console.log(a / b); break;
//     case 4: console.log(a + b); break;
//     default: console.log("enter valid input")
// }

// /* input: " You are Good", output: "YAG" */

// let input = "You are Good"
// let output = ""
// input = input.split(" ")
// for (let i of input) {
// 	output = output+ i.charAt(0).toUpperCase()
// }
// console.log(output) //YAG

// //Input: "PRASAD" ==> "DASARP"

// input = "PRASAD"
// let rev = '';
// for (let i = input.length - 1; i >= 0; i--)
// {
//     rev = rev + input.charAt(i);
// }

// //Input:"This is input" , "sihT si tupni"


// //4 3 2 1
// //4 3 2
// //4 3
// //4
// for (let r = 1; r <=4 ; r++)
// {
//     let str = ''
//     for (let j = 4; j >= r; j--)
//     {
//         str+=j+" "
//     }
//     console.log(str)
// }

// //       1
// //     1 2 1
// //    1 3 3 1







// // 1 2 3 4




// functions
//simple function
function display ()
{
    console.log("hello world")
}
display()   // function call

// function can also accept parameters
function sum (a, b)
{
    console.log(a+b)
}
console.log(sum);
let sum5 = function(a, b)
{
    console.log(a + b)
}
sum5(5,3)









// function that accept length and breadth and print area of rectangle
function area(l, b) {
	console.log(`Area of rectangle is :${l * b}`)
}
area(10, 20)

const area2 = function (l, b)
{
    console.log(`Area of rectangle is :${l * b}`) 
}

const area3 = (l, b) => console.log(`Area of rectangle is :${l * b}`)

// functions can have default value when parameter is not passed
 
function sum2 (a, b = 6)
{
    console.log(a+b)
}
sum2(5, 10)
sum2(5)

// functions can even return the values

function sum3(a, b = 6) {
	return a + b
}
let res = sum3(5, 10)
console.log(res)

// WAf to return total characters except spaces in a given string
//Input: "JS is easy"
function totalCharWithoutSpace (str)
{
    let len = str.length;
    let spaces = str.split(" ").length - 1
    return len-spaces
}
 res= totalCharWithoutSpace("JS is easy")
console.log(res)
    
// WAF to return the total number of a's and b's
// Input:"BANANA" , Output: [3 , 1]
function countAsAndBs (str)
{
    str = str.toLowerCase();
	return [str.split("a").length - 1, str.split("b").length - 1]
}

console.log(countAsAndBs("Banana"))

// In Js, functions are treated as a variable
function display ()
{
    console.log("simple display")
}
console.log(display);
display()
// functions also be written as
let display1 = function ()   // function expression
{
    console.log("simple display")
}






//WAF to check whether one string is anagram of another string or not
// Input: "CAT", "TAC"  , "Prasad", "swtuuu"





