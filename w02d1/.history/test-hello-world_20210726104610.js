const assert = require('assert');
const functionsObject = require('./hello-world'); // this code will run.

const returnValue = functionsObject.monkeyFuzz('little friend.');
console.log('returnValue:', returnValue);
assert.equal(returnValue,'Hello, little friend!');

// Test Goodbye Next... 
