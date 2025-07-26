
/*function printme() {
   
main(); console.log('hy');
}
function test() {
    console.log('hebdn');
    
}
 setTimeout(printme, 2000);
 test();*/

 /*function f1() {
    console.log('f1');
    
 }
 function f2() {
    console.log('f2');
    
 }
function main() {
    console.log('main');
    setTimeout(f1, 0);
    f2();
    
}

/*const promises= new Promise((resolve, reject) {
     resolve('I am resolve problems!')   
}

promises.then(result=> console.log(result)) ; 

function f1() {
    console.log('f1');
    
 }
 function f2() {
    console.log('f2');
    
 }
function main() {
    console.log('main');
    setTimeout(f1, 0);
    new Promise(function(resolve, reject) {
     resolve('I am resolve problems!')   
}).then(resolve=> console.log(resolve));


    f2();
    
}
main();*/
/*const grandparent= () => {
     promises.then(function(result){
    console.log(`cooking with ${result}`);
})
};

let promises = new Promise(function(resolve, reject) {
         
    let value = 'water';
    resolve(value);

} );
grandparent();*/




/*let promisesError = new Promise(function(resolve, reject) {
    setTimeout(function() {
        //reject(new Error("jack fell down and ........"));
        resolve('water');
    }, 3000);
    

} );
const grandparentcooking= () => {
    promisesError
    .then(function(result) {
        console.log(`cooking starts with ${result}`);
        
    })
     
    
    .catch(function(Error){
        console.log(`OMG ${Error.message}`);
        
    })
};
grandparentcooking();*/


//function foo(num) {
  //  console.log(`foo ${num}`);
    
    
//};
//foo(2);

function foo(bar) {
    bar();
    
};
foo(function(){
    console.log('dhcn');
    
});