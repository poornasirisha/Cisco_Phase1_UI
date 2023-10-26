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



