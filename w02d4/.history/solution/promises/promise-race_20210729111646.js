const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

const randomDelay = () => Math.floor(Math.random() * 5000);

const promiseOne = returnRejectedPromise('one', randomDelay());
const promiseTwo = returnRejectedPromise('two', randomDelay());
const promiseThree = returnRejectedPromise('three', randomDelay());

const promises = [promiseOne,  promiseTwo, promiseThree];

Promise.race(promises)
  .then((data) => {
    console.log('we have a winner:',data);
  })
  .catch((err)=>{
    console.log('error:',err);
  });
