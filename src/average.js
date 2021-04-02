/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  let sumOfArray = 0;
  if (array.length < 1) {
    return undefined;
  }
  for (let empytIndex = 0; empytIndex < array.length; empytIndex += 1) {
    if (typeof (array[empytIndex]) !== 'number') {
      return undefined;
    }
  }
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    sumOfArray += array[index2];
  }
  sumOfArray = Math.round(sumOfArray / array.length);
  return sumOfArray;
};

module.exports = average;
