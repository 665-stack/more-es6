const fish = {
    id: 58,
    name: 'King Hilsha',
    price: 1200,
    phone: '01877830473',
    address: 'Chadpur',
    color: 'silver'
}
//suppose fish er price ami kicukhon porporei akhne shekhane use korbo. tai barbar fish.price na diye. price ta niye akta var e rekhe dite parbo;
// const phone = fish.phone;
// const address = fish.address;
// const id = fish.id;

// ager ta cilo oldschool sys. now new syst
const { phone, price, color, id } = fish;
console.log(phone, price, color, id);
//======================
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
const { work, framework } = company.web;
const { name } = company.ceo;
const { second, third } = company.web.tech;
console.log(name, work, framework);
console.log(second, third);

