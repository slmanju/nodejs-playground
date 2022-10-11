const user = {
  name: 'Manjula',
  age: 30
};

for (const u in user) {
  console.log(u);
}

const names = ['Sara', 'Jake', 'Pete', 'Mark', 'Jill'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (const name of names) {
  console.log(name);
}

for (const name of names.entries()) {
  console.log(name);
}

for (const [i, name] of names.entries()) {
  console.log(`${i}, ${name}`);
}
