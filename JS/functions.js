var global = "global";

console.log(x4);//undefined
var x4 = 10;

//console.log(b);
let b = 10;

sum(2,3);
sum(2);

function sum(num1, num2=0){  
    let res = num1 + num2;

    //let res = num1 - num2;
    
    if(res > 4){
        let res1 = 0;
    }   
    res1 = res;
    console.log("Res: " + res1);
   
    return res;
}

//let x = sum(2,3);
//console.log(x);

console.log(global);//global
//console.log(res);//error


