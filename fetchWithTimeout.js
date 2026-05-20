function fetchWithTimeout(url, ms) {

    const fetchPromise = fetch(url);

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject("Request Timed Out");
        }, ms);
    });

    return Promise.race([fetchPromise, timeoutPromise]);
}

fetchWithTimeout('https://api.github.com/users/github', 200)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));