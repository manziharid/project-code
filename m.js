function Car() {
  this.speed = 0;

  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(function () {
      console.log(this.speed); // undefined
    }, 1000);
  };
}

let car = new Car();
car.speedUp(50);