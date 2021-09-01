const assert = require('assert');
const sayHello = require('./hello-world'); // this code will run.

const returnValue = sayHello('little friend.');
console.log('returnValue:', returnValue);
assert.equal(returnValue,'Hello, little friend!');
