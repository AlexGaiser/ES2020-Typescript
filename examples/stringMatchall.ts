/*
 Requires downlevel iteration 

 Reasoning found here:
 https://mariusschulz.com/blog/downlevel-iteration-for-es3-es5-in-typescript
*/

const stringMatchall = (
  str: string,
  regex: RegExp
): IterableIterator<RegExpMatchArray> => {
  return str.matchAll(regex);
};

export default stringMatchall;
