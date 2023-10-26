//statement1

//statement2

//statement 3

//statement4 - fetching the data from server

//statement 5 - printing the data from server

function one(callback1){
    setTimeout(function(){
        console.log("one");
        callback1();
    },1000);   
}
function two(){
    console.log("two");
}
//one(two);

function getData(){
    setTimeout(function(){
        let data = {message:'from server'}
        return data;
    },1000);
}
function printData(data){
    console.log(data);
}
let data = getData();
printData(data);

function getData1(callback){
    setTimeout(function(){
        let data = {message:'from server'}
       callback(data);
    },0);
}
//getData1(printData);
//second way
getData1(function printData(data){
    //console.log(data);
})
//or
getData1(function (data){
    //console.log(data);
});
//with arrow function
getData1(data => console.log(data));

console.log("after setTimeout");