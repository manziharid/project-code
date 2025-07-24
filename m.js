function show() {
  return (x) => x + arguments[1];
}

let display = show(10, 20);
let result = display(5);
console.log(result); // 15