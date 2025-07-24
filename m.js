function* foo() { 
    yield 1;
    yield 2;
    yield 3;
}

let f = foo();

console.log(f.next());
