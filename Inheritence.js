// akoi doroner onk gulo object make korar jonno class use kora hoy. 
// class er bitore object er property gulo access korar jonno 'this' use kora hoy. 
// ababe kono kicur jonno bar bar code repeat hocce, jeta thik na. Tai akta common class niye shetar bitor korte hove.

// common class
class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
// start a session
class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support Web Dev';
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
const amir = new Support('amir khan', 'Bangladesh', 11);
const alvi = new Support('Alvi Rahman', 'China', 9)
const shahin = new Support('Mahmodul Shahin', 'Bangladesh', 4);
console.log(amir)

//  build a routine for student
class StudentCare extends TeamMember {
    designation = 'Care Web Dev';
    builARoutine(student) {
        console.log(this.name, 'Build a routine for', student)
    }
}
const alia = new StudentCare('Alia Bhatt', 'Mumbai');
alia.builARoutine('Mahmodul Shahin');
console.log(alia)

// release app
class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'Neptune App Dev';
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.lisog(this.name, 'release app version', version)
    }
}
const rifat = new NeptuneDev('Rifat Chowdhury', 'Japan', 'Android Studio');
rifat.releaseApp('1.4.5')
console.log(rifat.name)

// oporer code gulo te je, javaScript er akta object theke arek ta object e property gulo je shared hocce sheta akta chain er moddome kah kore , ar atakei propotypical chain / inheritence bole.