

export const groupElementBy = (key: any, array: any) => {
    return array.reduce((acc: any, current: any) => {
      (acc[current[key]] = acc[current[key]] || []).push(current);
      return acc;
    }, {});
};