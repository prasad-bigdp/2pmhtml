// function display()
// {
//     console.log("hi");
// }
// display();
// //setTimeout
// setTimeout(display,3000)

// setTimeout(function ()
// {
//     console.log("hello")
// }, 0)
// for (let i = 0; i < 10000; i++)
// {
//     console.log("hi")
// }
// let c = 0;

// let x = setInterval(function ()
// {
//     c++;
//     document.getElementById('count').textContent = c
//     if (c == 10000)
//     {
//         clearInterval(x);
//     }
// },1)


// Do a coundown which starts after button click from 10 to 1 for every 1s. After that print "Happy Birthday"

let c = 10;
// document.getElementById('btn').addEventListener('click', function ()
// {
//     let x = setInterval(() =>
//     {
//         c--;
//         document.getElementById('count').textContent = c;
//         if (c == 0)
//         {
//             document.getElementById('count').textContent = "Happy birthday";
//          clearInterval(x)
//         }
//    },1000)
// })
arr = [5, 3];
arr.map()

setInterval(() =>
{
    let dt = new Date();
    console.log(dt.toLocaleTimeString())
    document.getElementById("count").textContent = dt.toLocaleTimeString()
},1000)