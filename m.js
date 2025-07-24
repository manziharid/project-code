function* bar() {
    yield;
}

let b = bar();
console.log(b.next()); 
