'use strict'
//Creates a list of letters.
const letters = [];
//Letters to ne randomly created.
for (let i = 0 ; i < 10; i++){
    let number =  1 + Math.floor(Math.random() * 5);
    console.log(number);
    switch (number) {
        case 1 : letters.push("a");
        case 2 : letters.push("b");
        case 3 : letters.push("c");
        case 4 : letters.push("e");
        default : letters.push("f");
    }
}
//Sorts the letters.
let lastLetter = letters[letters.length -1];
for (let i = 0; i  < letters.length; i++){
    let currentLetter = letters.shift();
    let i = currentLetter.localeCompare(lastLetter);   
    if (i == -1) {
        letters.push(currentLetter);
    }
    if (i == 1 || i == 0){
        letters.unshift(currentLetter);
    }
}
//Creates the letters extracting.
const [
  a,
  b,
  c,
  e,
  f
] = letters;

console.log(a);