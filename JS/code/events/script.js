let c=0
function display ()
{
    c++;
    document.getElementById('count').textContent = c;
}
const btn = document.getElementById("btn");
btn.addEventListener('mouseover', display)
// btn.addEventListener('click', display2);

function display2 (e)
{
    console.log(e.key)
    if (e.key == 'a')
    {
        console.log("hello world")
    }
}
document.addEventListener('keydown', display2)


const inp = document.getElementById('inp');
inp.addEventListener('input', function ()
{
    console.log("hi")
})







