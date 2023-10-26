function createPerson(name,age){
    return {
        name:name,
        age:age,
        sayHello1:function(){
            console.log(this.name);
        }
    }
}

const person1 = createPerson('ABC',30);
const person3 = createPerson('ABC',30);
//person1.sayHello();

console.log(person1 instanceof createPerson);

//constructor function
function Person(name,age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(this.name)
    }
}

let person2 = new Person('abc',30);
console.log(person2 instanceof Person);

if(person2 instanceof Person){
    person2.sayHello();
}

//person1.sayHello();

console.log("person1: " + typeof(createPerson));
console.log("person2: " + typeof(Person));

class Person1{
    constructor(name,age){
        this.name = name;
        this.age  = age;
    }
    print(){
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
}

const obj = new Person1('abc',30);
obj.print();

class Student extends Person1{
    constructor(name,age,course){
        super(name,age);
        this.course = course;
    }
    print(){
        super.print();
        console.log(`course ${this.course}`);
    }
}


const student = new Student('abc',30,'JS');
student.print();

const student2 = student;

student = null;