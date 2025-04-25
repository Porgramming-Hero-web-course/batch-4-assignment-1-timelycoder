"use strict";
function countWordOccurrences(sentence, word) {
    const words = sentence.toLowerCase().split(" ");
    const target = word.toLowerCase();
    return words.filter((w) => w === target).length;
}
const count = countWordOccurrences("I love typescript", "typescript");
console.log(count);
