const assert = require('assert');
const functionsObject = require('./hello-world'); // this code will run.

// test of sayHello

const returnValue = functionsObject.monkeyFuzz('little friend.');
console.log('returnValue:', returnValue);
assert.equal(returnValue,'Hello, little friend!');

// Test Goodbye Next... 

const returnValue2 = functionsObject.sayGoodbye('little enemy.');
console.log('returnValue:', returnValue2);
assert.equal(returnValue2,'Goodbye, little friend!');