// Promise API
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //comment out resolve() to test error
        resolve([1,2,3])
        // reject('something went wrong')
    }, 2000)
})
//doWorkPromise is an object with methods 
    // we will use .then() method to print out success message
doWorkPromise.then((result) => {
    
    console.log('success', result)

    // chain on the .catch() method allows us to register a function to run when reject is called above
}).catch((error) => {

    console.log('error', error)

})

//in a normal callback is error prone due to having a single function taking in both error & success arguments at the same time.

// the benefit of a promise is that each error and success parameters is assigned to a specific function and are attached directly to the function before, which is called chaining.