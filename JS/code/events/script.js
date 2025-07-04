// let c=0
// function display ()
// {
//     c++;
//     document.getElementById('count').textContent = c;
// }
// const btn = document.getElementById("btn");
// btn.addEventListener('mouseover', display)
// // btn.addEventListener('click', display2);

// function display2 (e)
// {
//     console.log(e.key)
//     if (e.key == 'a')
//     {
//         console.log("hello world")
//     }
// }
// document.addEventListener('keydown', display2)


// const inp = document.getElementById('inp');
// inp.addEventListener('input', function ()
// {
//     console.log("hi")
// })






const p = document.getElementById('count')
const button = document.getElementById("btn")
let c = 0;
function incr ()
{
    // c++;
    const left = Math.round(Math.random() * 100)
    const top = Math.round(Math.random() * 100)
    button.style.position = "relative";
    button.style.left = `${left}%`;
    button.style.top = `${top}%`;
    // p.textContent = c;
    // button.removeEventListener('click',incr)
}
button.addEventListener('mouseover', incr)


// document.addEventListener('keydown', function (e)
// {
//     console.log(e.key)
//     if (e.key == 'a')
//     {
//         c++
// 				p.textContent = c
//     }
//     else if (e.key == 'm')
//     {
//         const left = Math.round(Math.random() * 100)
// 				const top = Math.round(Math.random() * 100)
// 				button.style.position = "relative"
// 				button.style.left = `${left}%`
// 				button.style.top = `${top}%`
//     }
  
// })


document.getElementById('inp').addEventListener('change', function (e)
{
    console.log(e.target.value);
    document.getElementById('typeText').textContent=e.target.value
})

// document.addEventListener('', function (e)
// {
//     console.log(e)
// })

document.getElementById('gp').addEventListener('click', function ()
{
    console.log("gp is called");
},true)
document.getElementById("p").addEventListener("click", function () {
	console.log("p is called")
},true)
document.getElementById("c").addEventListener("click", function () {
	console.log("c is called")
},true)
document.getElementById("b").addEventListener("click", function () {
	console.log("button called")
},true)
