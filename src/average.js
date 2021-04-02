const average = (param) => {
  let sum = 0;
  let count = 0;
  if (param.length === 0) {
    return undefined;
  }
  for (let index = 0; index < param.length; index += 1) {
    sum += param[index];
    count += 1;
    if (typeof (param[index]) !== 'number') {
      return undefined;
    }
  }
  let media = sum / count;
  return Math.round(media);
};

module.exports = average;
