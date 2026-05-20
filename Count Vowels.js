function countVowels(str){
    let match = str.match(/[aeiou]/gi);
return match ? match.length : 0;
}
console.log(countVowels("javascript"));