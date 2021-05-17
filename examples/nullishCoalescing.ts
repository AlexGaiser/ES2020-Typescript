export const undefinedWithString = (str: string): undefined | string => {
  return undefined ?? str;
};

export const falseWithString = (str: string): Boolean | string => {
  return false ?? str;
};

export const NaNWithString = (str): string => {
  return NaN ?? str;
};

export const nullWithString = (str): null | string => {
  return null ?? str;
};
