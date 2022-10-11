function max1() {
  console.log(arguments instanceof Array);
  let large = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (large < arguments[i]) {
      large = arguments[i];
    }
  }
  return large;
}

function max2(...values) {
  console.log(values instanceof Array);
  return values.reduce((large, value) => large > value ? large : value, values[0]);
}

console.log(max1(1, 2, 5, 6, 2, 7, 3, 9));
