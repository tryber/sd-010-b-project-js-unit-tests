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
  let cont = 0;
  if (arr.length === 0) {
    return undefined;
  }
  for (let i = 0; i < arr.length; i += 1) {
    cont += arr[i];
    if (typeof (arr[i]) !== 'number') {
      return undefined;
    }
  }
  return Math.round(cont / arr.length);
};
console.log(average([3, 4, 5]));

module.exports = average;
