const assert = require('assert');
const functions = require('./hello-world'); // this code will run.

const returnValue = functions.monkeyFuzz('little friend.');
console.log('returnValue:', returnValue);
assert.equal(returnValue,'Hello, little friend!');
