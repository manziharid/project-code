
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

let promises = new Promise(function(resolve, reject) {
         
    let value = 'water';
    resolve(value);

} );
promises.then(function(result){
    console.log(result);
});




//let promisesError = new Promise(function(resolve, reject) {
    
  //  reject(new Error("Disaster"));

// } );