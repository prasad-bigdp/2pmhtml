const mainEle = document.getElementById('main');
//1. create a paragraph add to main
const para = document.createElement('p');
//<p></p>
para.textContent = "Hello world";
//<p>Hello world</p>
mainEle.appendChild(para);
//2. create three h2 tags and add to main div, each h2 will have values like "apple","mango","orange" 
const fruits = ["apple", "mango", "orange"]
// for (let i = 0; i < fruits.length; i++)
// {
//     const first = document.createElement("h2")
// 		first.textContent = fruits[i]
// 		mainEle.appendChild(first)
// }

// for (let i of fruits)
// {
// 	    const first = document.createElement("h2")
// 			first.textContent = i
// 			mainEle.appendChild(first)
// }

fruits.forEach(function (ele,ind)
{
	    const first = document.createElement("h2")
	first.textContent = ele;
	first.id = `head${ind}`;
			mainEle.appendChild(first)
})
//  










