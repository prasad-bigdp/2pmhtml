// const ele = document.getElementById('head');
// console.log(ele.innerText)
// const input = document.getElementById('inp')
// function fun ()
// {
//     ele.innerHTML = "<u>Bye</u>"
//     ele.style.color = "red"
//     document.body.classList.toggle('dark');
//     let str = input.value
// }

const ele = document.getElementById('inp');
const output= document.getElementById('output')
function reverse ()
{
    let str = ele.value;
    output.textContent = str.split("").reverse().join("")
    ele.value=''
}