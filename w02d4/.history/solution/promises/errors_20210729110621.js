const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

// throw new Error('ooooops');

returnPromise('one')
  .then((data) => {
    console.log(data);
    return returnPromise('two');
  })
  .then((data) => {
    console.log(data);
    return returnPromise('three');
  })
  .then((data) => {
    console.log(data);
    return returnPromise('four');
  })
  .then((data) => {
    console.log(data);
    return returnPromise('five');
  })
  .then((data) => {
    console.log(data);
    return returnPromise('six');
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((err) => {
    // throw err;
    console.log(err);
  });
