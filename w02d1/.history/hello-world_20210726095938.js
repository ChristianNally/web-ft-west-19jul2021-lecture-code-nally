// const localobject = require('leaflet');
const assert = require('assert');

// implement a function called sayHello that takes the name of the saluted and returns what would be said.
const sayHello = (name) => {
  let output = '';
  output = `Hello, ${name}`;
  return output;
};

const returnValue = sayHello('little friend.');

console.log('returnValue:', returnValue);







// show some test code here at first (and then factor it out later)

// make the functions exportable
