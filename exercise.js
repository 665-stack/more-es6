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
// map() array er protity upadan er jonno function ke call kore and shob function er result ke akti noton array te niye reture kore.
//for() array er protity upadan er jonno function ke call kore but kono kicu return kore na.
//filter() array er protity upadan er modde jeta jeta shorto fullfill korbe tader ke notun akta array te rekhe sheta ke return kore. filter() array return kore.
//find() array er protity upadan er modde prothome jeta shorto fullfill korbe shodu shetai return korbe. find() element return kore.
//==================================
const profile = {
    id: 333,
    name: 'Mahmodul Hasan Shahin',
    phone: '01877830473',
    address: 'Joydebpur',
    work: 'It sector'
}
const { id, name, phone, address, work } = profile;
console.log(name, work)
//=================================
const company = {
    name: 'themeXpert',
    ceo: { name: 'Mahmodul Shahin', gmail: 'mahmodulshahin665@gmail.com' },
    sector: {
        web: {
            work1: 'web deb and management',
            employee: '8',
            framework: 'react',
            tech: {
                primary: 'js',
                secondary: 'python'
            }
        },
        marketing: {
            work2: 'product marketing',
            employee2: '15',
            type: 'internet marketing'
        }
    }
}
const { primary } = company.sector.web.tech;
console.log('primary -- ', primary)
// ===============================
function nums(num1, num2, num3 = 7) {
    return num1 + num2 + num3;
}
const numsresult = nums(20, 10);
console.log('numsresult -- ', numsresult)
//================================