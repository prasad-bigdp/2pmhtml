let a = 5;
console.log(a);
console.log(typeof a) //number
a = "prasad";
console.log(typeof a); //string
a = true;
console.log(typeof a); //boolean
a = undefined;
console.log(typeof a) //undefined
a = null;
console.log(typeof a) //null

console.log(5 + '4')  // '54'
console.log(5 - '4')  //1
console.log(5 + true)  //5+1=6
console.log(5 - false) //5-0
console.log('5' + true) //5true
console.log(5 + Number('4')) //9
console.log(5 * 'raj'); //NaN -- Not a number



let x = 25.6389;
console.log(x, typeof x) // 25.6389 number
console.log(x.toFixed(2)) // roundfigure upto n digits after decimal -- 25.64
console.log(x.toPrecision(2)) //roundfigure upto n digits totally -- 26
x=26
console.log(x.toString(2)) //11010
// numbers can also use Math Methods
console.log(Math.sqrt(16)) //4
console.log(Math.cbrt(27)) //3
console.log(Math.max(5,4,1,3,9)) //9
console.log(Math.min(5, 4, 1, 3, 9)) //1
console.log(Math.abs(-12)) //12
console.log(Math.pow(2, 3)) //8
console.log(Math.ceil(-1.4))  // returns nearest greater integer --  -1
console.log(Math.floor(2.85)) //returns nearest smaller integer  --  2
console.log(Math.round(5.53)) // returns nearest integer --6
console.log(Math.random()) // return random value between 0 and 1

// create 4 digit otp using math random
console.log(Math.round(Math.random() * 10000))

// generate random value ludo dice(1-6)
console.log(Math.ceil(Math.random() * 6))






 
















 










