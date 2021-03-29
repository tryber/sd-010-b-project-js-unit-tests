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

const average = (arrNumbers) => {
  if (arrNumbers.length === 0) return undefined;
  let accumulator = 0;
  for (let index = 0; index < arrNumbers.length; index += 1) {
    if (typeof arrNumbers[index] !== 'number') {
      return undefined;
    }
    accumulator += arrNumbers[index];
  }
  return Math.round(accumulator / arrNumbers.length);
};

module.exports = average;
