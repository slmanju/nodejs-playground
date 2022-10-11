const person = {
  firstName: 'Manjula',
  lastName: 'Jayawardana',
  age: 15,
  sex: 'male'
};

// const firstName = person.firstName;
// const age = person.age;

// now
const { firstName, age, sex: gender } = person;
console.log(`${firstName}, ${age}, ${gender}`);

function printPerson({ firstName, age }) {
  console.log(`${firstName} is ${age} years old`);
}
printPerson(person);
