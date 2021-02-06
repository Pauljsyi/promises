// Promise API
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //comment out resolve() to test error
        // resolve([1,2,3])
        reject('something went wrong')
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