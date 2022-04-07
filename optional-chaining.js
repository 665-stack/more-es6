// declare variable based on the name of an object property 
const myObject = {
    x: 2,
    y: 50,
    z: 600,
    a: 25,
    b: 68
}
const { x, b } = myObject;
console.log(x, b);
// destructuring array; array er jonno [] bracket deya lage, var call korar 1st er ta first value, 2nd er ta second, array er call kora borabor shogkha nibe
const array = [45, 47]
const [p, q] = array;
console.log(p, q)







//========================
//position wise milbe
// array
const friends = ['jonayed', 'akash']
const [best, faltu] = friends;
console.log(best, faltu)
//object
const { } = { sky: 'blue', soil: 'matti', color: 'red', monoy: 500 };
