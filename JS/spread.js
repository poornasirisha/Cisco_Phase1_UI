const arr1= [1,2,3];
const arr2 = [4,5,6];

const concatArr = arr1.concat(arr2);
const arr3 = [...arr1,...arr2];

const copy = arr1;
console.log("Copy " + copy);
const Vehicle = {
   type:"car"
}

const car = {
    brand:'Maruti'
}

const carVehicle1 = {...Vehicle, ...car};

console.log(carVehicle1.type + " " + carVehicle1.brand);

console.log(Math.min(...arr1));


//use spread operator to create a shallow copy of an object
const originalObject = {name:'ABC', age:30};

const copiedObj = {...originalObject};
//console.log(copiedObj);
//console.log(originalObject);

copiedObj.age = 31;
//console.log(copiedObj);
//console.log(originalObject);

const modifiedObj = {...originalObject, age:31,name:'ABC1'};
console.log(modifiedObj);
console.log(originalObject);



