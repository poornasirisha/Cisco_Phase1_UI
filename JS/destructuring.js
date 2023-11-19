const person = {name:'ABC', age:30, city:'New York'};

//older way
const name1 = person.name;

//destructuring
const {name, age,city} = person;

console.log(age);