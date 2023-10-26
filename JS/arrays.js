const numbers = [1,2,3,4,5,8];

const res = numbers.find(number => number%2 ===0);


const arrayOfObj = [{id:1,name:'abc'},{id:2,name:'xyz'}];
toFind = 'abc1';
const res1 = arrayOfObj.find((person,index) => person.name ===toFind);
console.log(res1);

const removedElements = numbers.splice(2,2);
console.log(removedElements);

numbers.splice(1,0,9);
console.log(numbers);

//numbers.forEach(number=>console.log(number));

const double = numbers.map(number=>number*2);
console.log(double);

const evenNumber = numbers.filter(number => number%2===0);
console.log(evenNumber);

const sum = numbers.reduce((accumulator,number)=>accumulator + number);
console.log(sum);
