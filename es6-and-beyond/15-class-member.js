class Car {
  constructor(year) {
    this.year = year;
  }

  static get ageFactor() {
    return 0.1;
  }

  static pickLatest(carA, carB) {
    return carA.year > carB ? carA : carB;
  }
}
const carA = new Car(2019);
const carB = new Car(2022);
console.log(`Age factor is ${Car.ageFactor}`);
console.log(`Latest is ${Car.pickLatest(carA, carB).year}`);
