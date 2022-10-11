const countries = [ 'Sri Lanka', 'India', 'Pakistan' ];

// const sriLanka = countries[0];
// const india = countries[1];
// const pakistan = countries[2];

// now
const [ sriLanka, india, pakistan ] = countries;

function printName([ firstName, lastName ]) {
  console.log(`${firstName} ${lastName}`);
}
printName([ 'Dasun', 'Shanaka' ]);
