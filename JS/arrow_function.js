//without arrow
const addTwoNum = function(num1, num2){
    return num1 + num2;
}

//arrow function
const addTwoNum1 = (num1, num2) => num1 + num2;

//console.log(addTwoNum(3,4));

const sqr = num =>  num * num;

const print = ()=> "Hello World";

//console.log(sqr(2));
//console.log(print());


const person = {
    name:'ABC',
    test(){
        setTimeout(function(){
            console.log(this.name)
        }.bind(this),1000);       
    }
}

person.test();


const person1 = {
    name:'ABC',
    test(){
        setTimeout(() =>
            console.log(this.name)
        ,1000);       
    }
}

