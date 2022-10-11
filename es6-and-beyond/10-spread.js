const names1 = ['Tom', 'Jerry'];
const names2 = ['Butch', 'Spike', 'Tyke'];
const names3 = [ ...names1, ...names2 ];
console.log(names3); // [ 'Tom', 'Jerry', 'Butch', 'Spike', 'Tyke' ]

function greet(name, message) {
  console.log(`Greeting ${name} with ${message}`);
}

const greets = ['Manjula', 'Hello World'];
greet(...greets);

// objects
const sam = {
  name: 'Sam',
  age: 2
};
const sam1 = {...sam };
const sam2 = {
  ...sam,
  age: 3
};
const sam3 = {
  ...sam,
  age: 4,
  height: 100
};
console.log(sam, sam1, sam2, sam3,);
