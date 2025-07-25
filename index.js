
/*function printme() {
    console.log('hy');
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
main();*/

const promises= new Promise((resolve, reject) {
     resolve('I am resolve problems!')   
}

promises.then(result=> console.log(result)) ;