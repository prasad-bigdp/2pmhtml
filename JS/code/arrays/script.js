let arr = [5, 4, 2, 6, 7];
console.log(arr[5]);//
console.log(arr[4]);
console.log(arr.length);
arr[100] = 25;
console.log(arr) //101
arr = [10, 20, 30, 40, 50];
arr.push(60, 70, 80);
console.log(arr)
arr.pop();
console.log(arr)
arr.unshift(20, 30, 40);
console.log(arr)
arr.shift();
console.log(arr)
arr = [10, 20, 30, 40, 50];
arr.splice(2, 1,555,6666,7777)
console.log(arr)
// splice(starting_index, deleteCount, inserting elements)
let friends = ["sheldon", "Rachel", "Ross", "monica", "chandler", "penny"];
// remove sheldon and add pheobe
// remove penny and add joey
// add "emma" between sheldon and rachel
friends.shift(); friends.unshift("phoebe");
friends.pop(); friends.push("joey")
friends.splice(2, 0, "emma")
console.log(friends)

// forEach 
arr = [10, 20, 30, 40, 50];
arr.forEach(function (ele,index)
{
   console.log(ele*ele); 
})

let x = arr.forEach(function (ele, ind)
{
    return ele * ele;
})// undeined
x= arr.map(function (ele, ind)
{
    return ele * ele;
})// 
console.log(x)
arr= [1,5,15,20,4]
let y = arr.map(function (ele)
{
    return ele %2 ==0;
})
 y = arr.filter(function (ele) {
	return ele % 2 == 0
})
// use array foreach method and print each elements first letter
// use array map method and return each elements first letter
// use array filter method and return elements only starts with 'J'
arr = ["prasad", "vani", "John"]
arr.forEach(function (ele,ind)
{
   console.log(ele.charAt(0))   
})
x = arr.map((ele, ind) => ele.charAt(0))
x = arr.filter((ele, ind) => ele.charAt(0) == 'J')
arr = [10, 20, 30, 40, 50];
console.log(arr.reverse())
console.log(arr.find((ele, ind) => ele > 30));
console.log(arr.includes(30));//true
console.log(arr.some((ele, ind) => ele > 30))
arr = [50, 20, 10,1,2, 30, 40];
console.log(arr.sort());//[1,10,2,20,30,40,50]
console.log(arr.sort(function(a,b){ return b-a}))











