// implement a function called sayHello that takes the name of the saluted and returns what would be said.
const sayHello = (name) => {
  let output = '';
  output = `Hello, ${name}`;
  return output;
};

const returnValue = sayHello('little friend.');

console.log('returnValue:', returnValue);

assert.equal(returnValue,'Hello, little friend.');

// make the functions exportable
module.exports = {
  sayHello: sayHello
}
