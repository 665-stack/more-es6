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
//akhane jodi myObject er bitore p and a na pay taile ? mark diye handle korte hobe. mane man paile bitore jabe, ar na paile jabe na;
console.log('myObject.p', myObject?.p?.q)

// destructuring array; array er jonno [] bracket deya lage, var call korar 1st er ta first value, 2nd er ta second, array er call kora borabor shogkha nibe
const array = [45, 47, 92, 23]
const [p, q] = array;
console.log(p, q)

//========================
//position wise milbe
// array
const friends = ['jonayed', 'akash']
const [best, faltu] = friends;
console.log(best, faltu)
//object
const { sky, color, money } = { sky: 'blue', soil: 'black', color: 'red', money: 500 };
console.log(sky, color, money)

// chaining
const company = {
    name: 'GP',
    ceo: { id: 1, name: "ajmol", favFood: 'burger' },
    web: {
        work: 'website development', emloyee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'JS'
        }
    }
}
console.log(company.web.tech.third)
//error console handling with optional or ? mark
console.log(company?.backend?.tech.third)
