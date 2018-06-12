class Person{
    constructor(name){
        this.name = name;
    }
    talk(text){
        return `${this.name} says: ${text}`;
    }
}

//extending prebuilt class called component in es6
//pass constructor from Person to SuperPerson
class SuperPerson extends Person {
    constructor(name, superpower) {
        //super calls constructor above class parameters
        super(name);
        this.superpower = superpower;
    }
    saySuperpower() {
        return this.talk(`I can be ${this.superpower}`);
    }
}

export default SuperPerson;