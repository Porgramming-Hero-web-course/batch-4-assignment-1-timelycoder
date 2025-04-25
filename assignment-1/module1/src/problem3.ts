{
  function countWordOccurrences(sentence: string, word: string): number {
    const words = sentence.toLowerCase().split(" ");
    const target = word.toLowerCase();
    return words.filter((w) => w === target).length;
  }

  const count = countWordOccurrences("I love typescript", "typescript");
}
