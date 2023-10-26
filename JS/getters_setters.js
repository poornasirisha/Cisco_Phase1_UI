const person = {
    _firtsName:'Sudha',
    _lastName: 'Agarwal',
    //getter method
    get fullName(){
        //return this.firtsName + " " + this.lastName;
        return `${this.firtsName} ${this.lastName}`;
    },
    get firtsName(){
        return `Hello ${this._firtsName}`;
    },

    set firtsName(firstName){
        console.log("setter")
        this._firtsName = firstName;

    }
}
console.log(person.firtsName);//will call the getter function
person.firtsName = 'Sudha1'; //will call the setter function
console.log(person.firtsName);