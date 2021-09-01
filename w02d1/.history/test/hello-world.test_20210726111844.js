// pull in whichever assert library you'd like to
// pull in the main functions that will be tested
const functions = require('../hello-world');
const assert = require('assert');

// write the mocha describe() and it() function calls that will implement the test(s)


it('test sayHello', ()=>{
  const returnVal = functions.monkeyFuzz('Monkey!');
  assert.equal(returnVal, 'Hello, Monkey###');
});

it('test sayGoodbye', ()=>{
  const returnVal = functions.sayGoodbye('Donkey!');
  assert.equal(returnVal, 'Goodbye, Donkey!');
});
