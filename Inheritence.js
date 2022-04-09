// akoi doroner onk gulo object make korar jonno class use kora hoy. 
// class er bitore object er property gulo access korar jonno 'this' use kora hoy. 
class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
class StudentCare {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

}
const amir = new Support('amir khan', 'Bangladesh');
const alvi = new Support('Alvi Rahman', 'China')
const shahin = new Support('Mahmodul Shahin', 'Bangladesh')
