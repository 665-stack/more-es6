// 1. let and const
// not changing var
const hubby = 'Mahmodul Shahin';
// changing var
let phone = 'tecno spark 6';
phone = 'iphone 13 pro max';
// 2. default parameter and 
// 5. spread oparetor or three dots (...)
function maxNumber(array = []) {
    const max = Math.max(...array)
    return max;
}
const biggest = maxNumber();
console.log(biggest);
// 3. template string
const myNotes = `I am ${hubby}. My future phone name is ${phone}. My present phone age now 1.5 year.`;
console.log(myNotes);
// 4. arrow function
const square = x => x * x;
console.log(square(9))