export const wait = <T>(delay: number, value: T | null = null) => {
  return new Promise<T | null>((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
};
