// implement a function called sayHello that takes the name of the saluted and returns what would be said.
const sayHello = (name) => {
  let output = '';
  output = `Hello, ${name}`;
  return output;
};

const sayGoodbye = (name) => {
  let output = '';
  output = `Goodbye, ${name}`;
  return output;
};

// console.log(sayHello('Production Development Environment!'));

// make the functions exportable
module.exports = {
  monkeyFuzz: sayHello,
}
