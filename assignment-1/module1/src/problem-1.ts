{
  function sumArray(numbers: number[]): number {
    return numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }

  const result = sumArray([1, 2, 3, 4]);
}
