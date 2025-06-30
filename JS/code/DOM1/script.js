console.log(document)
// const x = document.getElementsByTagName('h2');
// console.log(x[0])

// const y = document.getElementsByClassName('head');
// console.log(y[0])

// const z = document.getElementById("myvalue");
// console.log(z)

// const p = document.querySelector('h2');
// console.log(p)

// const q = document.querySelectorAll("h2")
// console.log(q[0])

function change ()
{
//    const ele = document.getElementById('myvalue');
// console.log(ele.textContent);
//     ele.textContent = "bye world";
//     const btn = document.getElementById('btn');
    //     btn.textContent="clicked"
    // const image = document.getElementById('img');
    // image.src="./bulb-on.png"
}

function incr ()
{
    const c = document.getElementById('count')
    let x = c.textContent;
    x++;
    let rnum = Math.round(Math.random() * 255);
    c.textContent = x;
    console.log(`rgb(${rnum},${rnum},${rnum})`)
    document.body.style.background=`rgb(${rnum},${rnum},${rnum})`
}