const originalObj = {name:{firstName:'abc',lastName:'xyz'}, age:30};

const clonedObj = JSON.parse(JSON.stringify(originalObj)); //deep copy

console.log(clonedObj);

const clonedObj1 = {...originalObj};//shallow copy

console.log(clonedObj1);