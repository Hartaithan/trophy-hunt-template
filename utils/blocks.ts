export const chunkBlocks = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  let index = 0;
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    chunks[index] = chunk;
    index++;
  }
  return chunks;
};
