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
  // Caso Array esteja vazio
  if (array.length < 1) {
    return undefined;
  }
  // Caso Array possua algum valor que não seja um número
  for (let i in array) {
    if (typeof array[i] !== 'number') {
      return undefined;
    }
  }
  // Cálculo da Média dos valores do Array
  let Average = 0;
  for (let i = 0; i < array.length; i += 1) {
    Average += array[i];
  }
  Average = Math.round(Average / array.length);
  return Average;
};

module.exports = average;
