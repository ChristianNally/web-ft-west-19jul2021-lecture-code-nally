const user = {
  name: 'Alice',
  age: 40,
  snacks: ['pretzels']
};

// const copy = user;

// spread operator
const copy = {
  snacks: [
    'Doritos',
    ...user.snacks
  ],
  ...user,
  // name: 'Bob',
};

// copy.name = 'Bob';
// copy.snacks.push('Doritos');

console.log('user:',user);
console.log('copy:',copy);
