function titleCase(str) {

    let text = str.split(" ");

    for (let i = 0; i < text.length; i++) {
        text[i] = text[i][0].toUpperCase() + text[i].slice(1).toLowerCase();
    }

    return text.join(" ");
}

console.log(titleCase("i love coding"));