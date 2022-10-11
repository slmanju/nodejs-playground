class Car {
  constructor(year) {
    this.year = year;
    this.miles = 0;
  }

  get distanceTraveled() {
    return this.miles;
  }

  set distanceTraveled(value) {
    if (value < this.miles) {
      throw new Error(`Sorry, can't set value to less than current distance traveled.`);
    }
    this.miles = value;
  }
}
const car = new Car(2019);
car.distanceTraveled = 10;
console.log(`distance travelled ${car.distanceTraveled}`);
