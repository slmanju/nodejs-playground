// Set
const names = new Set(['Jack', 'Jill', 'Jake', 'Jack', 'Sara']);
console.log(names.size);
names.add('Mike');

[...names].filter(name => name.startsWith('J'))
  .map(name => name.toUpperCase())
  .forEach(name => console.log(name));

// Map
const scores = new Map([['Sara', 12], ['Bob', 11], ['Jill', 15], ['Bruce', 14]]);
scores.set('Jake', 14);
console.log(scores.size);

for(const [name, score] of scores.entries()) {
  console.log(`${name} : ${score}`);
}

scores.forEach((score, name) => console.log(`${name} : ${score}`));
