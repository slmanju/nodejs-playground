const Car = function(year) {
  this.year = year;

  this.turn = function(direction) {
    console.log('...turning ' + direction + ' ...');
  }
}
const car1 = new Car(2018);
console.log(car1.turn('left'));

// now
// class Car {
//   constructor(year) {
//     this.year = year;
//   }

//   turn(direction) {
//     console.log(`...turning ${direction}...`);
//   }
// }
// const car2 = new Car(2018);
// console.log(car2.turn('left'));
