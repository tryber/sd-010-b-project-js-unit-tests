const average = (arr) => {
  let count = 0;
  if (arr.length === 0) return undefined;

  for (let num of arr) {
    if (typeof num === 'string') {
      return undefined;
    }
    count += num;
  }

  return Math.round(count / arr.length);
};

module.exports = average;
