const divide = num => num / 5;
const divideNum = divide(50);
console.log('divideNum -- ', divideNum)
//=======================
const doMath = (num1, num2) => {
    const sum = num1 + 2;
    const sum2 = num2 + 2;
    const multiply = sum * sum2;
    return multiply;
}
const doMathResult = doMath(18, 18);
console.log('doMathResult -- ', doMathResult)
//==============================
const doMultiply = (num1, num2, num3) => num1 * num2 * num3;
const doMultiplyResult = doMultiply(2, 2, 2);
console.log('doMultiplyResult -- ', doMultiplyResult)
//=============================
const doCalc = (num1, num2) => {
    const sum = num1 + 2;
    const sum2 = num2 + 2;
    const multiply = sum * sum2;
    return multiply;
}
const doCalcResult = doCalc(8, 8);
console.log('doCalcResult -- ', doCalcResult)
//=============================
const numbers = [2, 3, 5, 6, 12];
const multiply = numbers.map(x => x * 5);
console.log('multiply -- ', multiply)
//============================
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNums = numArr.filter(num => {
    return num % 2 !== 0;
})
console.log('oddNums -- ', oddNums)
//================================
const products = [
    { name: 'Lenovo HE05', price: 400 },
    { name: 'headphone', price: 300 },
    { name: 'ergonomic chair', price: 5000 },
    { name: 'gaming headphone', price: 1500 },
    { name: 'Tecno spark 6', price: 12500 },
    { name: 'HP monitor 22inch', price: 16000 },
];
const moneyLimit = products.find(product => product.price >= 5000);
console.log('moneyLimit -- ', moneyLimit)
//===============================
