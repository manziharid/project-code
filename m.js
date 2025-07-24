const counter = {
    count: 0,
    next() {
        return ++this.count;
    },
    current() {
        return this.count;
    }
};
console.log(counter);
console.log(counter.next()); // 1