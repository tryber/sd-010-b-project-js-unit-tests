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

const average = (arr) => {
  let quant = 0;
  let tamanho = 0;
  let result = 0;
  if (arr.length === 0) {
    result = undefined;
  }
  for (let index = 0; index < arr.length; index += 1) {
    if (typeof arr[index] !== 'number') {
      result = undefined;
      break;
    }
    quant += arr[index];
    tamanho += 1;
  }
  if (result === 0) {
    result = Math.round(quant / tamanho);
  }
  return result;
};

module.exports = average;

console.log(average([]));
