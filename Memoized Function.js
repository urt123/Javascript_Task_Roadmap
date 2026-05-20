function memoize(fn) {
    let cache = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if (cache[key]) {
            console.log("From Cache");
            return cache[key];
        }
        console.log("Calculating...");
        let result = fn(...args);
        cache[key] = result;
        return result;
    };}
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
let memoizeFact = memoize(factorial);
console.log(memoizeFact(3));
console.log(memoizeFact(3));