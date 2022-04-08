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

// jodi number array er digit gulo k digun korte cai with shortcut code.


