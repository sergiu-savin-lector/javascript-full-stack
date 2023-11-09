function getUserInfo(user) {
    return new Promise( (resolve, reject) => {
        const randomDelay = Math.floor(5000 * Math.random());
        console.log(randomDelay);
        setTimeout( () => resolve('user data'), randomDelay);
    })
}

function showUserInfo(user) {
    return getUserInfo().then( info => {
        console.log('user info', info)
        return true;
    })
}

function showSpinner() {
    console.log('please wait...');
}

function timeout(delay, result) {
    return new Promise(resolve => {
        setTimeout( () => resolve(result), delay)
    })
}

Promise.race([showUserInfo(), timeout(3000)]).then( displayed => {
    if(!displayed) showSpinner();
})