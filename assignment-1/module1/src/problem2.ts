const removeDuplicates = (numbers: number[]): number[] => {
  const originalValues = numbers.filter(
    (item, index) => numbers.indexOf(item) === index
  );
  return originalValues;
};
