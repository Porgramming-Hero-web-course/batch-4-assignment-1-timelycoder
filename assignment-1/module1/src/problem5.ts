{
  const getProperty = <O, K extends keyof O>(obj: O, key: K): O[K] => {
    return obj[key];
  };
}
