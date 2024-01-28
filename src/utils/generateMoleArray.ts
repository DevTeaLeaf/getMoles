const generateMoleArray = (baseArray: string[], count: number) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(...baseArray);
  }
  return result;
};

export { generateMoleArray };
