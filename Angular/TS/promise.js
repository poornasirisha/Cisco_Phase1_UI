function myAsyncFunc(){
return new Promise(function(resolve, reject){
    //here we make an HTTP request /asynchronous code    
  
    let result = false;
    if(result){
        resolve();  
    }
    else{
        reject();
    }       
} );
}

myAsyncFunc().then(function(){
    console.log("promise resolved")
}).catch(function(){
    console.log("promise rejected")
});