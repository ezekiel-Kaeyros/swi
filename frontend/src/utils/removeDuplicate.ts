export function removeDuplicates(arr: []) {
    return arr.filter((value, index, self) => {
      return self.findIndex((t) => {
        return JSON.stringify(t) === JSON.stringify(value);
      }) === index;
    });
  }
  