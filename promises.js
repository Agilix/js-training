
// callback pattern
doSomething(function(err, resp){
    if (err) throw err;
});




// Promise pattern
const Promise = require('bluebird');
const pr = doSomethingPromise()
    .then(doSomethingPromise)
    .then(doSomethingPromise)
    .then(() => {
        console.log('We do promise 3 times');
    })
    .catch(err => {
        console.log('ERROR !', err.message)
    });





function doSomethingPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1500);
    })
}


function doSomething(cb){
    cb(null, {'the':'response'})
}