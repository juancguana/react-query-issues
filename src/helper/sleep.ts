export const sleep = (seconds: number): Promise<Boolean> => {

  return new Promise((resolve) => {
    setTimeout(() => resolve(true), seconds * 1000);
  });
}