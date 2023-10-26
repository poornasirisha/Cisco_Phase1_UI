const person={
    firstName:'Sudha',
    lastName:'Agarwal',
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
}
const person2 = {
    firstName:'Sudha1',
    lastName:'Agarwal1'        
}

let fullName = person.fullName.bind(person2);
console.log(fullName());