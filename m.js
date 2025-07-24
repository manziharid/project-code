let odd  = [1, 3],
    even = [2, 4];
let all = odd.concat(even);
console.log(all); // [1, 3, 2, 4]
let extras = all.concat(5);
console.log(extras); // [1, 3, 2, 4, 5]