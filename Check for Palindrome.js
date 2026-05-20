function isPalindrome(str) {

    let clean = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    let text = clean.split("").reverse().join("");
    return clean === text;
}
console.log(isPalindrome("racecar"));


