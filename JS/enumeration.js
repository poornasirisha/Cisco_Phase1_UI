const person = {
    name:'abc',
    age:30
}

for(let x in person){
    console.log(x,person[x]);
}

//Object.keys
const keys = Object.keys(person);

keys.forEach(key => console.log(key, person[key]));

const entries = Object.entries(person);
entries.forEach(([key,value]) => {
    console.log(key,value);
})

