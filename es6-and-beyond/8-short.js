// before
const createPerson = function (name, age) {
  return {
    name: name,
    age: age,
    toString: function () {
      return this.name + ' ' + this.age;
    }
  }
}

// now
const createPerson2 = function (name, age) {
  return {
    name,
    age,
    toString() {
      return `${this.name} ${this.age}`;
    }
  }
}

const person = createPerson2('Jon', 30);
console.log(person.toString());
