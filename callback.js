const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback('error', ['this is the result', 1, 2, 3])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})