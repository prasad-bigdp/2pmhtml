let i = 1;
while (i <= 10)
{
    console.log(i);
    i++;
}
/* print 10 to 1 using do while */
let q = 10;
do
{
    console.log(q);
    q--;
} while (q >= 1);

let arr = [5, 7, 9, 6, 1]
/* print array values using for */
for (let j = 0; j < arr.length; j++)
{
    console.log(arr[j])
}

/* for..of */
for (let j of arr)
{
    console.log(j)
}


let sname = "PRASAD"
for (let i = 0; i < sname.length; i++)
{
    console.log(sname.charAt(i))
}

for (let k of sname)
{
    console.log(k)
}

for (let k in sname)
{
    console.log(k)
}


// patterns
let str=''
for (let r = 1; r <= 4; r++)
{
    str=''
    for (let c = 1; c <= r; c++)
    {
        str = str + c+" ";
    }
   console.log(str)
}














