"use strict";
class Person {
    constructor(ssn, name) {
        this._ssn = ssn;
        this.name = name;
    }
    set ssn(ssn) {
        this._ssn = ssn;
    }
    get ssn() {
        return this._ssn;
    }
}
let person = new Person(123, "abc");
console.log(person.ssn);
