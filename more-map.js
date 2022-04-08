// map() array er protity upadan er jonno function ke call and shob function result ke akti notun array te niye return kore.

// forEach() akti array er protity upadaner jonno akti function call kore. Kinto kono kicu return kore na.

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
// jodi friends array er per element er length jaite cai
const fLengths = friends.map(friend => friend.length);
console.log('fLengths -- ', fLengths)
// ----- another example ---------
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 40, color: 'gray' },
    { name: 'sound box', price: 1000, color: 'white' }
];
const productNames = products.map(product => product.name)
const productPrices = products.map(product => product.price)
console.log('productNames -- ', productNames);
console.log('productPrices', productPrices)
// If I wanna directly console
products.map(product => console.log(product.color))

// forEach
products.forEach(product => console.log(product.price))



