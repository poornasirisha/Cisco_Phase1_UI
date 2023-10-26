//object creation
//1.By object literal

emp = {
    emp_id:1,
    name:'abc',
    dept:'IT'
}

//2. By creating instance of Object
var emp2 = new Object();
emp2.id=2;

//3. By using Object Constructor(Constructor Functions)
function Emp(id,name,dept){   
    this.id = id;
    this.name = name;
    this.dept = dept;
}

//object creation
var emp3 = new Emp(3,'xyz','admin');

console.log(emp3.id);

//arrays
let arr = [1,2,3,4,5];
console.log(arr.length);

arr.pop();
arr.push(6);

arr.shift();
arr.unshift(0);
console.log(arr);

//sort
arr.sort();
arr.reverse();
//console.log(arr);

//array Iterations
for(var x=0;x<arr.length;x++){
    //console.log(arr[x]);
}

for(let x in arr){
    //console.log(x);
}

let arrOfObjects = [{id:1,name:'abc'},{id:2,name:'xyz'}];
//There is one loop called as for of

for(let x in arrOfObjects){
    console.log(x.id + " , " + x.name);
}

for(let x of arrOfObjects){
    console.log(x.id + " , " + x.name);
}



