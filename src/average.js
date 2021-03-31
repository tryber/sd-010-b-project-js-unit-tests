const average = (array) => {
  let soma = 0;
  let media = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let key = 0; key < array.length; key += 1) {
    const elemento = array[key];
    if (typeof elemento !== 'number') {
      return undefined;
    }
    soma += elemento;
  }
  media = (soma / array.length);
  return Math.round(media);
};

module.exports = average;
