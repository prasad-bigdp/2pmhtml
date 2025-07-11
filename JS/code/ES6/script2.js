import obj from './script.js'
//default import
import { add, p } from './script.js'
//named import
console.log(obj)
add(4, 5);

class Fruit
{
    taste; color; shape;
    constructor(a,b,c)
    {
        this.taste = a;
        this.color = b;
        this.shape = c;
    }
    printData ()
    {
        console.log(this.taste,this.color,this.shape)
    }
}
let apple = new Fruit("sweet", "red", "round"); // create an object
let banana = new Fruit("sweet", "yellow", "cylinder")
console.log(apple)
apple.printData()
class Eatable extends Fruit
{
    isEatable;
    constructor(a, b, c, d)
    {
        super(a, b, c);
        this.isEatable = d;
    }
}
let x = new Eatable('sour',"blue","round","yes");
console.log()