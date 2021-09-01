const assert = require('assert');
const functionsObject = require('./hello-world'); // this code will run.

const returnValue = functionsObject.sayHello('little friend.');
console.log('returnValue:', returnValue);
assert.equal(returnValue,'Hello, little friend!');
