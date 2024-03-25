export function removeElementById(
  arr: any[],
  idToRemove: number | string
): any[] {
  const indexToRemove = arr?.findIndex(
    (element) => element?.id.toString() === idToRemove.toString()
  );

  if (indexToRemove !== -1) {
    // Create a new array without the element to be removed
    return [...arr?.slice(0, indexToRemove), ...arr?.slice(indexToRemove + 1)];
  }

  // If the id is not found, return the original array
  return arr;
}
