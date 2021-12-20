const getRandomIndex = (arrLength: number): number => {
  const min = 0;
  const max = Math.floor(arrLength - 11);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export { getRandomIndex };
