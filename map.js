const numbers = [4, 6, 8, 10];
// jodi numbers array er digit gulo k digun korte cai with for loop
const output = [];
for (const number of numbers) {
    const result = number * 2;
    output.push(result)
}
console.log('output -- ', output)
// jodi numbers array er digit gulo k digun korte cai with normal fucntion
function doubleOld(number) {
    return number * 2;
}
// jodi numbers array er digit gulo k digun korte cai with array fucntion and for loop
const doubleIt = number => number * 2;
const doubleItResult = []
for (const number of numbers) {
    const result2 = doubleIt(number);
    doubleItResult.push(result2);
}
console.log('doubleItResult -- ', doubleItResult)

// jodi number array er digit gulo k digun korte cai with map and call array function.
//how the map works
// 1. loop through each element
// 2. result for each element will be stored in an array

const output2 = numbers.map(doubleIt);
console.log('output2 -- ', output2)
// and if we don't call array function;
const output3 = numbers.map(number => number * 2);
console.log('output3 -- ', output3)
// little shortcut then before
const output4 = numbers.map(x => x * 2);
console.log('output4 -- ', output4)


// another example for using map
const squares = numbers.map(x => x * x);
console.log('squares -- ', squares)

