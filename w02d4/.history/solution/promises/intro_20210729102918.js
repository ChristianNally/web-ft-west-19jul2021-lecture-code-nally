const promiseGeneratorFunctions = require('./promise-generator');

const returnPromise = promiseGeneratorFunctions.returnPromise;

const promise = returnPromise('first promise', 4444);
console.log('promise:',promise);


// Not the best way to do this

// setTimeout(()=>{
//   console.log('5 seconds later:',promise);
// },5000);

//
// The RIGHT way to do this
//

promise
  .then((data) => {
    console.log('resolved!!:',data);
    return 'another thing';
  });
//   .then((data) => {
//     console.log("monkeyfuzz",data);
//   });

  